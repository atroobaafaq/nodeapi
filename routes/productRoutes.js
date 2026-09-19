import { Router } from "express";
import { index, MensWear, WomensWear } from "../controllers/productController.js";

const productRoutes = Router()

productRoutes.get("/" , index)
productRoutes.post("/menswear" , MensWear)
productRoutes.delete("/womenswear" , WomensWear)

export default productRoutes