const express = require("express");
const Song = require("../models/song");
const User = require("../models/user");

const gets = (req, res, next) => {
  const query=req.query.title;
  if(query==null)
  {
  return res.status(200).json(Song.gets());
  }
  else {
    return res.status(200).json(Song.getByTitle(query));
  }
};

const getById = (req, res, next) => {
  return res.status(200).json(Song.getById(req.params.songId));
};

const getsByUser = (req, res, next) => {
  const user=User.getById(req.params.userId);
  return res.status(200).json(Song.getsByUser(user));
};

const create = (req, res, next) => {
  const song = new Song(
    req.body.songId==0?Song.getKey():req.body.songId,
    req.body.title,
    req.body.url,
    req.body.genre,
    req.body.artist,
    req.body.releaseDate
  );
  song.save();
  return res.status(201).json(song);
};

const update = (req, res, next) => {
  const song = new Song(
    req.body.songId,
    req.body.title,
    req.body.url,
    req.body.genre,
    req.body.artist,
    req.body.releaseDate
  );
  song.update();
  return res.status(200).json(song);
};

const remove = (req, res, next) => {
  return res.status(200).json(Song.remove(req.params.songId));
};

module.exports = { gets, getById, getsByUser, create, update, remove };
