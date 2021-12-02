import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
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

function LoginForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;

    const schema = yup.object().shape({
        identifier: yup.string().required('Please enter your email address!').email('Please enter a valid email address!'),
        password: yup.string().required('Please enter your password'),
    });

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            identifier: '',
            password: '',
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
                Login Form
            </Typography>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="identifier" label="Full Name" form={form} />

                <PasswordField name="password" label="Password" form={form} />

                <Button disabled={isSubmitting} type="submit" className={classes.submit} fullWidth variant="contained">
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
