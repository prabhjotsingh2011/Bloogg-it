import React, { useState, useEffect, useContext } from 'react'
import { Typography, Box, makeStyles, AppBar, ToolBar, FormControl, InputBase, Button, TextareaAutosize, Input } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

import { createPost, uploadFile } from '../../service/api'
import { categoryValue } from '../../context/category-context'


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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        wordBreak: 'break-all',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        border: '1px solid #878787',
        marginBottom:12,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    author:{
        display:'flex',
        marginRight:'auto',
       
    }
}))






const CreateView = () => {
    const { value, setValue } = useContext(categoryValue)
    const [author, setAuthor] = useState()

    const initialValues = {
        title: '',
        description: '',
        picture: '',
        username: '',
        categories: value,
        createdDate: new Date()
    }


    const [post, setPost] = useState(initialValues)
    const [file, setFile] = useState('')
    const [image, setImage] = useState("");

    

    const classes = useStyles();





    const history = useHistory();


    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data)
                post.picture = image.data;
                setImage(image.data)
            }
        }
        getImage()

    }, [file])

    const url = image ? post.picture : 'https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'



    //for setting that entered text to post( useState)
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });

    }

    //on click publish -> axios post call
    const savepost = async () => {
        await createPost(post)
        history.push('/')

    }

    const authorName =  (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box className={classes.container} >
            <img src={url} alt="banner" srcSet="" className={classes.image} />

            <FormControl className={classes.form} >
                <label htmlFor="fileInput">
                    <AddCircle sontSize='large' color='action' />
                </label>
                <input
                    type='File'
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase
                    placeholder="title"
                    className={classes.textField}
                    onChange={(e) => handleChange(e)}
                    name='title'
                />
                <Button variant="contained" color="primary" onClick={() => savepost()} >Publish</Button>

            </FormControl>

            <TextareaAutosize
                minRows={15}
                placeholder=" write here"
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name='description'
            />
            <Box className={classes.author}>
                <Typography style={{marginRight:'5px'}} >Author: </Typography>
                <Input
                    placeholder="Author Name "
                    onChange={(e)=> authorName(e)}
                    name='username'

                />
            </Box>

            {/* <Editor
                // editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                // onEditorStateChange={(e) => handleChange(e)}
                onChange={(e) => handleChange(e)}
            /> */}
        </Box>
    )
}

export default CreateView
