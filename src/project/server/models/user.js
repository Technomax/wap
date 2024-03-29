let users = [
  {
    userId: 1,
    firstname: "Anil",
    lastname: "Maharjan",
    loginId: "Anil",
    password: "1234",
    sessionId:"",
    songs: [{ songId: 4 }, { songId: 2 }, { songId: 3 }],
  },
  {
    userId: 2,
    firstname: "Ashish",
    lastname: "Ghimire",
    loginId: "Ashish",
    password: "1234",
    sessionId:"",
    songs: [{ songId: 1 }, { songId: 2 }, { songId: 3 }, { songId: 4 }],
  },
  {
    userId: 3,
    firstname: "Sachin",
    lastname: "Tandon",
    loginId: "Sachin",
    password: "1234",
    sessionId:"",
    songs: [{ songId: 4 }, { songId: 5 }],
  },
  {
    userId: 4,
    firstname: "Sayal",
    lastname: "Adhikari",
    loginId: "Sayal",
    password: "1234",
    sessionId:"",
    songs: [{ songId: 7 }],
  },
  {
    userId: 5,
    firstname: "Siddhant",
    lastname: "Pangeni",
    loginId: "Siddhant",
    password: "1234",
    sessionId:"",
    songs: [{ songId: 1 }, { songId: 8 }, { songId: 3 }],
  },
];

let counter = 5;

class User {
  constructor(firstname, lastname, loginId, password,sessionId) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.loginId = loginId;
    this.password = password;
    this.sessionId=sessionId;
  }

  save() {
    const index = users.findIndex((user) => user.userId == this.userId);
    if (index >= 0) {
      users.splice(index, 1, this);
    } else {
      counter++;
      this.userId = counter;
      users.push(this);
    }
  }

  update() {
    const index = users.findIndex((user) => user.userId == this.userId);
    if (index >= 0) {
      users.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getKey() {
    return counter;
  }

  static gets() {
    return users;
  }

  static getById(userId) {
    return users.find(x=>x.userId==userId);
  }

  static getBySessionId(sessionId) {
    return users.find(x=>x.sessionId==sessionId);
  }

  static remove(id) {
    const index = users.findIndex((user) => user.userId == id);
    if (index >= 0) {
      users = users.filter((user) => user.userId != id);
      return users;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getAuthenticate(loginId, password) {
    const index = users.findIndex(
      (user) =>
        user.loginId.toUpperCase() == loginId.toUpperCase() &&
        user.password.toUpperCase() == password.toUpperCase()
    );

    if (index >= 0) {
      const user= users.find(
        user =>
          user.loginId.toUpperCase() == loginId.toUpperCase() &&
          user.password.toUpperCase() == password.toUpperCase()
      );
      const sessionId=user.loginId+"-"+Math.floor(Date.now() + Math.random());
      const index=users.findIndex(x=>x.userId==user.userId);
      user.sessionId=sessionId;
      users.splice(index,1,user);
      return {sessionNumber: sessionId };
    } else {
      throw new Error("Failed to authenticate.");
    }
  }

  static enqueueSong(sessionId, songId) {
    const user = users.find((user) => user.sessionId == sessionId);
    if (user == null || user == undefined) {
      throw new Error("User not found.");
    } else {
      const song = user.songs.find((x) => x.songId == songId);
      if (song == null || song == undefined) {
        user.songs.push({ songId: songId });
      }
      return user;
    }
  }

  static dequeueSong(sessionId, songId) {
    const user = users.find((user) => user.sessionId == sessionId);
    if (user == null || user == undefined) {
      throw new Error("User not found.");
    } else {
      user.songs = user.songs.filter((x) => x.songId != songId);
      return user;
    }
  }
}
module.exports = User;
