import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        try {
            console.log('Form values: ', values);
            values.username = values.email;
            const action = register(values);

            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            
            console.log('User : ', user);
        } catch (error) {
            console.log('Register error : ', error);
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
