// 3d.js



document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    //Optional: Event listener for when audio ends.
    audio.addEventListener('ended', function(){
        console.log("audio ended");
    });

    //Optional: Event listener for when audio has loaded.
    audio.addEventListener('loadeddata', function(){
        console.log("audio loaded");
    });

    //Optional: Event listener for errors.
    audio.addEventListener('error', function(e){
        console.error("Audio error: ", e);
    });

});

document.getElementById('lowerbutton').addEventListener('click', function() {
    window.location.href = 'innerpage.html'; // Navigate to the other page
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    audio.addEventListener('ended', function(){
        console.log("audio ended");
    });

    audio.addEventListener('loadeddata', function(){
        console.log("audio loaded");
    });

    audio.addEventListener('error', function(e){
        console.error("Audio error: ", e);
    });

});