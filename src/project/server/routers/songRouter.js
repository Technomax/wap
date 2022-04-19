const songController = require("../controllers/songController");
const express = require("express");

const router = express.Router();

router.get("/", songController.gets);
router.get("/songByUser/:sessionId", songController.getsByUser);
router.get("/:songId", songController.getById);
router.post("/", songController.create);
router.put("/:songId", songController.update);
router.delete("/:songId", songController.remove);

module.exports = router;
