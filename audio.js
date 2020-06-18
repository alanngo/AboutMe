
function playMusic()
{
    var aud = new Audio("grad/music.mp3");
    
    aud.play();
    console.log("playing audio");
}
window.onload = playMusic();
