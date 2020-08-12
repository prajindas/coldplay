var music = document.getElementById('music');


function playAudio() {
	if (music.paused) {
        music.play();
        document.getElementById("img-1").style.backgroundColor = 'greenyellow';

	} else {
        music.pause();
        document.getElementById("img-1").style.backgroundColor = 'red';

	}
}