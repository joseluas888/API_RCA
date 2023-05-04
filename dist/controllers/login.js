"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _database = require("../database");
var _cookie = require("cookie");
// Controlador de inicio de sesión
function login(_x, _x2) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("username", username).input("password", password).query(_database.queries.GetCredencialesAuth);
        case 7:
          result = _context.sent;
          if (!(result.recordset.length === 0)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            error: 1,
            message: "No Existe el Usuario."
          }));
        case 10:
          res.json(result.recordset);
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            error: 1,
            message: "An error occurred while processing your request."
          });
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _login.apply(this, arguments);
}