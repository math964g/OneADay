function getRandomChallenge()
{
    var challenges = [
        "Do a silly face to a random stranger",
        "Stop procastinating",
        "Do it, TODAY",
        "Don't drink the water in the wishing well"
    ];

    // return challenges[Math.floor(Math.random() * names.length)];
    var loadedchallenge = challenges[Math.floor(Math.random() * challenges.length)];

    var output = document.getElementById("boxtxt").innerHTML;
    var res = output.replace("Contact maintenance", loadedchallenge);
    document.getElementById("boxtxt").innerHTML = res;
}

getRandomChallenge();
// document.write( getRandomName() );
//
//
// function clickchange() {
//         var ptag = document.getElementById('par1');
//         ptag.innerHTML = 'Observe the Change';
//     }
