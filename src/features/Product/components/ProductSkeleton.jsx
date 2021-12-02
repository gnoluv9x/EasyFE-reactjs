import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductSkeleton.propTypes = {
    skeletonLength: PropTypes.number,
};

ProductSkeleton.defaultProps = {
    skeletonLength: 6,
};

function ProductSkeleton({ skeletonLength }) {
    return (
        <Grid container>
            {Array.from(new Array(skeletonLength)).map( (e, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4} lg={3} padding={1}>
                    <Skeleton variant="rectangular" width="100%" height="240px" />
                    <Skeleton />
                    <Skeleton width="60%" />
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductSkeleton;
