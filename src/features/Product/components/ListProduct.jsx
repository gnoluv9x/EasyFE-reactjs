import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

ListProduct.propTypes = {
    data: PropTypes.array,
};

ListProduct.defaultProps = {
    data: [],
};

function ListProduct({ data }) {
    const history = useHistory();

    return (
        <Grid container>
            {data.map((product, idx) => {
                const thumbnailURL = product.thumbnail
                    ? `${STATIC_HOST}${product.thumbnail?.url}`
                    : `${THUMBNAIL_PLACEHOLDER}`;
                const handleClickThumbnail = () => {
                    //navigate to product detail : /products/:productId
                    history.push(`/products/${product.id}`);
                };

                return (
                    <Grid item key={idx} xs={12} sm={6} md={4} lg={3} padding={1}>
                        <Box style={{cursor: "pointer"}} onClick={handleClickThumbnail}>
                            <img src={thumbnailURL} alt={product.name} width="100%" />
                        </Box>
                        <Typography>{product.name}</Typography>
                        <Typography>
                            <Box component="strong" fontSize="20px" mr={1}>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    product.salePrice
                                )}
                            </Box>
                            {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
                        </Typography>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ListProduct;
