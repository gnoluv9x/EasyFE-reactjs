import React from 'react';
import PropTypes from 'prop-types';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const thumbnailURL = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : `${THUMBNAIL_PLACEHOLDER}`;

    return <Box></Box>;
}

export default ProductThumbnail;
