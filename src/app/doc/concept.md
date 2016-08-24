# Concept & Designs

Technical concept and screen designs of the "Emissies Vlaanderen" application.

## Layout

* The layout follows the [official design guidelines](http://webstijlgids.vlaanderen.be/voor-ontwikkelaars):
    * it has a global header ([styleguide](http://webstijlgids.vlaanderen.be/global-header-en-footer))
    * it has a branded website header ([styleguide](http://webstijlgids.vlaanderen.be/styling-opties))
    * it uses a service navigation instead of a site navigation to save space ([styleguide](http://webstijlgids.vlaanderen.be/element/service-navigatie-en-taalswitch))
    * it has a content area with the official background pattern ([styleguide](http://webstijlgids.vlaanderen.be/element/achtergrond))
    * it has a global footer ([styleguide](http://webstijlgids.vlaanderen.be/global-header-en-footer))

* The layout allows switching between Dutch and English ([styleguide](http://webstijlgids.vlaanderen.be/element/service-navigatie-en-taalswitch))

![design](src/app/doc/img/layout-desktop-02.png)

## Start

* On the start screen, users can:
    * read a short introduction
    * start quickly by clicking on a button or the map
    * detect their location (HTML5 geolocation API)
    * pan and zoom a map of Flanders
    * define a radius for exploring emission points around a location
    * [time permitting] search for locations using a search field

![design](src/app/doc/img/start-desktop-02.png)

## Location selected

* When a location is selected, then:
    * matching emission points are shown on the map
    * matching emission points are shown as list
    * an emission point can be selected by clicking on a map marker or a list item

![design](src/app/doc/img/location-selected-desktop-02.png)

## Emission point selected

* When an emission point is selected, then:
    * the map zooms in to the current location with the selected radius still fully visible
    * a data view is shown and focused

* The data view contains information about:
    * the emission point
    * the associated site
    * the associated organisation
    * graphs for each pollutant
    * a link to PubChem for each pollutant (via the vertical options icon)

![design](src/app/doc/img/emission-point-selected-desktop-02.png)



