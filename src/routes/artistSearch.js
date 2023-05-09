const express = require("express");
const router = express.Router();

const artistSearchController = require("../controllers/artistSearch");
router.get("/artist", artistSearchController.getArtist);

module.exports = router;
