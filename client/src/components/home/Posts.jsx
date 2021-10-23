import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Grid } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { getAllPosts } from '../../service/api'



const Posts = () => {
    // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {

        //as the data we are getting is async data so we have to use await and to use await we have to give useEffect async but its not recommended So to do so use a function inside useEffect and call that function 

        const fetchData = async () => {
            console.log(search);
            const allpossts = await getAllPosts(search);
            console.log(allpossts);
            setPosts(allpossts)
        }
        fetchData();
        console.log(posts);
    }, [search]);

    return (
        posts.map(post => (
            <Grid item lg={3} sm={4} sx={12}>
                <Link to={`/details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))
    )
}

export default Posts
