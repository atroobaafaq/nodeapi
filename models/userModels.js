import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
// schema

const userSchema = Schema({

    name: {
        type: String,
        required: [true, "name is required"],
    },

    email: {
        type: String,
        required: [true, "email is required"],
    },

    password: String,
    contact:String,
    gender: {
        type: String
    }
});

userSchema.pre("save",async function(){
    const oldpass = this.password //old password
    this.password = await bcrypt.hash(oldpass, 8);
})

// model

const userModel = model("users", userSchema);

export default userModel;