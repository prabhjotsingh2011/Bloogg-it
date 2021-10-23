import express from 'express';
import router from './routes/route.js'
import cors from 'cors'
import bodyParser from'body-parser'
import DotEnv from 'dotenv'


//componnets
import connection from './database/db.js'

const PORT = process.env.PORT || 8000

const app = express()
DotEnv.config()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}



app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

const URL = 'mongodb+srv://prabhjot:prabhjot@cluster0.vbsux.mongodb.net/Bloggerdev?retryWrites=true&w=majority'

connection(process.env.MONGODB_URI || URL)