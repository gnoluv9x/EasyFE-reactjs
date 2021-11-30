import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategories from './Filters/FilterByCategories';
import { Box } from '@mui/system';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object.isRequired,
};

function ProductFilters({ filters, onChange=null }) {
    const handleChangeFilterByCategories = (category) => {
        if (!onChange) return;

        const newFilters = {
            'category.id': category.id,
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
