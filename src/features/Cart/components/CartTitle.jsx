import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        padding: theme.spacing(1),
        textAlign : 'center',
    },
    productInfo: {
        flex: "2 1 0",
    },
    price: {
        flex: "1 1 0",
    },
    quantity: {
        flex: "1 1 0",
    },
    total: {
        flex: "1 1 0",
    },
    delete: {
    },
}))

function CartTitle(props) {
    const classes = useStyles();

    return (
        <Box>
            <Paper elevation={0}>
                <Grid container className={classes.root}>
                    <Grid item  className={classes.productInfo}>Tất cả sản phẩm</Grid>
                    <Grid item  className={classes.price}>Đơn giá</Grid>
                    <Grid item  className={classes.quantity}>Số lượng</Grid>
                    <Grid item  className={classes.total}>Thành tiền</Grid>
                    <Grid item  className={classes.delete}><DeleteIcon /></Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default CartTitle;