const sessionUserId=1;
fetchSongs();
fetchByLoginId();

function dateToYMD(date) {
  var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
}

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

//function to enqueue the songs
const enqueue = function (songId) {
  fetch("http://localhost:3000/users/enqueueSong", {
    method: "POST",
    body: JSON.stringify({
      userId: sessionUserId,
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

//function to dequeue the songs
const dequeue = function (songId) {
  console.log(sessionUserId);
  console.log(songId);
  fetch("http://localhost:3000/users/dequeueSong", {
    method: "POST",
    body: JSON.stringify({
      userId: sessionUserId,
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
 function fetchByLoginId(){
  fetch("http://localhost:3000/songs/songByUser/"+sessionUserId)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    showDataInPlayListTable(res);
    refreshPlayListEvent();
  });
}

//function to fetch the songs
function fetchSongs(){
  fetch("http://localhost:3000/songs/")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    showDataInSongListTable(res);
    refreshSongListEvent();
  });
}


//function to refresh the data in the playlist
const showDataInSongListTable = function (data) {
  let htmlString = "";
  data.forEach((x) => {
    htmlString += " <tr>";
    htmlString += `<td>${x.songId}</td>`;
    htmlString += `<td>${x.title}</td>`;
    htmlString += `<td>${x.genre}</td>`;
    htmlString += `<td>${x.artist.firstname} ${x.artist.lastname}</td>`;
    htmlString += `<td>${dateToYMD(new Date(x.releaseDate))}</td>`;
    htmlString += ` <td style="text-align:center;"><span><i tag="${x.songId}" class="fa fa-plus queue"></i></span></td>`;
    htmlString += "</tr>";
  });
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
    htmlString += `<td style="text-align:center;"><span><i tag=${x.songId} class="fa fa-minus dequeue"></i></span> | <span><i class="fa fa-play"></i></span></td>`;
    htmlString += "</tr>";
  });
  document.getElementById("playlistTable").innerHTML = htmlString;
};
