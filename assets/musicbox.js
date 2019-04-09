if (typeof(Storage) !== 'undefined') {
    var music = document.getElementById('music');
    if(localStorage.musicCurrentTime)
        music.currentTime = Number(localStorage.musicCurrentTime);
    else
        music.currentTime = 4;
    music.play();

    window.onbeforeunload = function(){
        localStorage.musicCurrentTime = music.currentTime;
    }
}