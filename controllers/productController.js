import productModel from "../models/productModels.js"

export const index = async(req,res)=>{
    try {
       const productindex = await productModel.find()
       res.status(200).json({data: productindex}) 
    } catch (e) {
        res.status(500).json({message: "error occurred"})
    }

}

export const MensWear = async(req,res)=>{
try{
   const productsmens = new productModel(req.body)
    await productsmens.save()
    res.status(201).json({message: "product created"})
    } catch (e){
        res.status(500).json({message:"db not available"})
    }
    res.end("product MensWear page")
}

export const WomensWear = (req,res)=>{
    res.end("product WomensWear page")
}