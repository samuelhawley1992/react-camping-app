import React from 'react';
import './css/style.css';
import { Grid } from '@material-ui/core';

function Header () {
    return (
        <header className="app-header">
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <img className="logo" src="#" alt="logo" />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <h1 className="title">Title</h1>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;