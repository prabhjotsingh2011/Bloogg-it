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





const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password)


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})