import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login } from '../userSlice';

Login.propTypes = {
    closeDialog : PropTypes.func,
};

function Login(props) {
    
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { closeDialog } = props;

    const handleSubmit = async (values) => {
        try {
            // dispatch action use Thunks
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if( closeDialog) closeDialog()

            // show notification
            enqueueSnackbar('Login successfull 🥇🥋🥇' , { variant : 'success'})
        } catch (error) {
            console.log('Register error : ', error);
            enqueueSnackbar(error.message , { variant : 'error'})
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
