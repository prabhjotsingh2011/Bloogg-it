import React from 'react'
import {Typography,Box,makeStyles} from '@material-ui/core'
import {getPost} from '../../service/api.js'


const useStyles=makeStyles({
    container:{
        height: 350,
        margin:10,
        borderRadius:10,
        border:'1px solid #d3cede',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        "& >*":{
            padding:'0 5px 5px 5px',
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius: '10px 10px 0 0'
    },
    text:{
        color:'#878787',
        fontSize:12,

    },
    heading:{
        fontSize:22,
        fontWeight:'bold' ,
        textAlign:'center'
    },
    detail:{
        fontSize:14,
        wordBreak:'break-word'
    }
})

const Post = ({post}) => {
    const classes=useStyles();
    const url= post.picture || 'https://media.istockphoto.com/photos/woman-using-laptop-while-sitting-at-home-picture-id1212597557?s=612x612'

    const getThisPost=async(id)=>{
        let postData= await getPost(id);
        console.log('====================================');
        console.log("inside the post");
        console.log('====================================');
    }

    const addElipsis= (str,limit)=>{
        return str.length > limit ? str.substring(0,limit) + '...': str
    }

    return (
        <Box className={classes.container}>
           <img src={url} alt="blog" srcset=""  className={classes.image}/>
           <Typography className={classes.text}>{post.categories}</Typography>
           <Typography className={classes.heading}>{addElipsis(post.title,20)}</Typography>
           <Typography className={classes.text}>{post.username}</Typography>
           <Typography className={classes.detail} >{addElipsis(post.description,100)}</Typography>

        </Box>
    )
}

export default Post
