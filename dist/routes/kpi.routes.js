"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = require("../controllers/verifyToken");
var _kpi = require("../controllers/kpi.controller");
var router = (0, _express.Router)();

// No están implementados
router.get("/kpi/bestseller", _kpi.getBestSellers);
router.get("/kpi/bestselling", _kpi.getBestSelling);
router.get("/kpi/newpartners", _kpi.getNewPartners);
router.get("/kpi/totalpartners", _kpi.getTotalPartners);
router.get("/kpi/totalcoolersonlocation", _kpi.getTotalCoolersOnLocation);
router.get("/kpi/solicitudesmes", _kpi.getSolicitudesMes); // Solicitud Por mes***
router.get("/kpi/statisticscards", _verifyToken.verifyToken, _kpi.getStatisticsCards); // Services es estatico y lo demas me lo mandan
var _default = router;
exports["default"] = _default;