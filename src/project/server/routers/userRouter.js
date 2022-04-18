const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.get("/", userController.gets);
router.post("/authenticate", userController.getAuthenticate);
router.post("/enqueueSong", userController.enqueueSong);
router.post("/dequeueSong", userController.dequeueSong);
router.post("/", userController.create);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.remove);

module.exports = router;
