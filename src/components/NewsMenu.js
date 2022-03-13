import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import News from './News.js';

const NewsMenu = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [value, setValue] = useState('general');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        // setValue(newValue);
        switch (newValue) {
            case 0:
                setValue('general');
                break;
            case 1:
                setValue('business');
                break;
            case 2:
                setValue('entertainment');
                break;
            case 3:
                setValue('health');
                break;
            case 4:
                setValue('science');
                break;
            case 5:
                setValue('sports');
                break;
            case 6:
                setValue('technology');
                break;
            default:
                break;
        }
    }

    return (
        <Box
            sx={{
                maxWidth: 1000,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 5,
                // display: 'flex',
                // justifyContent: 'center'
            }}
        >
            <Tabs value={selectedTab} onChange={handleChange} centered position="static" textColor="secondary" indicatorColor="secondary">
                <Tab label="General" />
                <Tab label="Business" />
                <Tab label="Entertainment" />
                <Tab label="Health" />
                <Tab label="Science" />
                <Tab label="Sports" />
                <Tab label="Technology" />
            </Tabs>
            <News category={value} setProgress={props.setProgress} />
        </Box>
    );
}

export default NewsMenu;