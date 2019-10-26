console.log("JS running");

// Challenge retrieval + challenge paster

var chalBox = document.getElementById("boxtxt");
var chalButton = document.getElementById("loadnew");

chalButton.addEventListener("click", function() {
  // Creates a new XMLHttpRequest
  var challengeRequest = new XMLHttpRequest();
  // Opens the page and retrieves the information
  // "GET" = reading ... "POST" = posting ... Second argument is the link from where to get the info
  challengeRequest.open("GET", "https://raw.githubusercontent.com/math964g/OneADay/master/challenges.json");
  // When the request is loaded on the client browser, do the function
  challengeRequest.onload = function() {
    // Parses the data as JSON, basically converting it into code instead of a string
    var challengeData = JSON.parse(challengeRequest.responseText);
    pasteChallenge(challengeData);
  };

  // This sends the XMLHttpRequest we created, to the internetz
  challengeRequest.send();
});

function pasteChallenge(data) {
  getRandomChallenge(data);
  // chalBox.innerHTML = data[Math.floor(Math.random() * data.length)].description;
};

// 24-hour clock

var tick;

function clock() {
  var counter = new Date();
  var hour, minute, second;
  var time = "";

  // Gets the current time
  hour = counter.getHours();
  minute = counter.getMinutes();
  second = counter.getSeconds();

  // Puts a 0 in front of the second, to keep it at 2 digits - :07 instead of :7
  if (second <= 9) {
    second = "0" + second;
  }

  // Puts a 0 in front of the minute, to keep it at 2 digits - :07 instead of :7
  if (minute <= 9) {
    minute = "0" + minute;
  }

  // Puts a 0 in front of the hour, to keep it at 2 digits - :07 instead of :7
  if (hour <= 9) {
    hour = "0" + hour;
  }

  // Combines our second, minute, hour variables
  time += hour + ":" + minute + ":" + second;
  // Replaces the new time in our HTML
  document.getElementById('clock').innerHTML = time;
  // Repeats it every second
  tick = setTimeout("clock()", 1000);

  // Gets a new challenge at midnight
  if (time == "00:00:00") {
    getRandomChallenge();
  }
}

// No-repeat

// New challenge

var yesterday;
var today = new Date();
console.log(today);
var dateButton = document.getElementById("loaddate");

// Retrieve date and challenge info
dateButton.addEventListener("click", function() {
  var dateRequest = new XMLHttpRequest();
  dateRequest.open("GET", "https://raw.githubusercontent.com/math964g/OneADay/master/date.json");
  dateRequest.onload = function() {
    var dateData = JSON.parse(dateRequest.responseText);
    console.log(dateData);
  };

  dateRequest.send();
});

var dateRequest = new XMLHttpRequest();

dateRequest.open("GET", "https://raw.githubusercontent.com/math964g/OneADay/master/date.json");

dateRequest.onload = function() {
  // Parses the data as JSON, basically converting it into code instead of a string
  var dateData = JSON.parse(dateRequest.responseText);
  console.log(dateData);
};



// Match date info

// Retrieve new challenge

// Store new date & challenge info


// Same day
if (today == yesterday && todayChallenge == yesterdayChallenge) {
  //TODO: Do nothing - but assign yesterday challenge to the "boxtxt"
}

// New day
else {
  // TODO: Get a new challenge from the server
}

// Push today's challenge to the JSON file

// Loads previously assigned variable
var prev = localStorage.getItem("prevChallenge");

// Assigns the previous challenge to the box
document.getElementById("boxtxt").innerHTML = prev;


// Challenge picker

function getRandomChallenge(data) {

  loadedchallenge = data[Math.floor(Math.random() * data.length)].description;

  while (loadedchallenge == prev) {
    // Picks a random challenge
    loadedchallenge = data[Math.floor(Math.random() * data.length)].description;
  }

  var output = document.getElementById("boxtxt").innerHTML;

  prev = loadedchallenge;

  // Assigns variable to be used in next site load
  localStorage.setItem("prevChallenge", prev);

  document.getElementById("boxtxt").innerHTML = loadedchallenge;
}

// Audio player
var audio = new Audio("audio/vibes.mp3");

audio.loop = false;
