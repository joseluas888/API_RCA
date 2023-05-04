"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = verifyToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
  var accessGranted = false;
  var token = req.headers.auth_key || req.cookies.token || '';
  if (!token) {
    return res.status(401).json({
      error: 1,
      message: "You need to send the authToken(JWT)."
    });
  } else {
    _jsonwebtoken["default"].verify(token, "SECRET", function (err, decoded) {
      if (err) {
        return res.status(401).json({
          error: err
        });
      } else {
        accessGranted = true;
      }
    });
  }
  if (!accessGranted) {
    res.statusMessage = "No authentication.";
    return res.status(401).end();
  }
  next();
}