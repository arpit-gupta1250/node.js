const { readFile } = require("fs");

function readDataset() {
  readFile('text.tx', { encoding: "utf8" }, function(error, data) {
    if (error) return errorHandler(error)
    console.log(data)
  });
}

function errorHandler(error) {
    console.log(error.message);
}

readDataset()