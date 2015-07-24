/*
    Joshuah Goshen
    SDI 1507
    July 23, 2015
    Conditional Assignment
 */

// I am going to the movies and these are My Variables that I am going to use
var firstStep     = "I am going to get in the car and drive to the movie theatre"; //The first step in getting to the movies
var secondStep    = "Then I am going get out of the car to walk"; //The second step in getting into the movies
var movie         = "Mad Max"; //Is the name of the movie I'm going to see
var movieTime     = "7:50"; //Time the movie is playing that I am going to
var altMovieTime  = "8:30"; //The other movie time

console.log("In order to get to the movies, first" + " " + firstStep + ".");
console.log(secondStep + "up to the ticket window" + ".");
console.log("I'm going to see the movie" + " " + movie + ".");
console.log("There are two movie times" + " " + movieTime + " " + "and" + " " + altMovieTime + "." );

preferredTime= confirm("You want to see the movie at 7:50? (OK for YES, Cancel for NO)");

if (preferredTime === true) {
    //code that runs if I want to see the movie at 7:50
    console.log("Get in line and buy your tickets.");
} else {
    //code that runs if you don't want to see the 7:50 movie
    console.log("There's also an 8:30 show, buy tickets for that time.");
}

var movieType    = prompt("There are two ways to see the movie, either IMAX or 3D. \n Please enter which you would rather see");
if (movieType === "IMAX") {
    console.log("Tickets are still available, and you get to see the movie the way you wanted to!");
} else if (movieType === "3D") {
    console.log("Shucks, well atleast you still get to see the movie.");
} else {
    console.log ("There's only two ways to watch the movie, How do you plan on watching it then?");
}
