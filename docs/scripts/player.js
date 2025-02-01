/* Player reference */
var player;

function initPlayer() {
    const tag = document.createElement('script');
    tag.id = 'iframe-script';
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    window['app'].then(module => {
        module.onPlayerReady(event.target.getVideoUrl());
    });
}

function onPlayerError(event) {
    window['app'].then(module => {
        module.onPlayerError(event.message);
    });
}

function playerLoadVideo(videoId) {
    player.loadVideoById(videoId, 0);
    window['app'].then(module => {
        module.onPlayerReady(videoId);
    });
}

function playerPlay(seconds) {
    player.seekTo(seconds);
    player.playVideo();
}

function playerMove(seconds) {
    player.seekTo(seconds);
}

function playerPause() {
    player.pauseVideo();
    return player.getCurrentTime();
}

function playerStop() {
    player.stopVideo();
}

function playerVolume(volume) {
    player.setVolume(volume);
}

function showPlayerComponent() {
    const component = document.getElementById('player-component');
    component.style.display = 'block'
}

function hidePlayerComponent() {
    const component = document.getElementById('player-component');
    component.style.display = 'none'
}

function resizePlayerComponent(top, scale) {
    const component = document.getElementById('player-component');
    component.style.position = 'fixed';
    component.style.top = (window.innerHeight * top / scale) + 'px';
}
