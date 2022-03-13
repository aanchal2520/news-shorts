import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: 60
    }
})


const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const classes = useStyles();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Box>
                        <img src={url} alt="logo" className={classes.logo} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Header;
