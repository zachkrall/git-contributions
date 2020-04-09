"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatJSON = void 0;

var formatJSON = function formatJSON(json) {
  // MIN & MAX COUNTS
  var max = 0,
      min = 999;
  var list = [];

  for (var key in json) {
    // SET VARIABLE NAMES
    var date = key;
    var count = json[key]; // UPDATE MIN & MAX

    if (count > max) max = count;
    if (count < min) min = count; // PUSH TO LIST

    list.push({
      date: date,
      count: count
    });
  }

  return {
    min_value: min,
    max_value: max,
    entries: list
  };
};

exports.formatJSON = formatJSON;