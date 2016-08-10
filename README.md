# Emissies Vlaanderen

Emission Explorer for Flanders

## Documentation

* ["Living" documentation for project stakeholders and developers](documentation.html)
* [User Manual](http://bnowack.github.io/emissies-vlaanderen/manual.html)

## Repository Layout

* `/bower_components`               - Client-side dependencies
* `/node_modules`                   - NodeJS development dependencies
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
