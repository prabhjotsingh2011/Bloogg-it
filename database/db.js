import mongoose from 'mongoose'


const connection = async (URL) => {

    try {
        
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log('====================================');
        console.log("connection error while connection to data base ", error);
        console.log('====================================');
    }
}
export default connection