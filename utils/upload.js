
import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer'


//first create a object of storage 
const storage = new GridFsStorage({
    //where to store
    url: 'mongodb+srv://prabhjot:prabhjot@cluster0.vbsux.mongodb.net/Bloggerdev?retryWrites=true&w=majority',

    //options passes while connection to db
    options: { useNewUrlParser: true, useUnifiedTopology: true },

    //file to be uploaded
    file: (request, file) => {
        const match = ["image/png", "image/jpg"] //acceptablable file formats

        if (match.indexOf(file.mimeType) === -1) 
            return `${Date.now()}-blog-${file.originalname}`  // cerating file name  [time in ms]-blog-[Original fileName]
        

        return {
            bucketName: "photos",
            fileName: `${Date.now()}-blog-${file.originalname}`
        }
    }

})

export default multer({ storage })