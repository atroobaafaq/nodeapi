import {Router} from "express"
import { create, index, update } from "../controllers/adminController.js"
const adminRoutes = Router()

adminRoutes.get("/" , index)

adminRoutes.get("/createuser" , create)

adminRoutes.get("/updateuser" , update)

export default adminRoutes 