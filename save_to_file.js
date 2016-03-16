'use strict';

var fs = require('fs');

function saveToFile(path, object, cb, fileManager) {
  fileManager = fileManager || fs;
  var content = JSON.stringify(object);
  setTimeout(() => fileManager.writeFile(path, content, cb), 2000)
}

module.exports = saveToFile;
