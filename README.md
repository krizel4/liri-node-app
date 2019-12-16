# liri-node-app
Like Siri, but Liri. 

For this assignment, we created a simple application called "LIRI" which stands for "Language Interpretation and Recognition Interface". It's a command line node app that takes in parameters and returns data to the user. 

This app sends requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. 

# How to Run the App
The app searches for music, concerts and OMDB. To search for any of them, below are the arguments:

* spotify-this-song: This will search through Spotify for music information.
* concert-this: This will search Bands in Town for any upcoming concerts as defined by the user.
* movie-this: This will search through OMDB for information on a movie, such as a rating, Rotten Tomatoes score, and more.
* do-what-it-says: This uses the `fs` Node package to take text from random.txt and then use it to call one of LIRI's commands.

# Preview of the App

# Built With
* Node.js
* moment.js
* APIs from Spotify, Bands in Town, & OMDB
* NPMs from Moment, DotEnv, & Axios