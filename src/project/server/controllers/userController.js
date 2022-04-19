const express = require("express");
const User = require("../models/user");

const gets = (req, res, next) => {
    return res.status(200).json(User.gets());
};

const getAuthenticate = (req, res, next) => {
  return res.status(200).json(User.getAuthenticate(req.body.loginId,req.body.password));
};

const create = (req, res, next) => {
  const user = new User(
    req.body.userId == 0 ? User.getKey() : req.body.userId,
    req.body.firstname,
    req.body.lastname,
    req.body.loginId,
    req.body.password,
    ""
  );
  user.save();
  return res.status(201).json(user);
};

const update = (req, res, next) => {
  const user = new User(
    req.body.userId,
    req.body.firstname,
    req.body.lastname,
    req.body.loginId,
    req.body.password,
    ""
  );
  user.update();
  return res.status(200).json(user);
};

const remove = (req, res, next) => {
  return res.status(200).json(User.remove(req.params.userId));
};

const enqueueSong=(req,res,next)=>{
  return res.status(200).json(User.enqueueSong(req.body.sessionId, req.body.songId));
};

const dequeueSong=(req,res,next)=>{
  return res.status(200).json(User.dequeueSong(req.body.sessionId, req.body.songId));
};

module.exports = { gets, getAuthenticate, enqueueSong,dequeueSong, create, update, remove };
