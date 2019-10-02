function getRandomChallenge()
{
    var challenges = [
        "&#127881; Go clubbing alone or with strangers &#127881;",
        "Stop procastinating &#9203;",
        "Do it, TODAY &#128581;",
        "Compliment a person today",
        "Be at work/study without posing",
        "Jump into a huge body of water (BONUS at night)",
        "Meetup with a group of strangers",
        "Confess true feelings to someone, good or bad",
        "Paint an abstract colorful piece",
        "Plan your next tattoo and show it by midnight",
        "Write a song about feelings",
        "Go sing karaoke",
        "Compliment a STRANGER today",
        "Plan where you are in life in 2 years, and share it",
        "Buy that one thing you don't need but really desire",
        "Express gratitude of 3 things to someone",
        "Go hiking",
        "Nudity. Cause skinny dipping is fun",
        "Clubbing without alchohol",
        "Buying something ridiculously stupid",
        "Sing loudly and proudly",
        "Build something",
        "Write something",
        "Paint something",
        "Wear the yes hat for a day",
        "Color part of your hair in a different color",
        "Shout at the top of your lungs",
        "Overcome a fear",
        "Find an idea",
        "Wear a silly outfit",
        "Wear an out of character outfit",
        "Don't drink the water in the wishing well &#128689;",
        "Do a 20 minute workout &#127947;"
    ];

    // Picks a random challenge
    var loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];


    var output = document.getElementById("boxtxt").innerHTML;

    var prev = loadedchallenge;

    var res = output.replace("Contact maintenance", loadedchallenge);
    document.getElementById("boxtxt").innerHTML = res;

    // TODO: Need to implement a function that switches the challenge every 24-hour instead of on-load
    // TODO: Needs to make sure a challenge isn't repeated until 3 days or so after it's first apperance
    // IDEA: Add a timeframe of when the challenge has to be completed - Not just 24 hours, but some of them maybe 3 days - Allows you to plan the challenge and execute it if it's more complicated
}

getRandomChallenge();

window.onload = function() {
    document.getElementById("play_audio").play();
}
