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

slower.addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed " + video.playbackRate);
});

faster.addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed " + video.playbackRate);
});

skip.addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if ((video.duration - video.currentTime) <= 15) {
		video.currentTime = 0;
		console.log("New location " + video.currentTime)
	}
	else {
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	};
});

mute.addEventListener("click", function() {
	if (document.getElementById("player1").muted == false) {
		document.getElementById("player1").muted = true;
		mute.textContent = "Unmute";
	}
	else {
		document.getElementById("player1").muted = false;
		mute.textContent = "Mute";
	};
});