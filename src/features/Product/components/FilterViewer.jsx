import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core';
import { Chip } from '@mui/material';
import { currencyFormater } from 'constants/index';

FilterViewer.propTypes = {
    filters : PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles( theme => ({
    root: {
        padding: 0,
        display: 'flex',
        flexFlow: 'row wrap',
        listStyle :'none',

        "& > li" : {
            margin: theme.spacing(0,1)
        }
    },
}));

const FILTER_LIST = [
    {
        id : 1,
        getLabel : () => 'Miễn phí vận chuyển',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: () => false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = {...filters}

            if( newFilters.isFreeShip ){
                delete newFilters.isFreeShip
            }else{
                newFilters.isFreeShip = true;
            }
            return newFilters
        },
    },
    {
        id : 2,
        getLabel : () => 'Có giảm giá',
        isActive: (filters) => false,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: () => true,
        onRemove: (filters) => {
            const newFilters = {...filters}

            delete newFilters.isPromotion

            return newFilters
        },
        onToggle: () => {},
    },
    {
        id : 3,
        getLabel : (filters) => `Từ ${currencyFormater(filters.salePrice_gte)} đến ${currencyFormater(filters.salePrice_lte)}`,
        isActive: () => false,
        isVisible: (filters) => filters.salePrice_gte && filters.salePrice_lte ,
        isRemovable: () => true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;

            return newFilters
        },
        onToggle: () => {},
    },
    {
        id : 4,
        getLabel : (filters) => {
            const listCategory = [
                {
                    id : 1,
                    name : 'Thời trang',
                },
                {
                    id : 2,
                    name : 'Khẩu trang',
                },
                {
                    id : 3,
                    name : 'Làm đẹp',
                },
                {
                    id : 4,
                    name : 'Laptop',
                },
                {
                    id : 5,
                    name : 'Ổ cứng',
                },
                {
                    id : 6,
                    name : 'Điện thoại',
                },
            ];
            let categoryName;
            listCategory.forEach(e => {
                if ( e.id === filters['category.id']){ 
                    categoryName = e.name
                }
            });
            return categoryName

        },
        isActive: () => false,
        isVisible: (filters) => filters['category.id'],
        isRemovable: () => true,
        onRemove: (filters) => {
            const newCategoryId = {...filters}

            delete newCategoryId['category.id']

            return newCategoryId
        },
        onToggle: () => {},
    },
];

function FilterViewer({ filters = {} , onChange = null}) {
    const classes = useStyles();

    const visibleFilter = useMemo( () => {
        return FILTER_LIST.filter( item => item.isVisible(filters))
    }, [filters])

    return (
        <Box component="ul" className={classes.root}>
            { visibleFilter.map(item => (
                <li key={item.id}>
                    <Chip
                        label={item.getLabel(filters)}
                        size="small"
                        color={!!item.isActive(filters) ? "primary" : "default"}
                        clickable={!item.isRemovable()}
                        onClick={item.isRemovable() ? null : () => {
                            if( !onChange ) return ;

                            const newFilters = item.onToggle(filters);
                            onChange(newFilters)
                        }}
                        onDelete={item.isRemovable() ? () => {
                            if( !onChange ) return ;
                            const newFilters = item.onRemove(filters)

                            onChange(newFilters)
                        } : null}
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;
