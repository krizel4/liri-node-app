//=============
// LIRI : BASIC FUNCTIONS ARE TO SEARCH SPOTIFY FOR SONGS, BANDS IN TOWN FOR CONCERTS AND OMDB FOR MOVIES
//=============

//=============
// GLOBAL VARIABLES
//=============

require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");


// Take in the command line arguments
const arg1 = process.argv[2];
const arg2 = process.argv.slice(3).join(" ");

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
// BANDS IN TOWN
//=============

function getMyBands(bandName) {
    const queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {
        if (response.data.length <= 0) {
            console.log("Please type in an artist.")
        } else {
            for (var i = 0; i < response.data.length; i++) {
                let concertInfo = `\n
                Venue: ${response.data[i].venue.name}
                Location: ${response.data[i].venue.city + ", " + response.data[0].venue.region}
                Event Date: ${moment(response.data[i].datetime).subtract(10, 'days').calendar()},
                ------------------------`
                console.log(concertInfo)
            }
        }
    });
}

// function doWhatItSays(){
//     fs.readFile("random.txt", "utf8", function(err, data){
//         if(err) throw err;
//         console.log(JSON.stringify(data));
//         var dataArr = data.split(",");
//         startLiri(dataArr[0],dataArr[1]);
//     })
// }

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
                console.log("Error Occurred: " + err)
                return;
            }
            let songs = data.tracks.items;
            //console.log(JSON.stringify(songs, null, 4));
            for (var i = 0; i < songs.length; i++) {

                console.log("Artist: " + songs[i].artists[0].name);
                console.log("Album: " + songs[i].album.name)
                console.log("Track: " + songs[i].name);
                console.log("Preview Link: " + songs[i].preview_url);
                console.log("----------");
            }
        })
    }
}

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