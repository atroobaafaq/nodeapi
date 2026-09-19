import jwt from "jsonwebtoken"
const  Authenticate = (req,res,next) =>{
    try {
        const authtoken = req.headers.authorization
        const actualtoken = authtoken.split(" ")[1]
        const match = jwt.verify(actualtoken, process.env.ACCESS_SECRET)
        console.log("middleware called")
        next()
    } catch (error) {
       res.status(400).json({msg:"token required"})}
}
 export default Authenticate