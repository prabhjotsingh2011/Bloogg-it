
import Post from '../schema/post-schema.js'
export const createPost = async (request, response) => {
    console.log(request.body);

    try {

        const post = await new Post(request.body);
        post.save();

        response.status(200).json('blog saved succefully ')
    } catch (error) {
        response.status(500).json('error in createPost while storing in database ')
    }
}


// get all the post from mongo
export const getAllPost = async (request, response) => {

    let username=request.query.username
    let category=request.query.category

    try {

        if(username){
            let posts =await Post.find({username:username});
            response.status(200).json(posts)
        }
        else if(category){
            let posts =await Post.find({categories:category});
            response.status(200).json(posts)
            
        }
        else{

            let posts =await Post.find({});
            response.status(200).json(posts)
        }
        //  console.log(posts);
       
    } catch (error) {
        response.status(500).json('error while clling getAllPost from the database ',error)
    }
}


//get that particular post on click
export const getPost = async (request, response) => {
   
    try {
        let commingId=request.params.id;
        let post=await Post.find({_id:commingId});
        response.status(200).json(post)
    } catch (error) {
        response.status(500).json('error while clling getPost from the database ',error)
    }
}

// to update the changes to mongo
export const updatePost = async (request, response) => {
   

    try {

        await Post.findByIdAndUpdate(request.params.id,{$set:request.body});  // someparameters $set $push $addToset
        

        response.status(200).json('blog updated succefully ')
    } catch (error) {
        response.status(500).json('error in updatePost while pushing it to database in database ')
    }
}


// to delete the post
export const deletePost = async (request, response) => {
    try {

        await Post.findByIdAndDelete(request.params.id) // someparameters $set $push $addToset
        

        response.status(200).json('blog deleted succefully ')
    } catch (error) {
        response.status(500).json('error in deletePost in database ')
    }
}


