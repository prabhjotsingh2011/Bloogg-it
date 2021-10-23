// **************************************************************************
// ***** DetaileView is when someone click the update icon in /details*******
// **************************************************************************


import React, { useState, useEffect } from 'react'
import { Typography, Box, makeStyles } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { getPost, deletePost, getAllPosts } from '../../service/api'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Comments from '../comments/Comments'


const useStyles = makeStyles(theme => ({
    container: {
        padding: '0 100px',
        marginTop: 50,
        [theme.breakpoints.down('md')]: {
            padding: 5
        }
    },
    image: {
        width: '100%',
        height: '70vh',
        objectFit: 'cover',
        marginTop: 50
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        bordre: '1px solid #878787',
        padding: 5,
        borderRadius: 10,
        cursor: 'pointer'
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    textEditor: {
        [theme.breakpoints.down('sm')]: {
            padding: 10,
            textAlign: 'justify'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))



const DetailView = ({ match }) => {
    const classes = useStyles()
    const history = useHistory();
    let url = 'https://media.istockphoto.com/photos/african-american-woman-using-online-banking-close-up-picture-id1301014531?k=20&m=1301014531&s=612x612&w=0&h=xcrX8uz60u9sd6i1xTz6GCAghCZyIGDkautuG4Iu-Vg='


    const [post, setPost] = useState({});
    useEffect(() => {
        const getDetails = async () => {
            let response = await getPost(match.params.id);
            setPost(response[0]);
        }
        getDetails()
    }, [])


    const DeleteThePost = () => {
        const del = async () => {
            confirmAlert({
                title: 'Confirm to delete  Post',
                message: 'Are you sure to delete this Post.',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: async () => {

                            await deletePost(match.params.id);
                            history.push('/')
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => { return }
                    }
                ]
            });
        }
        return del()
    }

   

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" srcset="" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}>
                    <Edit color="primary" className={classes.icon} />
                </Link>

                <Delete color="error" className={classes.icon} onClick={() => DeleteThePost()} />

            </Box>
            <Typography className={classes.heading}>
                {post.title}
            </Typography>

            <Box className={classes.subheading} >
                <Link to={`/?username=${post.username}`} className={classes.link} >
                    <Typography ><span style={{ fontWeight: 600, cursor: 'pointer' }}>{post.username}</span></Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Typography className={classes.textEditor} >{post.description}</Typography>
            <Comments post={post}/>
            <Box style={{height:'50vh'}} />
        </Box>
    )
}

export default DetailView
