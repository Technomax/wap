let songs = [
  {
    songId: 1,
    title: "Back Sound",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3",
    genre: "Romantic",
    artist: {
      artistId: "A",
      firstname: "Alan",
      lastname: "Jackson",
    },
    releaseDate: new Date(2000, 1, 1),
  },
  {
    songId: 2,
    title: "Face Bang Sonic",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/FaceBangSonic.mp3",
    genre: "Node.js",
    artist: {
      artistId: "B",
      firstname: "Jazz",
      lastname: "White",
    },
    releaseDate: new Date(2000, 1, 2),
  },
  {
    songId: 3,
    title: "Blood City",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/BloodCity.mp3",
    genre: "Classical",
    artist: {
      artistId: "C",
      firstname: "Caravan",
      lastname: "",
    },
    releaseDate: new Date(2000, 1, 3),
  },
  {
    songId: 4,
    title: "How Lovely",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/HowLovely.mp3",
    genre: "Country",
    artist: {
      artistId: "D",
      firstname: "The",
      lastname: "Damned",
    },
    releaseDate: new Date(2000, 1, 4),
  },
  {
    songId: 5,
    title: "Unbeaten",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/Unbeaten.mp3",
    genre: "Dance",
    artist: {
      artistId: "E",
      firstname: "Eddie",
      lastname: "Cochran",
    },
    releaseDate: new Date(2000, 1, 5),
  },
  {
    songId: 6,
    title: "Remember The Old Days",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/remember%20the%20old%20days.mp3",
    genre: "Hiphop",
    artist: {
      artistId: "D2",
      firstname: "David",
      lastname: "Bowie",
    },
    releaseDate: new Date(2000, 1, 6),
  },
  {
    songId: 7,
    title: "Youth Revolver",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/YouthRevolver.mp3",
    genre: "Sad",
    artist: {
      artistId: "F",
      firstname: "Fats",
      lastname: "Domino",
    },
    releaseDate: new Date(2000, 1, 7),
  },
  {
    songId: 8,
    title: "Wonderful Lights",
    url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/WonderfulLights.mp3",
    genre: "Peaceful",
    artist: {
      artistId: "G",
      firstname: "Gene",
      lastname: "Krupa",
    },
    releaseDate: new Date(2000, 1, 8),
  },
];

let counter = 8;

class Song {
  constructor(songId, songTitle, genre, artist, releaseDate) {
    this.songId = songId;
    this.songTitle = songTitle;
    this.genre = genre;
    this.artist = artist;
    this.releaseDate = releaseDate;
  }

  save() {
    const index = songs.findIndex((song) => song.songId == this.songId);
    if (index >= 0) {
      songs.splice(index, 1, this);
    } else {
      counter++;
      this.songId = counter;
      songs.push(this);
    }
  }

  update() {
    const index = songs.findIndex((song) => song.songId == this.songId);
    if (index >= 0) {
      songs.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getKey() {
    return counter;
  }

  static gets() {
    return songs;
  }

  static getsByUser(User){
    return songs.filter(x=>User.songs.map(y=>y.songId).includes(x.songId));
  }

  static remove(id) {
    const index = songs.findIndex((song) => song.songId == id);
    if (index >= 0) {
      songs = songs.filter((song) => song.songId != id);
      return songs;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getById(id) {
    const index = songs.findIndex((song) => song.songId == id);
    if (index >= 0) {
      return songs.find((song) => song.songId == id);
    } else {
      throw new Error("Record not found.");
    }
  }

  static getByTitle(title) {
    const index = songs.findIndex((song) =>
    song.title.toUpperCase().includes(title.toUpperCase())
    );
    if (index >= 0) {
      return songs.filter((song) =>
        song.title.toUpperCase().includes(title.toUpperCase())
      );
    } else {
      throw new Error("Record not found.");
    }
  }
}

module.exports = Song;
