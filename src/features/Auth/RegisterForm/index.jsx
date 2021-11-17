import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import PasswordField from 'components/form-controls/PasswordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

const useStyles = makeStyles( () => {

    const theme = createTheme();

    return ({
    root: {
        textAlign: 'center',
    },

    avatar: {
        backgroundColor :  `${theme.palette.secondary.main} !important`,
        color: "#fff !important",
        margin: "0 auto",
    },

    title: {
        padding: theme.spacing(2, 0 ,2 ,0)
    },

    submit: {
        backgroundColor : `${theme.palette.primary.main} !important`,
        color: `#fff !important`,
        margin: "20px 0 0 10px !important",
    },
})});

function RegisterForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;

    const schema = yup
        .object()
        .shape({
            fullName : yup
                .string()
                .required('Please enter your full name')
                .test('should at least two words' , 'Please enter at least two words.', value => {
                    return value.split(' ').length >= 2;
                }),
            email : yup
                .string()
                .required('Please enter your email address!')
                .email('Please enter a valid email address!'),
            password : yup
                .string()
                .required('Please enter your password')
                .min(6 , 'Please enter at least 6 characters'),
            retypePass : yup
                .string()
                .required('Please retype your password')
                .oneOf([yup.ref('password')], 'Your password does not match.')
        })

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePass: '',
        },
        resolver: yupResolver(schema),
    });

    function handleFormSubmit(values) {

        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                    <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} variant="h6" component="h2">
                Create an account
            </Typography>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />

                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePass" label="Retype Password" form={form} />

                <Button type="submit" className={classes.submit} fullWidth>Create an account</Button>
            </form>
        </div>
    );
}

export default RegisterForm;
