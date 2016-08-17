# Application Requirements

Requirements for the "Emissies Vlaanderen" application.

## Technical Requirements

* The application uses the [Polymer framework](https://www.polymer-project.org/).
* The application is a pure client-side solution, server-side components are provided as APIs.
    * APIs are CORS-enabled
* The application can be run in a sub-directory or at a (sub-)domain's root path.

## UI

* Ideally, the application follows the [Flemish Government Style Guide](http://webstijlgids.vlaanderen.be/)
* UI components follow Google's Material Design guidelines (default behaviour of Polymer applications)
* The color palette and logo is aligned with the [LNE website](https://www.lne.be/)

## Localization

* The application is available in Dutch (primary) and English (secondary).
    * The application developer creates an initial English language file.
    * The Dutch language file will be provided by the project owner, based on the list of English equivalents.

## Core Features

1. The application provides a zoomable and pannable map of Flanders.
    1. The map is compatible with [OpenLayers](http://openlayers.org/).
    1. The map uses OpenStreetMap or (preferably, if time permits) the [Flanders Web Map Tile Service](https://tile.informatievlaanderen.be/).
1. Users can set a map location.
    1. The application offers automatic geo-detection to retrieve a user's current position (HTML5 Geolocation API).
    1. The user can select a location by clicking on the map
1. Users can set a radius for finding emission points around a selected location.
    1. Default radius: 10km
1. The application retrieves matching emission points from a [SPARQL endpoint](http://rdfstoreomv-on-1.cumuli.be:3030/rdfstoreomv/archive/sparql).
    1. Emission points around a selected location are shown on the map
    1. Emission points around a selected location are shown as a list
    1. An emission point can be selected
1. The application opens a data view for a selected emission point:
    * Details: throughput, type, ...
    * Zoomed-in map of the exploitation site
    * Site information from [CBB](http://lodcbbomv-on-1.cumuli.be:8080/lodcbbomv/repositories/CBB) and [KBO](http://rdfstoreomv-on-1.cumuli.be:3030/rdfstoreomv/kbo/sparql)
    * Organisation information from [CBB](http://lodcbbomv-on-1.cumuli.be:8080/lodcbbomv/repositories/CBB) and [KBO](http://rdfstoreomv-on-1.cumuli.be:3030/rdfstoreomv/kbo/sparql)
    * Emission graphs for each pollutant
        * x-axis: reported years
        * y-axis: emission
    * Link to PubChem for each pollutant

## Extended Features (time permitting)

1. Users can open aggregation views from emission point data views
    * Link to site view
    * Link to organisation view
    * Link to NACE comparison view
1. The application provides site views
    * A site view shows all pollutants for a given site (across multiple emission points)
1. The application provides organisation views
    * An organisaton view shows all pollutants for a given organisation (across multiple sites)
1. The application provides NACE comparison views
    * A comparison view shows pollution data for organisations with same NACE codes

