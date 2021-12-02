import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField({ name, form, label, disabled }) {
    const { errors } = form;
    const hasError = !!errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ onChange, onBlur, value, name }) => (
                <TextField
                    fullWidth={true}
                    label={label}
                    disabled={disabled}
                    variant="outlined"
                    margin="normal"
                    error={hasError}
                    helperText={errors[name]?.message}

                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                />
            )}
        />
    );
}

export default InputField;
