const audioPlayer = document.querySelector(".audio-player");
var song_track = [
  // {
  //   songId: 1,
  //   title: "Back Sound",
  //   url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3",
  // },
  // {
  //   songId: 2,
  //   title: "Face Bang Sonic",
  //   url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/FaceBangSonic.mp3",
  // },
  // {
  //   songId: 3,
  //   title: "Blood City",
  //   url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/BloodCity.mp3",
  // },
];

let current_song_track = 0;
let audio = new Audio();
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

function loadSongsInPlayer(data) {
  song_track = [];
  data.forEach((x) =>
    song_track.push({
      songId: x.songId,
      title: x.title,
      url: x.url,
    })
  );
}

const startPlayingFromHere = function (songId) {
  current_song_track = song_track.findIndex((x) => x.songId == songId);
  audio.src = song_track[current_song_track].url;
  document.getElementById("song-title").innerHTML =
    song_track[current_song_track].title;
  audio.play();
  audio.currentTime = 0;
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
};

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

//toggle between playing and pausing on button click
playBtn.addEventListener("click", () => {
  if (song_track.length == 0) {
    return;
  }
  if(current_song_track<0 && song_track.length > 0){
    current_song_track=0;
    audio.src = song_track[current_song_track].url;
    document.getElementById("song-title").innerHTML =
      song_track[current_song_track].title;
  }
  else if (song_track.length > 0 && audio.src == "") {
    audio.src = song_track[current_song_track].url;
    document.getElementById("song-title").innerHTML =
      song_track[current_song_track].title;
  }
  if (audio.paused) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    audio.play();
  } else {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    audio.pause();
  }
});

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
    try {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    } catch (Error) {
      return false;
    }
  }
);

setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
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
    if (current_song_track < 0) {
      current_song_track = 0;
    }
  } else if (shuffleState == "retweet") {
    if (current_song_track == song_track.length - 1) {
      current_song_track = 0;
    } else {
      current_song_track += 1;
    }
  } else {
    current_song_track = current_song_track;
  }
  audio.src = song_track[current_song_track].url;
  document.getElementById("song-title").innerHTML =
    song_track[current_song_track].title;
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
  stopPlayback();
});

//stop audio playback
function stopPlayback() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
}

function removeFromCurrentPlayer(songId) {
  fetch("http://localhost:3000/songs/" + songId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.url == audio.src) {
        stopPlayback();
        audio.currentTime = 0;
        document.getElementById("song-title").innerHTML = "-";
        audioPlayer.querySelector(".progress").style.width=0;
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
          0
        );
        current_song_track=-1;
        audio.src = "";
      }
      song_track = song_track.filter((x) => x.songId != songId);
      console.log(song_track);
    });
}
