# Concept & Designs

Technical concept and screen designs of the "Emissies Vlaanderen" application.

## Layout
[layout-dt]: src/app/doc/img/layout-desktop.png

* The layout follows the official design guidelines:
    * it has a global header
    * it has a branded website header
    * it has a navigation bar (optional)
    * it has a content area with the official background pattern
    * it has a global footer

* The layout allows switching between Dutch and English 

[![][layout-dt]][layout-dt]

## Start
[start-dt]: src/app/doc/img/start-desktop.png

* On the start screen, users can:
    * read a short introduction
    * detect their location (HTML5 geolocation API)
    * pan and zoom a map of Flanders
    * define a radius for exploring emission points around a location

[![][start-dt]][start-dt]

## Location selected
[location-selected-dt]: src/app/doc/img/location-selected-desktop.png

* When a location is selected, then:
    * matching emission points are shown on the map
    * matching emission points are shown as list
    * an emission point can be selected by clicking on a map marker or a list item

[![][location-selected-dt]][location-selected-dt]

## Emission point selected
[point-selected-dt]: src/app/doc/img/emission-point-selected-desktop.png

* When an emission point is selected, then:
    * a data view is shown

* The data view contains information about:
    * the emission point
    * the associated site
    * the associated organisation
    * graphs for each pollutant
    * a link to PubChem for each pollutant (via the vertical options icon)

[![][point-selected-dt]][point-selected-dt]


