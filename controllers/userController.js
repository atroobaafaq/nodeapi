
import userModel from "../models/userModels.js"

export const index = async(req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json({data: users})
    } catch (e){
        res.status(500).json({message: "error occurred"})
    }
}

export const showbyid = async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json({data: user})
    } catch (e){
        res.status(500).json({message: "error occurred"})
    }
}

export const createpage = async(req,res)=>{
    // console.log(req.body)
    try{
   const user = new userModel(req.body)
    await user.save()
    res.status(201).json({message: "user created"})
    } catch (e){
        res.status(500).json({message:"db not available",reason:e})
    }
}

export const updatepage = async(req,res)=>{
try {
    const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message: "updated successfully",data:user})

} catch (error) {
        res.status(500).json({message: "update error"})
}
}

export const deletepage = async(req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "deleted successfully"})
    } catch (error) {
        
    }
} 