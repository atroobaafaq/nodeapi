import {Router} from "express";
import { login, logout, refresh, signup } from "../controllers/authController.js";

const authRoutes = Router()



authRoutes.post("/login" ,login)
authRoutes.post("/signup" , signup)
authRoutes.post("/logout", logout)
authRoutes.post("/refresh", refresh)


export default authRoutes