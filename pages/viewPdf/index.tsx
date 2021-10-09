import type { NextPage } from 'next';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../../styles/ViewPdf.module.css';
import {Paper,AppBar } from '@material-ui/core';


const viewPdf: NextPage = () => {


    const information = [
        { name: 'jose alberto' },
        { name: 'alina sayuri' },
        { name: 'maria beatriz'},
        { name: 'jullissa del carmen'},
        {name: 'karen alexia'},
        {name: 'jose daniel'},
        {name: 'jesus antonio'},
        {name: 'jose antonio'}
    ]


    return (
        <div >
            <AppBar color='secondary' position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit">
                        PDF
                    </Typography>
                </Toolbar>
            </AppBar>


            <div className={styles.container}>
                {
                    information.map((dato) => (

                        // eslint-disable-next-line react/jsx-key
                        <div style={{ gridColumnEnd: 'span 3' }}>

                                    <Paper className={styles.paper} elevation={3} >
                                        {dato.name}
                                    </Paper>



                </div>
                    ))}
            </div>
        </div>
    )
}

export default viewPdf
