//FaceTrackingRecording by @Juanmv94

/* CONFIGURATION */

const frameRate = 12;
const numFrames = 12 * 8;

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
const Patches = require('Patches');

const intervalms = 1000 / frameRate;

const poslist = recording.map(el => {
	return [
		R.point(el.posx, el.posy, el.posz),
		el.rotx / 180 * Math.PI,
		el.roty / 180 * Math.PI,
		el.rotz / 180 * Math.PI
	];
});

var timer, frame = 1;

Promise.all([
	Textures.findFirst('animationSequence0'),
	// Scene.root.findByPath("**/faceMesh*")
]).then(([animationSequence, faceMeshes]) => {

	timer = Time.setInterval(onFrame, intervalms);

	function onFrame() {
		var nv = poslist[frame];
		Patches.inputs.setPoint('pos', nv[0]);
		Patches.inputs.setPoint('rot', R.point(nv[1], nv[2], nv[3]).mul(180/Math.PI));
		// if (frame < recording.length) {
			// var nv = poslist[frame];
			// faceMeshes.forEach((fm) => {
			// 	fm.transform.position = nv[0];
			// 	fm.transform.rotationX = nv[1];
			// 	fm.transform.rotationY = nv[2];
			// 	fm.transform.rotationZ = nv[3];
			// });
		// }
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

