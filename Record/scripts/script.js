//FaceTrackingRecording by @Juanmv94

/* CONFIGURATION */

const frameRate = 1;
const numFrames = 12*8;

/* END CONFIGURATION */

const {log} = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');
const R = require('Reactive');

const intervalms = 1000 / frameRate;

var frame = 0;
var recording = new Array(numFrames);
var waiting = true;
var interval = null;

Promise.all([
	Patches.outputs.getVector("pos"), 
	Patches.outputs.getVector("rot")
]).then(head => {
	
	// Patches.outputs.getPulse("start").then((pv) => {
	// 	pv.subscribe(() => {
	// 		if (waiting) {
	// 			waiting = false;
				Patches.inputs.setBoolean("waiting", false);
				interval = Time.setInterval(onFrame, intervalms);
				onFrame();
			// }
		// });
	// 	Patches.inputs.setBoolean("waiting", true);
	// });

	function onFrame() {
		const [posx, posy, posz, rotx, roty, rotz] = [
			head[0].x.pinLastValue(),
			head[0].y.pinLastValue(),
			head[0].z.pinLastValue(),
			head[1].x.pinLastValue(),
			head[1].y.pinLastValue(),
			head[1].z.pinLastValue(),
		]

		recording[frame++] = { posx, posy, posz, rotx, roty, rotz };
		Patches.inputs.setPulse("frame", R.once());
		if (frame == numFrames) {
			Time.clearInterval(interval);
			log("Recording completed!")
			log("module.exports = " + JSON.stringify(recording));
			Patches.inputs.setBoolean("waiting", true);
			waiting = true;
		}
	}
});
