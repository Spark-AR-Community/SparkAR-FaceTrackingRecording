//FaceTrackingRecording by @Juanmv94

/* CONFIGURATION */

const frameRate = 15;
const numFrames = 34;

// Insert your recording data in recording.js!
const recording = require('./recording.js');

// debug
// const {log} = require('Diagnostics')
// log(recording)

/* END CONFIGURATION */

const R = require('Reactive');
const Time = require('Time');
const Scene = require('Scene');
const Textures = require('Textures');
const CameraInfo = require('CameraInfo');

const intervalms = 1000 / frameRate;

const poslist = recording.map(el => {
	return [
		R.point(el.posx, el.posy, el.posz),
		el.rotx / 180 * Math.PI,
		el.roty / 180 * Math.PI,
		el.rotz / 180 * Math.PI
	];
});

var timer, frame = 0;

Promise.all([
	Textures.findFirst("animationSequence0"),
	Scene.root.findByPath("**/faceMesh*")
]).then(([animationSequence, faceMeshes]) => {

	timer = Time.setInterval(onFrame, intervalms);

	function onFrame() {
		if (frame < recording.length) {
			var nv = poslist[frame];
			faceMeshes.forEach((fm) => {
				fm.transform.position = nv[0];
				fm.transform.rotationX = nv[1];
				fm.transform.rotationY = nv[2];
				fm.transform.rotationZ = nv[3];
			});
		}
		animationSequence.currentFrame = frame;
		frame++;
		frame = frame % numFrames;
	}

	// resets the playback when user starts recording
	CameraInfo.isRecordingVideo.monitor().subscribe((v) => {
		if (v.newValue) {
			frame = 0;
			onFrame();
		}
	});

});

