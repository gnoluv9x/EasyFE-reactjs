import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';
import { currencyFormater } from 'constants/util';
import QuantityForm from './QuantityForm';

ListCartItem.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: theme.spacing(1),
        textAlign : 'center',
    },
    productInfo: {
        flex: '2 1 0',

        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        " & > div" : {
            flex : '1 1 0'
        }
    },
    thumbnail: {
        width: '100%',
        objectFit: 'contain',
    },
    price: {
        flex: '1 1 0',
    },
    quantity: {
        flex: '1 1 0',
    },
    total: {
        flex: '1 1 0',
    },
    delete: {},
}));

function ListCartItem() {
    const classes = useStyles();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log('Cart Items: ', cartItems);

    const handleChangeQuantity = (newQuantity) => {
        console.log( 'Quantity new: ', newQuantity);
    };
    
    return (
        <Box>
            {cartItems.map((productItem) => {
                const thumbnailURL = productItem.product.thumbnail
                    ? `${STATIC_HOST}${productItem.product.thumbnail?.url}`
                    : `${THUMBNAIL_PLACEHOLDER}`;

                return (
                    <Paper elevation={0} key={productItem.id}>
                        <Grid container className={classes.root}>
                            <Grid item className={classes.productInfo}>
                                <Box>
                                    <img
                                        className={classes.thumbnail}
                                        src={thumbnailURL}
                                        alt={productItem.product.name}
                                    />
                                </Box>
                                <Box>
                                    <Typography component="span" variant="subtitle2">
                                        {productItem.product.name}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item className={classes.price}>
                                {currencyFormater(productItem.product.salePrice)}
                            </Grid>
                            <Grid item className={classes.quantity}>
                                {/* {productItem.quantity} */}
                                <QuantityForm quantity={productItem.quantity} onChangeQuantity={handleChangeQuantity}/>

                            </Grid>
                            <Grid item className={classes.total}>
                                {currencyFormater(productItem.product.salePrice * productItem.quantity)}
                            </Grid>
                            <Grid item className={classes.delete}>
                                <DeleteIcon />
                            </Grid>
                        </Grid>
                    </Paper>
                );
            })}
        </Box>
    );
}

export default ListCartItem;
