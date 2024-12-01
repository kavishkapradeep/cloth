import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import clothRouter from "./routes/clothRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js"
import connectCloudinary from "./config/cloudinary.js";
//app config
const app = express()
const port=4000;

//middleware

app.use(express.json())
app.use(cors())

//db Connected
connectDB();
connectCloudinary();
//api endpoints
app.use("/api/cloth",clothRouter)
app.use('/images',express.static('upload'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("APi Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
    
})