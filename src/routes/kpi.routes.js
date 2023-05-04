import {Router} from "express"
import { verifyToken } from "../controllers/verifyToken";
import { getBestSellers, getBestSelling, getNewPartners, getSolicitudesMes, getStatisticsCards, getTotalCoolersOnLocation, getTotalPartners } from "../controllers/kpi.controller";

const router = Router()

// No están implementados
router.get("/kpi/bestseller", getBestSellers)
router.get("/kpi/bestselling", getBestSelling)
router.get("/kpi/newpartners", getNewPartners)
router.get("/kpi/totalpartners", getTotalPartners)
router.get("/kpi/totalcoolersonlocation", getTotalCoolersOnLocation)
router.get("/kpi/solicitudesmes", getSolicitudesMes) // Solicitud Por mes***
router.get("/kpi/statisticscards", verifyToken, getStatisticsCards) // Services es estatico y lo demas me lo mandan



export default router