import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, FormHelperText, OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { name, form, label } = props;
    const [showPassword, setShowPassword] = useState(false);

    const { errors } = form;
    const hasError = !!errors[name];

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl error={hasError} margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                as={OutlinedInput}
                id={name}
                label={label}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />

            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;
