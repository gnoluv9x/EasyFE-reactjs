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

function InputField(props) {
    const { name , form , label , disabled } = props;

    const { errors , formState } = form;
    const hasError = formState.touched[name] && !!errors[name];
    console.log( formState.touched[name] );
    console.log(  errors );

    return (
        <Controller
            name={name}
            control={form.control}
            as={ TextField }

            fullWidth={false}
            label={label}
            disabled={disabled}

            error={hasError}
            helperText={ errors[name]?.message }
        />
    );
}

export default InputField;
