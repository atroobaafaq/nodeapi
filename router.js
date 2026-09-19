import {Router} from "express"
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import authRoutes from "./routes/authRoutes.js"
const router = Router()
router.use("/user" , userRoutes)
router.use("/admin" , adminRoutes)
router.use("/auth" , authRoutes)
router.use("/product" , productRoutes)

export default router