import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { STATIC_HOST , THUMBNAIL_PLACEHOLDER} from 'constants/index';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const thumbnailURL = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

    return (
        <Box >
            <img src={thumbnailURL} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumbnail;
