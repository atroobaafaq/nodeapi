import { Schema , model } from "mongoose";

// Schema

const productSchema = Schema({
    productName:{
        type:String,
       required:[true,"product name is required"]
    } ,

    productPrice:{
        type:String,
       required:[true,"product price is required"]
    } ,

     productDescription:{
        type:String,
       required:[true,"product description is required"]
    } 
});

//Models
const productModel = model("products",productSchema);
export default productModel;