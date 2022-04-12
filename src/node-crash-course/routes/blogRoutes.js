const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

//blog routes
router.get("/", blogController.blog_index);

//add post action
router.post("/", blogController.blog_create_post);

//create new blog
router.get("/create", blogController.blog_create_get);

//get the record
router.get("/details/:id", blogController.blog_detail);

//delete the record
router.delete("/:id", blogController.blog_delete);

module.exports = router;
