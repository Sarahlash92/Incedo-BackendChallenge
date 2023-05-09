const express = require("express");
const router = express.Router();

const artistSearchController = require("../controllers/artistSearch");
router.get("/artist/:artistName", artistSearchController.getArtistData);

module.exports = router;
