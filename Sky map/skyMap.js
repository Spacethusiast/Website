window.onload = function() {

	var video = document.getElementById("video");
	var playButton = document.getElementById("play-pause");
	var fullScreenButton = document.getElementById("full-screen");
	var seekBar = document.getElementById("seek-bar");
	if(today.getHours() > 12) {
        	var time = (today.getHours() - 12 + today.getMinutes()/60) * 7.14;
    	} else {
        	var time = (today.getHours() + today.getMinutes()/60) * 7.14;
    	}
    
    	document.getElementById('video').addEventListener('loadedmetadata', function() {
        	this.currentTime = time;
    	},  false);

	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			
			video.play();
			playButton.innerHTML = "Pause";
		} else {
			
			video.pause();
			playButton.innerHTML = "Play";
		}
	});

	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); 
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); 
		}
	});
	
	seekBar.addEventListener("input", function() {
		
		var time = video.duration * (seekBar.value / 100);
		video.currentTime = time;
	});	
	
	video.addEventListener("timeupdate", function() {
		
		var value = (100 / video.duration) * video.currentTime;
		seekBar.value = value;
	});
	
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});
}
