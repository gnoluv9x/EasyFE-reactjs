import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState  } from 'react';
import PropTypes from 'prop-types';

FilterByPrice.propTypes = {
    onChange : PropTypes.func,
};

const useStyles = makeStyles( (theme) => ({
    root : {
        padding : theme.spacing(1),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        marginTop: theme.spacing(1),
    },
    range : {
        display : 'flex',
        flexFlow : 'row nowrap',
        alignItems : 'center',
        margin: theme.spacing(1, 0),

        "& > span" : {
            margin : theme.spacing(0, 1)
        }
    },
}));

function FilterByPrice({ onChange }) {
    const classes = useStyles();
    const [values , setValues] = useState({
        salePrice_gte : 0,
        salePrice_lte : 0,
    });

    const handleSubmit = () => {
        if( onChange ) onChange(values)

        setValues({
            salePrice_gte : 0,
            salePrice_lte : 0,
        })
    };

    const handleChangePrice = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    };

    return (
        <Box className={classes.root}>
            <Typography mt={1} textAlign="center" variant="subtitle2" > KHOẢNG GIÁ </Typography>

            <Box className={classes.range}>
                <TextField variant="standard" name="salePrice_gte" value={values.salePrice_gte} onChange={handleChangePrice}/>
                <span> - </span>
                <TextField variant="standard" name="salePrice_lte" value={values.salePrice_lte} onChange={handleChangePrice}/>
            </Box>

            <Button variant="contained" color="primary" onClick={handleSubmit}> Áp dụng </Button>
        </Box>
    );
}

export default FilterByPrice;
