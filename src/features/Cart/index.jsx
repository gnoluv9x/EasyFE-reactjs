import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { currencyFormater } from 'utils';
import { cartItemsQuantity, cartItemsTotalPrice } from './cartSelectors';
import CartTitle from './components/CartTitle';
import ListCartItem from './components/ListCartItem';

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    cartInfo: {
        marginTop: theme.spacing(2),

        '& > *': {
            margin: theme.spacing(1, 1),
        },
    },
    listItems: {
        flex: '5 1 0',
        padding: theme.spacing(1),

        '& > div': {
            marginBottom: theme.spacing(2),
        },
    },
    totalPrice: {
        flex: '1 1 200px',
        height: '50px',
        lineHeight: '50px',
        padding: theme.spacing(1),
    },
}));

function CartFeature() {
    const classes = useStyles();

    const totalPrice = useSelector(cartItemsTotalPrice);
    const cartItemsCount = useSelector(cartItemsQuantity);

    return (
        <Box>
            <Container className={classes.root}>
                <Typography component="span" variant="h6">
                    GIỎ HÀNG{' '}
                </Typography>
                <Typography component="span" variant="body2">
                    ( {cartItemsCount} sản phẩm )
                </Typography>

                <Grid container className={classes.cartInfo}>
                        <Grid item className={classes.listItems}>
                            <CartTitle />
                            <ListCartItem />
                        </Grid>
                    <Paper elevation={0} className={classes.totalPrice}>
                        <Grid item>
                            <Typography component="span" variant="subtitle2">
                                TOTAL PRICE:{' '}
                            </Typography>
                            <Typography component="span" color="secondary" variant="h6">
                                {currencyFormater(totalPrice)}
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default CartFeature;
