# interactive-shotchart
###NBA Shotchart

http://nba-shotchart.herokuapp.com

Single page web application that shows statistics for NBA games for the month of November in the 2009 season. Utilizes React for the front end and Node/Express and MongoDB/Mongoose for the back end. 

Data is taken from http://www.basketballgeek.com/data/ and animated slider is utilized from https://github.com/codrops/ItemSlider.

###Getting started

* Go to basketballgeek.com/data and download the 2009-2010 season
* Parse the data into JSON folders (my gulpfile.js will be useful for this)
* Add the parsed folder to the directory client/assets/parsed-data
* Invoke the function "createDocs" in the server.js folder, and have the first for loop in the function start at index 39 and end at 251
* If your server cannot handle running a large amount, run the function in increments

```
npm install
mongodb
nodemon server/server.js

```