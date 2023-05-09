const express = require("express");
const router = express.Router();

/* route for getting LastFm API search.artist */ 
const artistSearchController = require("../controllers/artistSearch");
router.get("/artist/:artistName", artistSearchController.getArtistData);

/* route for getting LastFm API search.artist and providing a filename for csv */ 
router.get("/artist/:artistName/:csvFileName?",artistSearchController.writeArtistsTofile)

module.exports = router;
