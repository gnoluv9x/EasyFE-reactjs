import { Box, FormControl, FormHelperText, IconButton, makeStyles, OutlinedInput, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles( theme => ({
    root: {},
    formField: {
        marginTop : theme.spacing(1),
        width : "180px",
        display: 'flex',
        flexFlow : 'row nowrap',
        alignItems: 'center',
    },
    button: {
        color: '#000',
    },
}))

function QuantityField({ name, form, label }) {
    const { errors, setValue } = form;
    const hasError = !!errors[name];
    
    const classes = useStyles();

    return (
        <FormControl error={hasError} margin="normal" size="small" fullWidth variant="outlined">
            <Typography>{label}</Typography>

            <Controller
                name={name}
                control={form.control}
                render={({ onChange, onBlur, name , value={value} }) => (
                    <Box className={classes.formField}>
                        <IconButton className={classes.button} type="submit"
                            onClick={() => setValue(name, !!Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                        >
                            <RemoveIcon />
                        </IconButton>

                        <OutlinedInput value={value} id={name} onChange={onChange} onBlur={onBlur} />

                        <IconButton className={classes.button} type="submit"
                            onClick={() => setValue(name, !!Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                )}
            />

            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;
