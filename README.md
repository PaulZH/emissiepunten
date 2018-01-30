# Emissies Vlaanderen

Flanders Emission Explorer

## Documentation

* ["Living" documentation for project stakeholders and developers](http://projects.bnowack.de/2016/06-emissies-vlaanderen/documentation.html)

## Preview

* [Preview](http://projects.bnowack.de/2016/06-emissies-vlaanderen/)

## Repository Layout

* `/bower_components`               - Client-side dependencies
* `/node_modules`                   - NodeJS development dependencies
* `/config`                         - Configuration files
    * `app-config.json`             - Configuration options for APIs, SPARQL prefixes, LD base URLs, map markers
    * `manifest.json`               - Manifest file for "add to homescreen"-apps
* `/dev`                            - Development files
    * `/e2e`                        - Files for End-to-End tests
        * `/config`                 - Configuration files
            * `karma.conf.js`       - Karma Test Runner configuration (using CucumberJS)
            * `step-definitions.js` - CucumberJS step definitions
        * `/reports`                - Test runner reports
    * `/js-specs`                   - Files for Spec/Unit tests
        * `/config`                 - Configuration files
            * `karma.conf.js`       - Karma Test Runner configuration (using CucumberJS)
            * `step-definitions.js` - CucumberJS step definitions
        * `/fixtures`               - Spec fixtures
        * `/reports`                - Test runner reports
* `/dist`                           - Latest production-ready release
* `/scripts`                        - Build scripts
* `/src`                            - Project module files
    * `/$MODULE`                    - module directory ("app" is used for the main application module)
        * `/doc`                    - module documentation
            * `/img`                - wireframes, mockups
            * `requirements.md`     - module requirements (project doc, referenced from `/documentation.html`)
            * `concept.md`          - module concept and designs (project doc, referenced from `/documentation.html`)
            * `$MODULE.feature`     - cucumber feature file(s) (converted by test runner to project and developer doc)
            * `$FEATURE.md`         - feature explanation (user doc, referenced from `/manual.html`)
        * `/img`                    - module image assets
        * `$MODULE.html`            - module element file (polymer)
    * `/...`                        - next module directory
* `index.html`                      - application index file
* `manual.html`                     - User manual
* `documentation.html`              - Stakeholder and developer documentation

## Local Installation

* `npm install`
* `bower install`
* `cp bower_components/vega-lite-sourcemap/index.map bower_components/vega-lite/vega-lite.min.js.map` (optional)
* `npm run app` => `http://localhost:8080/` (or any alternative web server setup)

## SPARQL Endpoint Configuration
  
* Endpoints can be configured in the `apis` section in `/config/app-config.json`.

## Linked Data HREF Configuration

* To replace selected LD URLs in link hrefs, e.g. "id.milieuinfo.be" with "id-ontwikkel.milieuinfo.be,
  adjust the `linkedDataServers` section in `/config/app-config.json`.

## Site and Emission Point Table Configuration

* Data Tables (labels and skippable predicates) can be configured in the `dataTableProperties` section in `/config/app-config.json`.

## Building a release

* Switch to the `master` branch
* Update the dependencies
    * `bower install` or `bower update`
* Run the build script
    * `npm run build`

## Deployment
* Align settings in `/dist/config/app-config.json` with target server setup.
* Copy the contents of the `dist` directory to the target web server
