import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategories from './Filters/FilterByCategories';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';
import { Box } from '@material-ui/core';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object.isRequired,
};

function ProductFilters({ filters, onChange=null }) {
    const handleChangeFilterByCategories = (categoryId) => {
        if (!onChange) return;

        const newFilters = {
            'category.id': categoryId,
        };

        onChange(newFilters);
    };

    const handleChangeOtherFilters = (newValues) => {
        if (onChange) onChange(newValues);
    };

    return (
        <Box>
            <FilterByCategories onChange={handleChangeFilterByCategories}/>
            <FilterByPrice onChange={handleChangeOtherFilters} />
            <FilterByService onChange={handleChangeOtherFilters} filters={filters} />
        </Box>
    );
}

export default ProductFilters;
