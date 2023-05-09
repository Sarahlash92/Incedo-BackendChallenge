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
