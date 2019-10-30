# Lab 27: Component-Based-UI

## Instructions
Refactor the application given by first modularizing it, and then altering it’s basic functionality of generating a random number into a proper counter application that tracks a number based on button clicks.

* Move the Header and Footer components to separate files
* Properly export them as defaults
* Import them into the App Component using ES6 import statement
* Create a Character component that takes img, name, and species as props
* Import Character into App and display 10 Rick and Morty characters (or characters from your favorite show)

BONUS:
* Make a List component that takes and array of items and a component
* List creates a ul of li with component by iterating over items

* Add some creative styling for the header in a Header.css file
* Create a file called Character.css and import that into the Character component

## Scripts
— "start": "webpack-dev-server --hot --mode development --devtool eval-source-map",
— "build": "webpack -p --devtool source-map"

## Submission Links
* [GitHub] (https://github.com/abbeymasters-401-advanced-javascript/component-based-ui/pull/1) 
* [Travis] (https://travis-ci.com/abbeymasters-401-advanced-javascript/component-based-ui/builds/134133294)