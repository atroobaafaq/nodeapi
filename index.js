import express from "express"
import router from "./router.js"
import db from "./db/db.js"
import {config} from "dotenv"
config()

const server = express()
server.use(express.json())
server.use(router)

await db()
server.listen(process.env.PORT,()=>{
    console.log("server running" )
})