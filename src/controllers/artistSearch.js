const fs = require("fs");
const csvWriter = require("../utils/csv-writer");
const artistDict = require("../data/artistsDictionary");

// Handles fetching Artists Data

const collectArtistData = async (artistName) => {
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${process.env.API_KEY}&format=json`;

  const res = await fetch(URL);
  const data = await res.json();
  let artistData = data.results.artistmatches.artist;

  // if no artist found, get random artists from dictionary
  if (artistData.length < 1) {
    while (artistData.length < 4) {
      const randomIndex = Math.floor(
        Math.random() * artistDict.randomArtists.length
      );
      const randomArtist = artistDict.randomArtists[randomIndex];
      artistData.push(randomArtist);
    }
  }
  return artistData;
};

// Handles getting artists info list from LAST fm

exports.getArtistData = async (req, res, next) => {
  const { artistName } = req.params;

  try {
    const artistsData = await collectArtistData(artistName);
    console.log(artistsData);
    return res.json({ artistsData });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Handles writing artists info list from LAST fm to CSV file
exports.writeArtistsTofile = async (req, res, next) => {
  const { csvFileName, artistName } = req.params || "defaultArtistsList";

  try {
    const artistsData = await collectArtistData(artistName);

    let records = [];
    artistsData.forEach((artist) => {
      const image_small = artist.image.find(
        (imageItem) => imageItem.size === "small"
      )?.["#text"];
      const image = artist.image.find(
        (imageItem) => imageItem.size === "large"
      )?.["#text"];

      records.push({
        name: artist.name,
        mbid: artist.mbid,
        url: artist.url,
        image_small,
        image,
      });
    });

    await csvWriter.writeToFile(`src/data/${csvFileName}.csv`, records);
    console.log("Successfully written CSV file");
    res.status(200).send("CSV File successfully created");
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
