import React, { useEffect, useState } from 'react'
import { Typography, Box, makeStyles, AppBar, ToolBar, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { getPost, updatePost,uploadFile } from '../../service/api'
import { Link } from 'react-router-dom'

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
        heigth: '50vh',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}))


const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'Prabhjot Singh',
    categories: '',
    createdDate: new Date()
}


const UpdateView = ({ match }) => {
    const [file, setFile] = useState('')
    const [image, setImage] = useState("");
    const [data, setData] = useState(initialValues);



    const classes = useStyles();
    const url =  image? data.picture : 'https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const datas = new FormData();
                datas.append("name", file.name);
                datas.append("file", file);

                const image = await uploadFile(datas)
                data.picture = image.data;
                setImage(image.data)
            }
        }
        getImage()
    }, [file])


    useEffect(() => {

        const getDetails = async () => {
            const postData = await getPost(match.params.id);
            // console.log('====================================');
            // console.log(postData[0]);
            // console.log('====================================');
            setData(postData[0])
        }
        getDetails()

    }, []);



    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }

    const updateIt = () => {
        const update = async () => {
            await updatePost(match.params.id, data);
        }
        update()
    }

    return (



        <Box className={classes.container} >
            <img src={data.picture || url} alt="banner" srcset="" className={classes.image} />

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
                <InputBase placeholder="title" className={classes.textField} name="title" onChange={(e) => handleChange(e)} value={data.title} />
                <Link to={`/details/${data._id}`}>
                    <Button variant="contained" color="primary" onClick={() => updateIt()} >Update</Button>
                </Link>
            </FormControl>

            <TextareaAutosize
                minRows={10}
                onChange={(e) => handleChange(e)}
                className={classes.textarea}
                value={data.description}
                name="description"
            />
        </Box>
    )
}

export default UpdateView
