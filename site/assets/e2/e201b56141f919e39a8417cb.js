// loads the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

document.body.appendChild(tag);

const timeoutDuration = 100; // in milliseconds

// creates a player after the API code downloads
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onError
        }
    });
}

// the API will call this function when the video player is ready
function onPlayerReady(event) {
    let status = {
        id: event.target.playerInfo.videoData.video_id,
        name: event.target.playerInfo.videoData.video_name,
        duration: event.target.getDuration(),
        muted: event.target.isMuted(),
        videoTimeStamp: 0, // in seconds
        state: undefined
    };

    setTimeout(trackPlayerStatus, timeoutDuration, event.target, status);
}

// the API calls this function when the player's state changes
// -1 or YT.PlayerState.UNSTARTED
// 0 or YT.PlayerState.ENDED
// 1 or YT.PlayerState.PLAYING
// 2 or YT.PlayerState.PAUSED
// 3 or YT.PlayerState.BUFFERING
// 5 or YT.PlayerState.CUED
function onPlayerStateChange(event) {
    if (!window.analytics)
        return;
    
    if (event.data == YT.PlayerState.ENDED) {
        // Send relevant event to 1DS
        window.analytics.capturePageAction(null, {
            behavior: 245,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: 100,
                vidwt: status.duration,
                viddur: status.duration
            }
        });
    }
    else if (event.data == YT.PlayerState.PLAYING) {
        // reset the status
        status.videoTimeStamp = event.target.getCurrentTime();

        // Send relevant event to 1DS
        window.analytics.capturePageAction(null, {
            behavior: 240,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: status.duration == 0 ? 0 : (status.videoTimeStamp / status.duration) * 100,
                vidwt: status.videoTimeStamp,
                viddur: status.duration
            }
        });
    }
    else if (event.data == YT.PlayerState.PAUSED) {
        // Send relevant event to 1DS
        window.analytics.capturePageAction(null, {
            behavior: 241,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: status.duration == 0 ? 0 : (status.videoTimeStamp / status.duration) * 100,
                vidwt: status.videoTimeStamp,
                viddur: status.duration
            }
        });
    }
    else if (event.data == YT.PlayerState.BUFFERING) {
        // Send relevant event to 1DS
        window.analytics.capturePageAction(null, {
            behavior: 246,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: status.duration == 0 ? 0 : (status.videoTimeStamp / status.duration) * 100,
                vidwt: status.videoTimeStamp,
                viddur: status.duration
            }
        });
    }
    else if (event.data == YT.PlayerState.CUED) {
        // Send relevant event to 1DS
        window.analytics.capturePageAction(null, {
            behavior: 253,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: 0,
                vidwt: 0,
                viddur: status.duration
            }
        });
    }
}

function onError(event) {
    if (!window.analytics)
        return;

    // Send relevant event to 1DS
    window.analytics.capturePageAction(null, {
        behavior: 247,
        actionType: "CL",
        contentTags: {
            vidnm: status.name,
            vidid: status.id,
        }
    });
}

function trackPlayerStatus(player, status) {
    if (!window.analytics)
        return;

    let previousState = status.state;
    status.state = player.getPlayerState();
    
    // track skip
    // check if aren't aproximately where we should be (10% deviation allowed)
    // timestamp must be between +-1% of previous timestamp plus timeout duration
    if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        let previousTimestamp = status.videoTimeStamp;
        status.videoTimeStamp = player.getCurrentTime();

        const lowerLimit = (((previousTimestamp * 1000) + timeoutDuration) * 0.90);
        const upperLimit = (((previousTimestamp * 1000) + timeoutDuration) * 1.10);

        if (lowerLimit > status.videoTimeStamp * 1000 || upperLimit < status.videoTimeStamp * 1000) {
            
            // player skipped
            window.analytics.capturePageAction(null, {
                behavior: 244,
                actionType: "CL",
                contentTags: {
                    vidnm: status.name,
                    vidid: status.id,
                    vidpct: status.duration == 0 ? 0 : (status.videoTimeStamp / status.duration) * 100,
                    vidwt: status.videoTimeStamp,
                    viddur: status.duration
                }
            });
        }
    }

    // track mute/unmute
    if (player.isMuted() != status.muted) {
        status.muted = player.isMuted();

        window.analytics.capturePageAction(null, {
            behavior: status.muted ? 248 : 249,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: status.duration == 0 ? 0 : (status.videoTimeStamp / status.duration) * 100,
                vidwt: status.videoTimeStamp,
                viddur: status.duration
            }
        });
    }

    // track replays
    if (previousState == YT.PlayerState.ENDED
        &&
        status.state == YT.PlayerState.PLAYING) {

        window.analytics.capturePageAction(null, {
            behavior: 252,
            actionType: "CL",
            contentTags: {
                vidnm: status.name,
                vidid: status.id,
                vidpct: 0,
                vidwt: 0,
                viddur: status.duration
            }
        });
    }

    setTimeout(trackPlayerStatus, timeoutDuration, player, status);
}
