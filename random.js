console.log("JS running");

// 24-hour clock

var tick;

// Stops the clock
function stop() {
  clearTimeout(tick);
}

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

var prev = localStorage.getItem("prevChallenge");

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
    "Test 2"
  ];

  loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];

  while (loadedchallenge == prev) {
    // Picks a random challenge
    loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];
  }

  var output = document.getElementById("boxtxt").innerHTML;

  prev = loadedchallenge;
  localStorage.setItem("prevChallenge", prev);

  var res = output.replace("Contact maintenance", loadedchallenge);
  document.getElementById("boxtxt").innerHTML = res;

  // TODO: Add a day counter to show how many challenges are left / challenge counter
  // TODO: take things out of the array, so in the end it'll be empty. This allows to run all the challenges through without repetition of one
  // TODO: Need to implement a function that switches the challenge every 24-hour instead of on-load
  // TODO: Needs to make sure a challenge isn't repeated until 3 days or so after it's first apperance
  // IDEA: Add a timeframe of when the challenge has to be completed - Not just 24 hours, but some of them maybe 3 days - Allows you to plan the challenge and execute it if it's more complicated
}

// Audio player
var audio = new Audio("audio/vibes.mp3");

audio.oncanplaythrough = function() {
  audio.play();
}

audio.loop = true;

audio.onended = function() {
  audio.play();
}
