var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let slower = document.getElementById("slower");
let faster = document.getElementById("faster");
let skip = document.getElementById("skip");
let mute = document.getElementById("mute");
let slider = document.getElementById("slider");
let volume = document.getElementById("volume");
let vintage = document.getElementById("vintage");
let orig = document.getElementById("orig");

volume.addEventListener("change", function(e) {
audio.slider = e.currentTarget.value / 100;
})

play.addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	volume.textContent = video.volume;
});

pause.addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

