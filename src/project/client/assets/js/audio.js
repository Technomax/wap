const audioPlayer = document.querySelector(".audio-player");
var song_track = [
  {
    title: "Back Sound",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3",
  },
  {
    title: "Back Sound",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/FaceBangSonic.mp3",
  },
  {
    title: "Back Sound",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/BloodCity.mp3",
  },
];

let current_song_track = 0;
let audio = new Audio(song_track[current_song_track].url);
let shuffleState = "random";

//create the const of all the audio button
const playBtn = document.getElementById("play-icon");
const stopBtn = document.getElementById("stop-icon");
const shuffleBtn = document.getElementById("shuffle-icon");
const volumeSlider = document.getElementById("volume-slider");
const volumePercentage = document.getElementById("volume-percentage");
const timeline = audioPlayer.querySelector(".timeline");
const forwardBtn = document.getElementById("forward-icon");
const backwardBtn = document.getElementById("backward-icon");
let totalDuration = 0;

audio.addEventListener(
  "loadeddata",
  () => {
    document.getElementById("song-title").innerHTML =
      song_track[current_song_track].title;
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = 0.75;
  },
  false
);

// function getAudioDurationFromArray() {
//   totalDuration=0;
//   song_track.forEach((x) => {
//     let tempAudio = new Audio(x);
//     tempAudio.addEventListener("loadeddata", () => {
//       totalDuration+=tempAudio.duration;
//       audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(totalDuration);
//     });
//   });
// }

//toggle between playing and pausing on button click
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
      audio.play();
    } else {
      playBtn.classList.remove("fa-pause");
      playBtn.classList.add("fa-play");
      audio.pause();
    }
  },
  false
);

//toggle between volume
document.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("fa-volume-up");
    volumeEl.classList.add("fa-volume-off");
  } else {
    volumeEl.classList.add("fa-volume-up");
    volumeEl.classList.remove("fa-volume-off");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

//toggle between the shuffle buttons
shuffleBtn.addEventListener("click", () => {
  if (shuffleState === "random") {
    shuffleBtn.setAttribute("class", "audio-btn fa fa-retweet fa-2x");
    shuffleState = "retweet";
  } else if (shuffleState === "retweet") {
    shuffleBtn.setAttribute("class", "audio-btn fa fa-repeat fa-2x");
    shuffleState = "repeat";
  } else {
    shuffleBtn.setAttribute("class", "audio-btn fa fa-random fa-2x");
    shuffleState = "random";
  }
});

//click volume slider to change volume
volumeSlider.addEventListener(
  "click",
  (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumePercentage.style.width = newVolume * 100 + "%";
  },
  false
);

//click on timeline to skip around
timeline.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  console.log((audio.currentTime / audio.duration) * 100 + "%");
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );

  if ((audio.currentTime / audio.duration) * 100 == 100) {
    playNextSong();
  }
}, 500);

//select next track based on the shuffle condition
//retweet means going via entire list in circular
//repeat means playing song again and again 
function playNextSong() {
  if (shuffleState == "random") {
     current_song_track = Math.round(Math.random() * song_track.length - 1);
     if(current_song_track<0){
      current_song_track=0;
     }
  } else if (shuffleState == "retweet") {
    if (current_song_track == song_track.length - 1) {
      current_song_track = 0;
    } else {
      current_song_track += 1;
    }
  }
  else {
    current_song_track=current_song_track;
  }
  audio.src = song_track[current_song_track].url;
  audio.play();
}

//change track on clicking forward button
forwardBtn.addEventListener("click", () => {
  playNextSong();
});

//change track on clicking backward button
backwardBtn.addEventListener("click", () => {
  if (current_song_track == 0) {
    current_song_track = song_track.length - 1;
  } else {
    current_song_track -= 1;
  }
  audio.src = song_track[current_song_track].url;
  audio.play();
});

//stop the playing
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
});
