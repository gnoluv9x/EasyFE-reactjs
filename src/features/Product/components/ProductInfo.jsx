import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {},

    description: {
        margin: theme.spacing(2, 0)
    },
    priceBox: {},
    salePrice: {},
    originalPrice: {},
    promotionPercent: {},
}));

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4" >
                {name}
            </Typography>
            <Typography variant="body2" className={classes.description}>
                {shortDescription}
            </Typography>

            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>
                    {salePrice}
                </Box>
                <Box component="span" className={classes.originalPrice}>
                    {originalPrice}
                </Box>
                <Box component="span" className={classes.promotionPercent}>
                    {promotionPercent}
                </Box>
            </Box>
        </Box>
    );
}

export default ProductInfo;
