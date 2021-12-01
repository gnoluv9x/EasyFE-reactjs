import React from 'react';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    left: {
        width: '400px',
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
}));

function ProductDetailPage() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            Thumbnail
                            
                        </Grid>
                        <Grid item className={classes.right}>Product Info</Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ProductDetailPage;
