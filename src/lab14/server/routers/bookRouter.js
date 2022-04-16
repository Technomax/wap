const bookController = require("../controllers/bookController");
const express = require("express");

const router = express.Router();

router.get("/", bookController.gets);
router.get("/:bookId", bookController.getById);
router.post("/", bookController.create);
router.put("/:bookId", bookController.update);
router.delete("/:bookId", bookController.remove);

module.exports = router;
