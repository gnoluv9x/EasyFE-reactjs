import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

const useStyles = makeStyles((theme) => {

    return {
        root: {
            position: 'relative',
            textAlign: 'center',
            height: 'auto',
        },

        avatar: {
            backgroundColor: `${theme.palette.secondary.main} !important`,
            color: '#fff !important',
            margin: '0 auto',
        },

        title: {
            padding: theme.spacing(2, 0, 2, 0),
        },

        submit: {
            color: `#fff !important`,
            margin: '20px 0 10px 0 !important',
        },

        linearProgress: {
            margin: '10px',
        },

        disabledButton: {
            backgroundColor:  'red'
        },
    };
});

function RegisterForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;

    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name')
            .test('should at least two words', 'Please enter at least two words.', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email address!').email('Please enter a valid email address!'),
        password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters'),
        retypePassword: yup
            .string()
            .required('Please retype your password')
            .oneOf([yup.ref('password')], 'Your password does not match.'),
    });

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    async function handleFormSubmit(values) {
        if (onSubmit) {
            await onSubmit(values);
        }
        
    }

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.linearProgress} />}

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
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <Button disabled={isSubmitting} type="submit" className={classes.submit} fullWidth variant="contained">
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
