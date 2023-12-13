document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var sound = document.getElementById('sound');

    playButton.addEventListener('click', function() {
        sound.play();
    });
});
