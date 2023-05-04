import {Router} from "express"
import { verifyToken } from "../controllers/verifyToken";
import { login } from "../controllers/login";

const router = Router()

router.post("/login", login )

export default router