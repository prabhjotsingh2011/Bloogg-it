import React from 'react'
import Banner from './Banner';
import { Grid } from '@material-ui/core'
import Categories from './Categories';
import Post from './Posts';

const Home = () => {

    return (
        <div >
            <Banner />
            <Grid container >
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid item container lg={10} xs={12} sm={10}>
                    <Post />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
