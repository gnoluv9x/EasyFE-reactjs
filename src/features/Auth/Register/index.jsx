import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack';

Register.propTypes = {
    closeDialog : PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { closeDialog } = props;

    const handleSubmit = async (values) => {
        try {
            // api: username === email
            values.username = values.email;
            
            // dispatch action
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if( closeDialog) closeDialog()
            // show notification
            enqueueSnackbar('Register successfull 🥇🥋🥇' , { variant : 'success'})
        } catch (error) {
            console.log('Register error : ', error);
            enqueueSnackbar(error.message , { variant : 'error'})
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
