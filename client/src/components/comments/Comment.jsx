

import React from 'react'
import { Typography, Box, makeStyles, AppBar, ToolBar } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import {deleteComment} from '../../service/api'

const useStyles = makeStyles({
    component: {
        marginTop: 30,
        background: '#F5f5f5',
        padding: 10,
    },
    container: {
        display: 'flex',
        marginBottom:5
    },
    name:{
        fontSize:18,
        fontWeight:600,
        marginRight:20
    },
    date:{
        fontSize:'#878787',
    },
    delete:{
        marginLeft:'auto',
        cursor: 'pointer'
    }
})

const Comment = ({ comment,setToggle }) => {

    const classes = useStyles();

    const removeComment=async()=>{
        await deleteComment(comment._id)
        setToggle(prev => !prev)
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography  className={classes.name} > {comment.name} </Typography>
                <Typography className={classes.date} > {new Date(comment.date).toDateString()} </Typography>
                <Delete className={classes.delete} onClick={()=> removeComment()} />
            </Box>
            <Typography > {comment.comments} </Typography>
        </Box>
    )
}

export default Comment
