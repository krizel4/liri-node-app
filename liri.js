//=============
// LIRI : BASIC FUNCTIONS ARE TO SEARCH SPOTIFY FOR SONGS, BANDS IN TOWN FOR CONCERTS AND OMDB FOR MOVIES
//=============

//=============
// GLOBAL VARIABLES
//=============

const dotenv = require("dotenv").config();
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//=============
// SPOTIFY 
//=============

// Search for song name, preview link of the song, album that the song is from

// If no song, default to "The Sign" by Ace of Base

//=============
// BANDS IN TOWN
//=============

// Name of the venue
// Venue location
// Date of the Event (using MM/DD/YYYY)

// LINK MOMENT.JS?

//=============
// OMDB
//=============

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
