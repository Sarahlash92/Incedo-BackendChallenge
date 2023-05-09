const csvWriter = require("../utils/csv-writer");

// Handles getting artists info list from LAST fm

exports.getArtistData = async (req, res, next) => {
  const { artistName } = req.params;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${process.env.API_KEY}&format=json`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const artistsData = data.results.artistmatches.artist;
    console.log(artistsData);
    return res.json({ artistsData });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


// Handles writing artists info list from LAST fm to CSV file
exports.writeArtistsTofile = async (req, res, next) => {
  const { csvFileName = "defaultArtistsList", artistName } = req.params;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${process.env.API_KEY}&format=json`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const artistsData = data.results.artistmatches.artist;

    let records = [];
    artistsData.map((artist) => {
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
