import { Box, makeStyles, Typography } from '@material-ui/core';
import categoriesApi from 'api/categoriesApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

FilterByCategories.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles( theme => ({

    root: {
    },
    heading: {
        marginTop : "10px",
        textAlign : "center",
    },

    menu: {
        padding : "0",
        margin: "0",
        marginLeft : "10px",
        listStyle : "none",

        "& > li" : {
            padding: "5px 0"
        },
        "& > li:hover" : {
            cursor : "pointer",
            color : "#1976D2",
        },
    },

}))

function FilterByCategories({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    const classes = useStyles();

    const handleCategoriesChange = (categoryId ) => {
        if (onChange) {
            onChange(categoryId);
        }
    };

    useEffect(() => {
        try {
            (async () => {
                const list = await categoriesApi.getAll();
                setCategoryList(
                    list.map((i) => ({
                        id: i.id,
                        name: i.name,
                    }))
                );
            })();
        } catch (error) {
            console.log('Failed to fetch category filters', error);
        }
    }, []);

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.heading}>DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoriesChange(category.id)}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategories;
