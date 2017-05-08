var fs = require('fs-extra');
var glob = require('glob');
var exec = require('child_process').exec;
var replaceInFile = require('replace-in-file');
var minify = require('html-minifier').minify;

var builder = {

    build: {},

    run: function () {
        console.log('* starting build');
        this.resetDistDirectory()
            .then(this.installDependencies)
            .then(this.copyAppCode)
            .then(this.removeDispensableDirectories)
            .then(this.removeDispensableFiles)
            .then(this.readVersion)
            .then(this.setVersionSuffix)
            .then(this.minifyFiles)
            .catch(function (error) {
                console.error('error', error);
            });
    },

    resetDistDirectory: function () {
        console.log('* resetting dist directory');
        return new Promise(function (resolve, reject) {
            fs.emptyDir('dist')
                .then(resolve)
                .catch(reject);
        });
    },

    installDependencies: function () {
        console.log('* installing bower dependencies');
        return new Promise(function (resolve, reject) {
            fs.copy('bower.json', 'dist/bower.json')
                .then(function () {
                    process.chdir('dist');
                    var child = exec('bower install -p -o', function (error) {
                        process.chdir('../');
                        if (error !== null) {
                            return reject(error);
                        }
                        fs.remove('dist/bower.json')
                            .then(function () {
                                return fs.copy(
                                    'dist/bower_components/vega-lite-sourcemap/index.map',
                                    'dist/bower_components/vega-lite/vega-lite.min.js.map'
                                );
                            })
                            .then(resolve);
                    });
                });
        });
    },

    copyAppCode: function () {
        console.log('* copying app code');
        return new Promise(function (resolve, reject) {
            fs.copy('config', 'dist/config')
                .then(function () {
                    return fs.copy('src', 'dist/src');
                })
                .then(function () {
                    return fs.copy('favicon.ico', 'dist/favicon.ico');
                })
                .then(function () {
                    return fs.copy('README.md', 'dist/README.md');
                })
                .then(function () {
                    return fs.copy('index.html', 'dist/index.html');
                })
                .then(resolve)
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    removeDispensableDirectories: function () {
        console.log('* removing dispensable directories');
        return new Promise(function (resolve, reject) {
            var pattern = "dist/**/+(demo|examples|test|tests|guides|docs|doc)/";
            glob(pattern, function (error, dirs) {
                if (error) {
                    return reject(error);
                }
                var remainingDirs = dirs.length;
                dirs.forEach(function (path) {
                    fs.emptyDir(path)
                        .then(function () {
                            return fs.remove(path);
                        })
                        .then(function () {
                            if (--remainingDirs === 0) {
                                resolve();
                            }
                        })
                        .catch(function(error) {
                            reject(error);
                        })
                });
            });
        });
    },

    removeDispensableFiles: function () {
        console.log('* removing dispensable files');
        return new Promise(function (resolve, reject) {
            var pattern = "dist/**/+(*.feature|.*|bower.json|CONTRIBUTING.md|README.md|package.json|ol-debug.js|proj4.src|hero.svg)";
            glob(pattern, {dot: true}, function (error, files) {
                if (error) {
                    return reject(error);
                }
                var remainingFiles = files.length;
                files.forEach(function (path) {
                    if (path === 'dist/README.md') {
                        if (--remainingFiles === 0) {
                            resolve();
                        }
                        return;
                    }
                    fs.remove(path)
                        .then(function () {
                            if (--remainingFiles === 0) {
                                resolve();
                            }
                        })
                });
            });
        });
    },

    readVersion: function () {
        console.log('* reading version from bower.json');
        return new Promise(function (resolve, reject) {
            fs.readJson('bower.json')
                .then(function (obj) {
                    builder.build.version = obj.version;
                    resolve();
                })
                .catch(reject);
        })
    },

    setVersionSuffix: function () {
        console.log('* setting version suffix to', builder.build.version);
        return new Promise(function (resolve, reject) {
            var options = {
                files: [
                    'dist/index.html',
                    'dist/config/manifest.json',
                    'dist/src/**/*.html'
                ],
                allowEmptyPaths: true,
                from: /##appVersion##/g,
                to: builder.build.version
            };
            replaceInFile(options)
                .then(resolve)
                .catch(reject);
        });
    },

    minifyFiles: function () {
        console.log('* minifying files');
        return new Promise(function (resolve, reject) {
            var options = {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                keepClosingSlash: true,
                ignoreCustomFragments: [
                    /<ev-sparql-query[\s\S]*?ev-sparql-query>/
                ],
                minifyCSS: true,
                minifyJS: true
            };
            var pattern = "dist/src/**/*.html";
            glob(pattern, function (error, files) {
                if (error) {
                    return reject(error);
                }
                files.push('dist/index.html');
                var remainingFiles = files.length;
                var size = 0, mSize = 0;
                files.forEach(function (path) {
                    fs.readFile(path, 'utf8', function (error, data) {
                        if (error) {
                            return reject(error);
                        }
                        var minified = minify(data, options);
                        size += data.length;
                        mSize += minified.length;
                        fs.writeFile(path, minified, 'utf8', function (error) {
                            if (error) {
                                return reject(error);
                            }
                            if (--remainingFiles === 0) {
                                console.log('* minified build size to', (100 * mSize/size).toFixed(2), 'percent');
                                resolve();
                            }
                        });
                    });
                });
            });
        });
    }
};

module.exports = builder;
