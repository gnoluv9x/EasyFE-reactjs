import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    sortValue : PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

ProductSort.defaultProps = {
    onChange : null,
}

function ProductSort({ onChange , sortValue}) {

    const handleSortChange = ( e , newValue) => {
        if ( onChange ) onChange(newValue)
    }

    return (
        <div>
            <Tabs
                value={sortValue}
                onChange={handleSortChange}
                aria-label="wrapped label tabs example"
            >
                <Tab value="salePrice:ASC" label="Giá thấp tới cao" />
                <Tab value="salePrice:DESC" label="Giá cao tới thấp" />
            </Tabs>
        </div>
    );
}

export default ProductSort;