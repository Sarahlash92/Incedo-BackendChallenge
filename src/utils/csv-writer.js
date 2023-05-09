const createCsvWriter = require("csv-writer").createObjectCsvWriter;

exports.writeToFile = async (filePath, records) => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: "name", title: "name" },
      { id: "mbid", title: "mbid" },
      { id: "url", title: "url" },
      { id: "image_small", title: "image_small" },
      { id: "image", title: "image" },
    ],
  });

  await csvWriter.writeRecords(records);
};