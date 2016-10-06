
Feature: Web application
    In order to use the application
    As a user
    I can use the app like a typical website

    Scenario: Accessing the homepage
        When I go to "/"
        Then the response code should be "200"
        And the response header "Content-Type" should match "text/html"
        And I should see "Emissies Vlaanderen" in the "title" element

    Scenario: Retrieving a manifest file for homescreen apps
        When I go to "/config/manifest.json"
        Then the response code should be "200"
        Then the response header "Content-Type" should match "application/json"
