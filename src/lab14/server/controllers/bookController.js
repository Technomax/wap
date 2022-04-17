const express = require("express");
const Book = require("../models/book");

const gets = (req, res, next) => {
  const query=req.query.firstName;
  if(query==null)
  {
  return res.status(200).json(Book.gets());
  }
  else {
    return res.status(200).json(Book.getByAuthorFirstName(query));
  }
};

const getById = (req, res, next) => {
  return res.status(200).json(Book.getById(req.params.bookId));
};

const create = (req, res, next) => {
  const book = new Book(
    req.body.bookId==0?Book.getKey():req.body.bookId,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  );
  book.save();
  return res.status(201).json(book);
};

const update = (req, res, next) => {
  const book = new Book(
    req.params.bookId,
    req.body.title,
    req.body.isbn,
    req.body.publishedDate,
    req.body.author
  );
  book.update();
  return res.status(200).json(book);
};

const remove = (req, res, next) => {
  return res.status(200).json(Book.remove(req.params.bookId));
};

module.exports = { gets, getById, create, update, remove };
