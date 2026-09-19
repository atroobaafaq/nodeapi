import {Router} from "express"
import {index, deletepage, createpage, updatepage, showbyid} from "../controllers/userController.js"
import  Authenticate  from "../controllers/middleware/authenticate.js"
const userRoutes = Router()

userRoutes.get ("/" ,Authenticate,index)

userRoutes.get ("/showid/:id" , Authenticate, showbyid)

userRoutes.post ("/create" , Authenticate, createpage)

userRoutes.put ("/update/:id" , Authenticate, updatepage)


userRoutes.delete ("/delete/:id" , Authenticate, deletepage)


export default userRoutes