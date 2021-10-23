import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Link,useHistory } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react';

const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'

    },
    container: {
        justifyContent: 'center',
        ' & > *': {
            padding: 20
        }
    }
})
const Home = () => {
    const classes = useStyles()
    const history=useHistory()

    // const { oktaAuth, authState } = useOktaAuth();

    // if (authState && authState.isPending) return null;


    // const login =async ()=>  history.push('/login')
    // const logout =async ()=>  oktaAuth.signOut()


    // const button = authState.isAuthenticated ?
    // <button onClick={logout} 

    //     style={{
    //         background: 'unset',
    //         fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    //         border: 'none',
    //         textTransform:'uppercase',
    //         fontFamily:'Roboto',
    //         fontSize:17,
    //         cursor: 'pointer'
    //     }}

    //  >Logout</button> :
    // <button onClick={login}>Login</button>;


    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>
                        Home
                    </Typography>
                </Link>
                <Typography> About</Typography>
                <Typography> Contact</Typography>
                <Typography>Logout</Typography>
                {/* <Typography> {button}</Typography> */}

            </Toolbar>
        </AppBar>


    )
}

export default Home
