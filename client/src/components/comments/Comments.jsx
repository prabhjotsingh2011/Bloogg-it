

import React,{useState,useEffect} from 'react'
import {Typography,Box,makeStyles, AppBar, ToolBar, TextareaAutosize,Button} from '@material-ui/core'
import { newComment,getComments } from '../../service/api'

import Comment from './Comment'

const useStyles=makeStyles({
    component:{
        marginTop:100,
        display: 'flex',
        
    },
    image:{
        width:50,
        height:50,
        borderRadius:'50%',

    },
    textarea:{
        width:'100%'
    },
    button:{
        height:30,
        margin:"0 20px"
    }
})


const initialValue={
    name:'',
    postId: '',
    date: new Date(),
    comments:''
}

const Comments = ({post}) => {
    const classes=useStyles()

    const [comment, setComment] = useState(initialValue)
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);



    useEffect(() => {
       const getData = async()=>{
           let response=await getComments(post._id)
            setComments(response);
            console.log('====================================');
            console.log(response);
            console.log('====================================');
       }
       getData()
    }, [post,toggle]);
    

    const url='https://static.thenounproject.com/png/12017-200.png'


    const handleChange=(e)=>{
        setComment({
            ...comment,
            name:post.username,
            postId:post._id,
            comments:e.target.value
        })
    }

    const postComment=async()=>{
        await newComment(comment);
        setToggle(prev => !prev);
    }

    return (
      <Box >
          <Box className={classes.component}>
              <img src={url} alt="dp" srcset=" " className={classes.image} />
              <TextareaAutosize 
                className={classes.textarea}
                minRows={5}
                onChange={(e)=>handleChange(e)}
             />
              <Button 
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                onClick={()=> postComment()}
                
              >Post</Button>
          </Box>
          {
            comments && comments.map(comment => (
                  <Comment comment={comment}  setToggle={setToggle} />
                  
            ))
          }
      </Box>
    )
}

export default Comments
