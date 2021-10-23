import axios from 'axios'
const url = '';

export const createPost = async (post) => {
    try {

        return await axios.post(`${url}/create`, post)
    } catch (error) {
        console.log("error while calling createPost api", error);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/post${param}`)
        return response.data;
    } catch (error) {
        console.log("error while calling getAllPosts api", error);
    }
}

export const getPost = async (id) => {
    try {
        let post = await axios.get(`${url}/post/${id}`)
        return post.data;
    } catch (error) {
        console.log("error while calling getPost api ", error);
    }
}



export const updatePost = async (id, post) => {
    try {
        await axios.post(`${url}/update/${id}`, post)
    } catch (error) {
        console.log("error while calling updatePost api ", error);
    }
}


export const deletePost = async (id) => {
    try {
        await axios.post(`${url}/delete/${id}`, id)
    } catch (error) {
        console.log("error while calling deletePost api ", error);
    }
}


export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);

    } catch (error) {
        console.log("error while calling uploadFile api ", error);
    }
}


export const newComment = async (data) => {
    try {
        return await axios.post(`${url}/comment/new`, data);

    } catch (error) {
        console.log("error while calling newComment api ", error);
    }
}


export const getComments = async (id) => {
    try {
        const res = await axios.get(`${url}/comments/${id}`);
        return res.data;

    } catch (error) {
        console.log("error while calling getComment api ", error);
    }
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
        

    } catch (error) {
        console.log("error while calling deleteComment api ", error);
    }
}




