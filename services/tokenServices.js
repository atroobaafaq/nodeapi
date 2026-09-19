import jwt from 'jsonwebtoken';


export const accessToken = async(payload) => {
    return await jwt.sign({id:payload._id,email:payload.email}, process.env.ACCESS_SECRET,{expiresIn: '15m'})
} 

  

export const refreshToken = async(payload) => {
  return await jwt.sign({id:payload._id,email:payload.email}, process.env.REFRESH_SECRET,{expiresIn: '15d'})
} 
