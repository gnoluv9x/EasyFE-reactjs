import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductAddtional from '../components/ProductMenu/ProductAddtional';
import ProductDescriptional from '../components/ProductMenu/ProductDescriptional';
import ProductReviews from '../components/ProductMenu/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useFetchProductData from '../hooks/useFetchProductData';

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '400px',
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(1),
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1),
    },
}));

function ProductDetailPage() {
    const classes = useStyles();
    const {
        params: { productId },
        url
    } = useRouteMatch();

    const { product, loading } = useFetchProductData(productId);

    if (loading) {
        return (
            <Box className={classes.root}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <Skeleton variant="rect" height="400px"/>
                            </Grid>
                            <Grid item className={classes.right}>
                            <Skeleton variant="rect" height="400px"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        );
    };

    const handleAddToCartFormSubmit = (formValues) => {
        console.log('formValues: ', formValues);
    };

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product}/>
                            <AddToCartForm onSubmit={handleAddToCartFormSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />

                <Switch>
                    <Route path={url} exact >
                        <ProductDescriptional product={product}/>
                    </Route>
                    <Route path={`${url}/additional`} exact >
                        <ProductAddtional product={product}/>
                    </Route>
                    <Route path={`${url}/reviews`} exact >
                        <ProductReviews product={product}/>
                    </Route>
                </Switch>
                
            </Container>
        </Box>
    );
}

export default ProductDetailPage;
