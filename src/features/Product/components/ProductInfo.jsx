import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { currencyFormater } from 'utils';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {
        // '& .MuiTypography-body2': {
        //     margin: theme.spacing(2, 0),
        // },
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        paddingBottom: theme.spacing(2),
    },
    description: {
        margin: theme.spacing(2, 0),
    },
    priceBox: {
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(2),
    },
    salePrice: {
        fontSize: theme.typography.h4.fontSize,
        marginRight: theme.spacing(3),
    },
    originalPrice: {
        textDecoration: 'line-through',
        marginRight: theme.spacing(2),
    },
}));

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4">
                {name}
            </Typography>
            <Typography variant="body2" className={classes.description}>
                {shortDescription}
            </Typography>
            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>
                    {currencyFormater(salePrice)}
                </Box>

                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className={classes.originalPrice}>
                            {currencyFormater(originalPrice)}
                        </Box>
                        <Box component="span" className={classes.promotionPercent}>
                            {`-${promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;
