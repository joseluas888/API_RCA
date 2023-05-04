import {Router} from "express"
import {createProduct, getProducts, getCoolerById, deleteCoolerById, getTotalNumCoolers, updateCoolerById, getTotalOrders, getOrdersCancel, getOrdersAcepted, updateStatusSolicitudById} from "../controllers/products.controller"
import { verifyToken } from "../controllers/verifyToken";


const router = Router()

router.get("/products", verifyToken, getProducts)

router.post("/products", verifyToken, createProduct )

router.get("/products/count", verifyToken, getTotalNumCoolers )

router.get("/products/:id", verifyToken, getCoolerById)

router.delete("/products/:id", verifyToken, deleteCoolerById)

router.put("/products/:id", verifyToken, updateCoolerById)

router.get("/productos/totalordenes", getTotalOrders) // verifyToken

router.get("/productos/ordenescancel", getOrdersCancel) // verifyToken

router.get("/productos/ordenesaceptadas", getOrdersAcepted)

router.put("/productos/UpdateSolicitudById/:id/:status", updateStatusSolicitudById)

// No están implementados
// router.get("/productos/:id/productos", verifyToken, getOrdersById) // !!

export default router