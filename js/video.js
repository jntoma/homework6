var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	var volume = document.querySelector("#volumeSlider").value / 100;
	video.volume = parseFloat(volume);
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * (0.8);
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * (1.25);
	console.log("Speed is "+ video.playbackRate);
}
//
function skipAhead() {
	video.currentTime += 60;
	video.onended = function() {
		video.currentTime = 0;
		video.playbackRate = 1;
		video.play();
		console.log("Current location is "+ video.currentTime);
	}
	console.log("Current location is "+ video.currentTime);
}
//
function mute() {

			if (video.muted == false) {
				video.muted = true;
				document.querySelector("#mute").innerHTML = "Unmute";
				console.log("Muted");
			} else {
				video.muted = false;
				document.querySelector("#mute").innerHTML = "Mute";
				console.log("Unmuted");
			}

}
//
function changeVolume() {
		var volume = document.querySelector("#volumeSlider").value / 100;
   	video.volume = parseFloat(volume);
		document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
		console.log("Volume is " + volume + "%");
}
//
//
function gray() {
	document.querySelector("#myVideo").classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	document.querySelector("#myVideo").classList.remove("grayscale");
	console.log("In color")
}
