import {Router} from "express"
import {createProduct, getProducts, getCoolerById, deleteCoolerById, getTotalNumCoolers, updateCoolerById} from "../controllers/products.controller"

const router = Router()

router.get("/products", getProducts)

router.post("/products", createProduct )

router.get("/products/count", getTotalNumCoolers )

router.get("/products/:id", getCoolerById)

router.delete("/products/:id", deleteCoolerById)

router.put("/products/:id", updateCoolerById)




export default router