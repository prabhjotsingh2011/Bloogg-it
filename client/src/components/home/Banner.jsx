import React from 'react'
import { makeStyles , Typography} from '@material-ui/core'

const useStyles=makeStyles({
    image:{
        background:`url(${'https://thumbs.dreamstime.com/z/laptop-garden-774195.jpg'}) 80% repeat-x #000`,
        // filter: 'blur(2px)',
        // WebkitFilter:  'blur(2px)',
        height:'100vh',
        width:'100%',
        display:'flex',
        backgroundImage:'contain',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        '& :first-child':{
            fontSize:60 ,
            color:'#ba2534',
            lineHeight: 1
        },
        '& :last-child':{
            fontSize:20,
            color:'#ba2534',
        }
    },
   
})

const Banner = () => {
    const classes=useStyles();
    return (
           <>
        <div className={classes.image}>
        <Typography className={classes.first} >BLOGGER.DEV</Typography>
        <Typography className={classes.second} >Place to dump you Knowledge</Typography>
        </div>
        </>
    )
}

export default Banner
