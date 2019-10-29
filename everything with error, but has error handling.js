console.log("JS running");

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
    // Error handling
    // If successfull - continue
    if (challengeRequest.status >= 200 && challengeRequest.status < 400) {
      // Parses the data as JSON, basically converting it into code instead of a string
      var challengeData = JSON.parse(challengeRequest.responseText);

      pasteChallenge(challengeData);
    }
    // If unsuccessfull - Throw sorry message in the users face
    else {
      chalBox.innerHTML = "Sorry, i did an oopsie"
    }
  };

  challengeRequest.onerror = funciton() {
    chalBox.innerHTML = "Sorry, i did an oopsie";
  };

  // This sends the XMLHttpRequest we created, to the internetz
  challengeRequest.send();
});

function pasteChallenge(data) {
  chalBox.innerHTML = data[Math.floor(Math.random() * data.length)].description;
};





// Loads previously assigned variable
var prev = localStorage.getItem("prevChallenge");

// Assigns the previous challenge to the box
document.getElementById("boxtxt").innerHTML = prev;

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

// Challenge library

function getRandomChallenge() {
  var challenges = [
    // "&#127881; Go clubbing alone or with strangers &#127881;",
    // "Stop procastinating &#9203;",
    // "Do it, TODAY &#128581;",
    // "Compliment a person today",
    // "Be at work/school without posing",
    // "Jump into a huge body of water (BONUS at night)",
    // "Meetup with a group of strangers",
    // "Confess true feelings to someone, good or bad",
    // "Paint an abstract colorful piece",
    // "Plan your next tattoo and show it by midnight",
    // "Write a song about feelings",
    // "Go sing karaoke",
    // "Compliment a STRANGER today",
    // "Plan where you are in life in 2 years, and share it",
    // "Buy that one thing you don't need but really desire",
    // "Express gratitude of 3 things to someone",
    // "Go hiking",
    // "Nudity. Cause skinny dipping is fun",
    // "Clubbing without alchohol",
    // "Buying something ridiculously stupid",
    // "Sing loudly and proudly",
    // "Build something",
    // "Write something",
    // "Paint something",
    // "Wear the yes hat for a day",
    // "Color part of your hair in a different color",
    // "Shout at the top of your lungs",
    // "Overcome a fear",
    // "Find an idea",
    // "Wear a silly outfit",
    // "Wear an out of character outfit",
    // "Don't drink the water in the wishing well &#128689;",
    // "Do a 20 minute workout &#127947;"
    "Test 1",
    "Test 2",
    "Test 3"
  ];

  loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];

  while (loadedchallenge == prev) {
    // Picks a random challenge
    loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];
  }

  var output = document.getElementById("boxtxt").innerHTML;

  prev = loadedchallenge;

  // Assigns variable to be used in next site load
  localStorage.setItem("prevChallenge", prev);

  document.getElementById("boxtxt").innerHTML = loadedchallenge;
}

// // Audio player
// var audio = new Audio("audio/vibes.mp3");
//
// audio.oncanplaythrough = function() {
//   audio.play();
// }
//
// audio.loop = true;
//
// audio.onended = function() {
//   audio.play();
// }