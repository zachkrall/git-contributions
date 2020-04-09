"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _processBody = require("./processBody");

var _formatJSON = require("./formatJSON");

// GLOBALS
var method = {
  method: 'GET'
}; // HELPER FUNCTIONS

var sendText = function sendText(res) {
  return res.text();
};

var sendJSON = function sendJSON(res) {
  return res.json();
}; // MAIN FUNCTION


function gitContributions() {
  return _gitContributions.apply(this, arguments);
}

function _gitContributions() {
  _gitContributions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _ref,
        github,
        gitlab,
        gh_url,
        gl_url,
        data,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, github = _ref.github, gitlab = _ref.gitlab;
            // FORMAT URL
            gh_url = "https://github.com/".concat(github);
            gl_url = "https://gitlab.com/users/".concat(gitlab, "/calendar.json"); // STATUS OBJECT

            data = {};

            if (!gitlab) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return (0, _nodeFetch["default"])(gl_url, method).then(sendJSON).then(_formatJSON.formatJSON);

          case 7:
            data['gitlab'] = _context.sent;

          case 8:
            if (!github) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return (0, _nodeFetch["default"])(gh_url, method).then(sendText).then(_processBody.processBody);

          case 11:
            data['github'] = _context.sent;

          case 12:
            return _context.abrupt("return", {
              data: data
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _gitContributions.apply(this, arguments);
}

var _default = gitContributions;
exports["default"] = _default;
module.exports = exports.default;