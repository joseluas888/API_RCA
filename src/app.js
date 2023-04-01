import express, { json } from "express";
import config from "./config";
import productsRout from "./routes/products.routes"

const app = express()

// Settings
app.set("port", config.port)

// middlewars
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(productsRout)

export default app