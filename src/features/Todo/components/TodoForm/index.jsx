import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string()
    .required('Please enter your name')
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Must be email")
    .min(5, 'Must be exactly 5 digits')
    .max(20, 'Must be exactly 10 digits'),
}).required();


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {

    const form = useForm({
        mode : 'onTouched',
        defaultValues : {
            title : '',
        },
        resolver : yupResolver( schema ),
    });


    function handleFormSubmit(values){
        console.log('Todo submit: ', values);
    };

    return (
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>

            <InputField name="title" label="Todo" form={form}/>
            

        </form>
    );
}

export default TodoForm;