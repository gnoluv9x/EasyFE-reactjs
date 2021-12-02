import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please choose quantity')
            .typeError('Quantity must be a number')
            .min(1, 'Quantity must be at least one'),
    });

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    async function handleFormSubmit(values) {
        if (onSubmit) {
            await onSubmit(values);
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form} />

            <Button type="submit" color="primary" style={{ width : '200px'}} variant="contained">
                Add to Cart
            </Button>
        </form>
    );
}

export default AddToCartForm;
