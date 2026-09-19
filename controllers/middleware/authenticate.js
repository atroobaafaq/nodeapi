import jwt from "jsonwebtoken"

 const Authenticate = async (req, res,next) => {
    try{
        const authtoken= req.headers.authorization
        const actualtoken=authtoken.split(" ") [1]
        const match= jwt.verify(actualtoken, process.env.ACCESS_SECRET)
        console.log("Middleware called")
        next()
    }catch(error){
        res.status(401).json({msg:"Token Required"})
    }
}


export default Authenticate