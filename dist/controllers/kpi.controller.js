"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotalPartners = exports.getTotalCoolersOnLocation = exports.getStatisticsCards = exports.getSolicitudesMes = exports.getNewPartners = exports.getCoolerById = exports.getBestSelling = exports.getBestSellers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getCoolerById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().input("id", id).query(_database.queries.xxxxx);
        case 6:
          result = _context.sent;
          res.send(result.recordset[0]);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getCoolerById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getCoolerById = getCoolerById;
var getBestSellers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context2.sent;
          _context2.next = 5;
          return pool.request().query(_database.queries.GetBestSeller);
        case 5:
          result = _context2.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getBestSellers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBestSellers = getBestSellers;
var getBestSelling = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context3.sent;
          _context3.next = 5;
          return pool.request().query(_database.queries.GetBestSelling);
        case 5:
          result = _context3.sent;
          res.json(result.recordset[0]);
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getBestSelling(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getBestSelling = getBestSelling;
var getSolicitudesMes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context4.sent;
          _context4.next = 5;
          return pool.request().query(_database.queries.GetMonthlySolicitud);
        case 5:
          result = _context4.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getSolicitudesMes(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getSolicitudesMes = getSolicitudesMes;
var getStatisticsCards = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context5.sent;
          _context5.next = 5;
          return pool.request().query(_database.queries.xxxx);
        case 5:
          result = _context5.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getStatisticsCards(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getStatisticsCards = getStatisticsCards;
var getNewPartners = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context6.sent;
          _context6.next = 5;
          return pool.request().query(_database.queries.GetNewPartners);
        case 5:
          result = _context6.sent;
          res.json(result.recordset[0]);
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getNewPartners(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getNewPartners = getNewPartners;
var getTotalPartners = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context7.sent;
          _context7.next = 5;
          return pool.request().query(_database.queries.GetTotalPartners);
        case 5:
          result = _context7.sent;
          res.json(result.recordset[0]);
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getTotalPartners(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getTotalPartners = getTotalPartners;
var getTotalCoolersOnLocation = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context8.sent;
          _context8.next = 5;
          return pool.request().query(_database.queries.GetTotalOnLocation);
        case 5:
          result = _context8.sent;
          res.json(result.recordset[0]);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getTotalCoolersOnLocation(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getTotalCoolersOnLocation = getTotalCoolersOnLocation;