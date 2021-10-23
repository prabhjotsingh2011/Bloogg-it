
import comment from "../schema/comment-schema.js"

export const newComment=(request,response)=>{
    try {
        const cmt=new comment(request.body)
        cmt.save()

        response.status(200).json("comment added succefully")
        
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getComments=async(request,response)=>{
    try {
        const cmts= await  comment.find({ postId: request.params.id })
        // console.log(cmts);

        response.status(200).json(cmts)
        
    } catch (error) {
        response.status(500).json(error)
    }
}


export const deleteComment=async(request,response)=>{
    try {
        const cmt= await  comment.findById(request.params.id )
        await cmt.delete();
        // console.log(cmts);

        response.status(200).json("comment deleted successfully")
        
    } catch (error) {
        response.status(500).json(error)
    }
}