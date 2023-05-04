"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var _verifyToken = require("../controllers/verifyToken");
var router = (0, _express.Router)();
router.get("/products", _verifyToken.verifyToken, _products.getProducts);
router.post("/products", _verifyToken.verifyToken, _products.createProduct);
router.get("/products/count", _verifyToken.verifyToken, _products.getTotalNumCoolers);
router.get("/products/:id", _verifyToken.verifyToken, _products.getCoolerById);
router["delete"]("/products/:id", _verifyToken.verifyToken, _products.deleteCoolerById);
router.put("/products/:id", _verifyToken.verifyToken, _products.updateCoolerById);
router.get("/productos/totalordenes", _products.getTotalOrders); // verifyToken

router.get("/productos/ordenescancel", _products.getOrdersCancel); // verifyToken

router.get("/productos/ordenesaceptadas", _products.getOrdersAcepted);

// No están implementados
// router.get("/productos/:id/productos", verifyToken, getOrdersById) // !!
var _default = router;
exports["default"] = _default;