import express, { json } from "express";
import config from "./config";
import productsRout from "./routes/products.routes"
import userRout from "./routes/user.routes"
import kpiroutes from "./routes/kpi.routes"
import cookieParser from 'cookie-parser';

const app = express()

// Settings
app.set("port", config.port)

// middlewares
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(userRout)
app.use(productsRout)
app.use(kpiroutes)




export default app
