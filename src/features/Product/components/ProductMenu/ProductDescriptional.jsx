import React from 'react';
import PropTypes from 'prop-types';

ProductDescriptional.propTypes = {
    product : PropTypes.object,
};

function ProductDescriptional({ product = {} }) {
    console.log( product );
    return (
        <div>
            {product.description}
        </div>
    );
}

export default ProductDescriptional;
