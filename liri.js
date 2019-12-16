//=============
// LIRI : BASIC FUNCTIONS ARE TO SEARCH SPOTIFY FOR SONGS, BANDS IN TOWN FOR CONCERTS AND OMDB FOR MOVIES
//=============

//=============
// GLOBAL VARIABLES
//=============

const dotenv = require("dotenv").config();
const keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Take in the command line arguments
var arg1 = process.argv[2];
var arg2 = process.argv.slice(3).join(" ");

//=============
// START LIRI
//=============


function startLiri(arg1, arg2) {
    switch (arg1) {
        case "concert-this":
            getMyBands(arg2)
            break;
        case "spotify-this-song":
            getMeSpotify(arg2)
            break;
        case "movie-this":
            getMovieInfo(arg2)
            break;
        case "do-what-it-says":
            doWhatItSays()
            break;
        default:
            console.log("LIRI doesn't know that")
    }
}

startLiri(arg1, arg2);

//=============
// SPOTIFY 
//=============

function getMeSpotify(songName) {
    if (songName == undefined) {
        songName = "The Sign"
    } else {
        spotify.search({
            type: "track",
            query: songName,
            limit: 5
        }, function (err, data) {
            if (err) {
                console.log("err occurred: " + err)
                return;
            }
            var songs = data.tracks.items;
            //console.log(JSON.stringify(songs, null, 4));
            for (var i = 0; i < songs.length; i++) {

                console.log("album: " + songs[i].album.name)
                console.log("song name: " + songs[i].name);
                console.log("preview link: " + songs[i].preview_url);
                console.log("artist name: " + songs[i].artists[0].name);
                console.log("_______________________");
            }
        })
    }
}

//=============
// BANDS IN TOWN
//=============

function getMyBands(bandName){
    var queryQRL = "";
    axios.get(queryQRL).then(function(response){

    })
}
function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err) throw err;
        console.log(JSON.stringify(data));
        var dataArr = data.split(",");
        startLiri(dataArr[0],daataArr[1]);
    })
}

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