let sessionUserId = 0;

init();

function init() {
  if (sessionUserId != '0') {
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("search-div").style.display = "flex";
    document.getElementById("main-section").style.display = "block";
    document.getElementById("footerSegment").style.display = "block";
    document.getElementById("repo-section").style.display = "block";
    fetchSongs();
    fetchByLoginId();
  } else {
    document.getElementById("login-panel").style.display = "flex";
    document.getElementById("logout").style.display = "none";
    document.getElementById("search-div").style.display = "none";
    document.getElementById("main-section").style.display = "none";
    document.getElementById("footerSegment").style.display = "none";
    document.getElementById("repo-section").style.display = "none";
  }
}

document.getElementById("login-panel").addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/users/authenticate", {
    method: "POST",
    body: JSON.stringify({
      loginId: document.getElementById("txtUserName").value,
      password: document.getElementById("txtPassword").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.Error == "Failed to authenticate.") {
        alert(res.Error);
      } else {
        alert("login successful");
        sessionUserId=res.sessionNumber;
       init();
      }
    })
    .catch((err) => {
      alert(err);
    });
});

document.getElementById("login").addEventListener("click", (e) => {});
function dateToYMD(date) {
  var strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "-" + m + "-" + y;
}
document
  .getElementById("txtSearch")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("btnSearch").click();
    }
  });

//add action listner for search
document.getElementById("btnSearch").addEventListener("click", (e) => {
  fetch(
    "http://localhost:3000/songs?title=" +
      document.getElementById("txtSearch").value
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.Error);
      if (res.Error == null) {
        alert("Records found for your search.");
      }
      showDataInSongListTable(res);
      refreshSongListEvent();
    });
});
//function to refresh the event binding of song list
function refreshSongListEvent() {
  let btns = document.getElementsByClassName("queue");
  Array.prototype.forEach.call(btns, function addClickListener(btn) {
    btn.addEventListener("click", function (event) {
      enqueue(this.getAttribute("tag"));
    });
  });
}

//function to refresh the event binding of play list
function refreshPlayListEvent() {
  let btns = document.getElementsByClassName("dequeue");
  Array.prototype.forEach.call(btns, function addClickListener(btn) {
    btn.addEventListener("click", function (event) {
      dequeue(this.getAttribute("tag"));
    });
  });
}

//function to refresh the event binding of play list for playing
function refreshPlayListForPlayerEvent() {
  let btns = document.getElementsByClassName("play-from-list");
  Array.prototype.forEach.call(btns, function addClickListener(btn) {
    btn.addEventListener("click", function (event) {
      playFromHere(this.getAttribute("tag"));
    });
  });
}

//function to enqueue the songs
const enqueue = function (songId) {
  fetch("http://localhost:3000/users/enqueueSong", {
    method: "POST",
    body: JSON.stringify({
      sessionId: sessionUserId,
      songId: parseInt(songId),
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      fetchByLoginId();
    });
};

//function to play from here
const playFromHere = function (songId) {
  startPlayingFromHere(songId);
};

//function to dequeue the songs
const dequeue = function (songId) {
  fetch("http://localhost:3000/users/dequeueSong", {
    method: "POST",
    body: JSON.stringify({
      sessionId: sessionUserId,
      songId: parseInt(songId),
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      fetchByLoginId();
    });
};

//function to fetch the songs by session user id
function fetchByLoginId() {
  fetch("http://localhost:3000/songs/songByUser/" + sessionUserId)
    .then((res) => res.json())
    .then((res) => {
      showDataInPlayListTable(res);
      refreshPlayListEvent();
      refreshPlayListForPlayerEvent();
      loadSongsInPlayer(res);
    });
}

//function to fetch the songs
function fetchSongs() {
  fetch("http://localhost:3000/songs/")
    .then((res) => res.json())
    .then((res) => {
      showDataInSongListTable(res);
      refreshSongListEvent();
    });
}

//function to refresh the data in the playlist
const showDataInSongListTable = function (data) {
  let htmlString = "";
  if (data.Error == "Record not found.") {
    alert(data.Error);
  } else {
    data.forEach((x) => {
      htmlString += " <tr>";
      htmlString += `<td>${x.songId}</td>`;
      htmlString += `<td>${x.title}</td>`;
      htmlString += `<td>${x.genre}</td>`;
      htmlString += `<td>${x.artist.firstname} ${x.artist.lastname}</td>`;
      htmlString += `<td>${dateToYMD(new Date(x.releaseDate))}</td>`;
      if (sessionUserId == 0) {
        htmlString += ` <td style="text-align:center;"><span style="display:none;"><i tag="${x.songId}" class="fa fa-plus queue"></i></span></td>`;
      } else {
        htmlString += ` <td style="text-align:center;"><span><i tag="${x.songId}" class="fa fa-plus queue"></i></span></td>`;
      }
      htmlString += "</tr>";
    });
  }
  document.getElementById("songListTable").innerHTML = htmlString;
};

//function to refresh the data in the playlist
const showDataInPlayListTable = function (data) {
  let htmlString = "";
  data.forEach((x) => {
    htmlString += " <tr>";
    htmlString += `<td>${x.songId}</td>`;
    htmlString += `<td>${x.title}</td>`;
    htmlString += `<td>${x.genre}</td>`;
    htmlString += `<td>${x.artist.firstname} ${x.artist.lastname}</td>`;
    htmlString += `<td>${dateToYMD(new Date(x.releaseDate))}</td>`;
    htmlString += `<td style="text-align:center;"><span><i tag=${x.songId} class="fa fa-minus dequeue"></i></span> | <span><i tag=${x.songId} class="fa fa-play play-from-list"></i></span></td>`;
    htmlString += "</tr>";
  });
  document.getElementById("playlistTable").innerHTML = htmlString;
};
