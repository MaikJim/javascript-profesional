import MediaPlayer from "../MediaPLayer";

function AutoPlay() {
}
AutoPlay.prototype.run = function () {
    player.mute();
    player.play();
};

export default AutoPlay;