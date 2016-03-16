'use strict';

var saveToFile = require('./save_to_file');

saveToFile('output.txt', {alma: 2, korte: 5}, onDone);

function onDone(err) {
  console.log(err || 'Saved');
}
