import express from 'express'
import { createPost, getAllPost, getPost, updatePost, deletePost } from '../controller/post-controller.js'
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment,getComments, deleteComment} from '../controller/cmment-controller.js';

import upload from '../utils/upload.js'

const router = express.Router();


router.post('/create', createPost)
router.get('/post', getAllPost)
router.get('/post/:id', getPost)
router.post('/update/:id', updatePost)
router.post('/delete/:id', deletePost)
router.post('/file/upload', upload.single('file'), uploadImage)
router.get('/file/:filename', getImage)
router.post('/comment/new',newComment)
router.get('/comments/:id',getComments)
router.delete('/comment/delete/:id',deleteComment)

export default router;  