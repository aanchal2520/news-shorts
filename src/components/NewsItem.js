import React from 'react'
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40
    }
});

const NewsItem = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.card}>
                <Card sx={{ maxWidth: 800 }}>
                    <CardMedia
                        component="img"
                        height="340"
                        image={props.image}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={props.url} size="small">Read More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>

    );
}

export default NewsItem;