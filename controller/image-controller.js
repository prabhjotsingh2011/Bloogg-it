import Mongoose from 'mongoose'
import grid from 'gridfs-stream'

const url = 'http://localhost:8000'

let gfs;
const conn = Mongoose.connection;  //making connection to database
conn.once('open', () => {
    gfs = grid(conn.db, Mongoose.mongo)
    gfs.collection("fs")
});



export const uploadImage = (request, response) => {

    try {

        if (!request.file) {  // this file is that keyword which is used before the inner function calling i.e file ( used in utils->upload.js in GridFsStorage)
            return response.status(404).json("file not found")
        }


        const imageURL = `${url}/file/${request.file.filename}`   // creating url for image

        response.status(200).json(imageURL)
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getImage = async (request, response) => {

    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        let readStream = gfs.createReadStream(file.filename);

        readStream.pipe(response)

    } catch (error) {

        response.status(500).json(error);

        console.log('====================================');
        console.log(" error while calling get Image",error);
        console.log('====================================');
    }
}