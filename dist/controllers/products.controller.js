"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusSolicitudById = exports.updateCoolerById = exports.getTotalOrders = exports.getTotalNumCoolers = exports.getProducts = exports.getOrdersCancel = exports.getOrdersAcepted = exports.getCoolerById = exports.deleteCoolerById = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var requiredFields = ["ModeloCooler", "Marca", "Identificador", "NumPuertas", "SizeCliente", "TypeDoor", "PotencialVentaMensual", "CapacidadBottle", "LlenadoPuerta", "IngresoMensualCliente", "GananciaMensualCliente", "ConsumoEnergeticoMensual", "ConsumoEnergeticoDinero"];
var variables = {
  IdCooler: _database.sql.Float,
  ModeloCooler: _database.sql.VarChar,
  Marca: _database.sql.VarChar,
  Identificador: _database.sql.VarChar,
  NumPuertas: _database.sql.Float,
  SizeCliente: _database.sql.VarChar,
  TypeDoor: _database.sql.VarChar,
  PotencialVentaMensual: _database.sql.VarChar,
  CapacidadBottle: _database.sql.Float,
  LlenadoPuerta: _database.sql.Float,
  ConsumoEnergeticoMensual: _database.sql.VarChar,
  ConsumoEnergeticoDinero: _database.sql.Float
};
var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context.sent;
          _context.next = 5;
          return pool.request().query(_database.queries.GetAllCoolers);
        case 5:
          result = _context.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getProducts = getProducts;
var createProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var fieldsProducts, pool, request, _i, _Object$entries, _Object$entries$_i, name, type, response, _name;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          fieldsProducts = req.body;
          if (!requiredFields.every(function (field) {
            return fieldsProducts[field] != null;
          })) {
            _context2.next = 15;
            break;
          }
          _context2.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context2.sent;
          request = pool.request();
          for (_i = 0, _Object$entries = Object.entries(variables); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), name = _Object$entries$_i[0], type = _Object$entries$_i[1];
            request.input(name, type, fieldsProducts[name]);
          }
          _context2.next = 10;
          return request.query(_database.queries.CreateNewCooler);
        case 10:
          response = {};
          for (_name in variables) {
            response[_name] = fieldsProducts[_name];
          }
          res.json(response);
          _context2.next = 16;
          break;
        case 15:
          res.status(400).json({
            msg: "Bad Request. Please fill all the fields."
          });
        case 16:
          _context2.next = 22;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).send("An error occurred on the server.");
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var getCoolerById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("id", id).query(_database.queries.GetCoolerbyId);
        case 6:
          result = _context3.sent;
          res.send(result.recordset[0]);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getCoolerById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getCoolerById = getCoolerById;
var deleteCoolerById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().input("id", id).query(_database.queries.DeleteCoolerbyId);
        case 6:
          result = _context4.sent;
          res.status(204);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteCoolerById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteCoolerById = deleteCoolerById;
var getTotalNumCoolers = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.GetTotalNumCoolers);
        case 5:
          result = _context5.sent;
          res.json(result.recordset[0][""]);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getTotalNumCoolers(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getTotalNumCoolers = getTotalNumCoolers;
var updateCoolerById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, fieldsProducts, pool, request, _i2, _Object$entries2, _Object$entries2$_i, name, type, response, _name2;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          fieldsProducts = req.body;
          if (!requiredFields.every(function (field) {
            return fieldsProducts[field] != null;
          })) {
            _context6.next = 17;
            break;
          }
          _context6.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context6.sent;
          request = pool.request();
          request.input("id", id);
          for (_i2 = 0, _Object$entries2 = Object.entries(variables); _i2 < _Object$entries2.length; _i2++) {
            _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2), name = _Object$entries2$_i[0], type = _Object$entries2$_i[1];
            request.input(name, type, fieldsProducts[name]);
          }
          _context6.next = 12;
          return request.query(_database.queries.UpdateCoolerbyId);
        case 12:
          response = {};
          for (_name2 in variables) {
            response[_name2] = fieldsProducts[_name2];
          }
          res.json(response);
          _context6.next = 18;
          break;
        case 17:
          res.status(400).json({
            msg: "Bad Request. Please fill all the fields."
          });
        case 18:
          _context6.next = 25;
          break;
        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.status(500).send("An error occurred on the server.");
          res.send(_context6.t0.message);
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 20]]);
  }));
  return function updateCoolerById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateCoolerById = updateCoolerById;
var getTotalOrders = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.GetTotalOrders);
        case 5:
          result = _context7.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getTotalOrders(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getTotalOrders = getTotalOrders;
var getOrdersCancel = /*#__PURE__*/function () {
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
          return pool.request().query(_database.queries.GetOrdersCancel);
        case 5:
          result = _context8.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getOrdersCancel(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getOrdersCancel = getOrdersCancel;
var getOrdersAcepted = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _database.getConnection)();
        case 2:
          pool = _context9.sent;
          _context9.next = 5;
          return pool.request().query(_database.queries.GetOrdersAcepted);
        case 5:
          result = _context9.sent;
          res.json(result.recordset);
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getOrdersAcepted(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// No desarrollados!
exports.getOrdersAcepted = getOrdersAcepted;
var updateStatusSolicitudById = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _req$params, id, status, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params = req.params, id = _req$params.id, status = _req$params.status;
          _context10.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context10.sent;
          _context10.next = 7;
          return pool.request().input("id", id).input("status", status).query(_database.queries.UpdateStatusSolicitudById);
        case 7:
          result = _context10.sent;
          res.json(result);
          _context10.next = 16;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          res.status(500).send("An error occurred on the server.");
          res.send(_context10.t0.message);
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return function updateStatusSolicitudById(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
// yo te doy status al quiero llegar y el id de la solicitud a la que cambiar -> me cambia el status de la soli que quiero y me regresa "YA QUEDO"
exports.updateStatusSolicitudById = updateStatusSolicitudById;