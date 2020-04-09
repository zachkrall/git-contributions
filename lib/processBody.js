"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processBody = processBody;

var _cheerio = _interopRequireDefault(require("cheerio"));

var _formatJSON = _interopRequireDefault(require("./formatJSON"));

function processBody(body) {
  var $ = _cheerio["default"].load(body);

  var data = {};

  var format = function format(i, elm) {
    var date = $(elm).data('date');
    var count = $(elm).data('count');

    if (count > 0) {
      return data[date] = count;
    }
  };

  var json = $('rect').each(format);
  return (0, _formatJSON["default"])(data);
}