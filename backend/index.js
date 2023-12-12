import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser';
import feedbackRoute from './routes/feedback.js'
import recipesRoute from './routes/recipes.js'


dotenv.config()

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:4200',
    credentials: true
}))


app.use("/api/role",roleRoute)
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/feedback',feedbackRoute)
app.use('/recpie',recipesRoute)


//Response handler Middleware

app.use((obj,req,res,next)=>{
    const statusCode=obj.status|| 500
    const Message=obj.message||'something went wrong'
    return res.status(statusCode).json({
      success:[200,201,204].some(a=> a===obj.status)?true:false,
      status:statusCode,
      message: Message,
      data: obj.data
    })
})

//DB connection
const connectMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to DataBase")
    } catch (error) {
        throw error;
        
    }
}

app.listen(4000,()=>{
    connectMongoDB()
    console.log('connected to backend')
})