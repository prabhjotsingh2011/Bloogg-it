import mongoose from 'mongoose'


const connection = async (username,password) => {

    try {
        const URL = `mongodb+srv://${username}:${password}@cluster0.vbsux.mongodb.net/Bloggerdev?retryWrites=true&w=majority`
       
        
        await mongoose.connect(URL_for_development, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log('====================================');
        console.log("connection error while connection to data base ", error);
        console.log('====================================');
    }
}
export default connection
