import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    name : PropTypes.string.isRequired,
    form : PropTypes.object.isRequired,

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function InputField({ name , form , label , disabled }) {

    const { errors  } = form;
    const hasError = !!errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            as={ TextField }

            fullWidth={true}
            label={label}
            disabled={disabled}
            variant="outlined"
            margin="normal"

            error={hasError}
            helperText={ errors[name]?.message }
        />
    );
}

export default InputField;