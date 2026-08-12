const videoA = document.getElementById("videoA");
const videoB = document.getElementById("videoB");

const clips = [
    "clips/pyramids.webm",
    "clips/cosmic.mp4",
	"clips/drive.mp4",
	"clips/city.mp4",
	"clips/clouds.mp4",
	"clips/nightdrive.mp4",
	"clips/morecity.webm",
	"clips/robot.webm",
	"clips/moresun.mp4",
	
	
];

const MIN_DISPLAY_TIME = 25;
const MAX_DISPLAY_TIME = 30;

const FADE_DURATION = 0;

let activeVideo = videoA;
let inactiveVideo = videoB;

let currentClip = null;
let switchTimer = null;


function getRandomClip() {

    let clip;

    do {
        clip =
            clips[Math.floor(Math.random() * clips.length)];

    } while (
        clip === currentClip &&
        clips.length > 1
    );

    return clip;
}


function getRandomDisplayTime() {

    return (
        MIN_DISPLAY_TIME +
        Math.random() *
        (MAX_DISPLAY_TIME - MIN_DISPLAY_TIME)
    );
}


function unloadVideo(video) {

    video.pause();

    video.removeAttribute("src");

    video.load();

    video.style.opacity = "0";
}


function switchClip() {

    const nextClip = getRandomClip();

    currentClip = nextClip;

    console.log("Loading:", nextClip);

    /*
     * Load the next clip into the currently
     * inactive video element.
     */

    inactiveVideo.src = nextClip;

    inactiveVideo.currentTime = 0;

    inactiveVideo.playbackRate = 1.0;

    inactiveVideo.load();


    /*
     * Wait until enough data is available
     * before showing the new video.
     */

    inactiveVideo.addEventListener(
        "canplay",
        handleNextVideoReady,
        { once: true }
    );
}


function handleNextVideoReady() {

    const oldVideo = activeVideo;

    const newVideo = inactiveVideo;


    /*
     * Start the new video underneath
     * the currently visible video.
     */

    newVideo.currentTime = 0;

    newVideo.play().catch(error => {
        console.error(
            "Could not start video:",
            error
        );
    });


    /*
     * Crossfade.
     */

    requestAnimationFrame(() => {

        newVideo.style.opacity = "1";

        oldVideo.style.opacity = "0";

    });


    /*
     * After the fade has finished,
     * completely unload the old video.
     */

    setTimeout(() => {

        unloadVideo(oldVideo);

    }, FADE_DURATION);


    /*
     * Swap the video roles.
     */

    activeVideo = newVideo;

    inactiveVideo = oldVideo;


    /*
     * Schedule the next transition.
     */

    scheduleNextSwitch();
}


function scheduleNextSwitch() {

    const displayTime =
        getRandomDisplayTime();

    console.log(
        `Next switch in ${displayTime.toFixed(1)}s`
    );

    clearTimeout(switchTimer);

    switchTimer = setTimeout(
        switchClip,
        displayTime * 1000
    );
}


function startPlayer() {

    const firstClip = getRandomClip();

    currentClip = firstClip;

    activeVideo.src = firstClip;

    activeVideo.currentTime = 0;

    activeVideo.playbackRate = 1.0;

    activeVideo.load();


    activeVideo.addEventListener(
        "canplay",
        () => {

            activeVideo.play().catch(error => {

                console.error(
                    "Could not start video:",
                    error
                );

            });

            activeVideo.style.opacity = "1";

            scheduleNextSwitch();

        },
        { once: true }
    );
}


startPlayer();