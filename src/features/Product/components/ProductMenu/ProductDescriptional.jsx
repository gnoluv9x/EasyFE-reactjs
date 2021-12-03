import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Paper } from '@material-ui/core';

ProductDescriptional.propTypes = {
    product : PropTypes.object,
};

function ProductDescriptional({ product = {} }) {
    const safeDescription = DOMPurify.sanitize( product.description)
    return (
        <Paper elevation={0} style={{padding: '10px'}}>
            <div dangerouslySetInnerHTML={{ __html : safeDescription}} />
        </Paper>
    );
}

export default ProductDescriptional;
