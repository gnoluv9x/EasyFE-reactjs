import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


QuantityForm.propTypes = {
    quantity: PropTypes.number.isRequired,
    onChangeQuantity: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
    },
    button: {
        color: '#000',
    },
}));

function QuantityForm({ quantity = 1, onChangeQuantity = null }) {
    const classes = useStyles();
    console.log(' quantity from parent: ',quantity);

    const schema = yup.object().shape({
        quantity: yup
            .number()
            .min(1, 'Minimum quantity is one')
            .max(100, 'Maximum quantity is ten')
            .required('Please choose quantity!')
    });

    const form = useForm({
        mode: 'onBlur',
        defaultValues: {
            quantity: quantity,
        },
        resolver: yupResolver(schema),
    });

    async function handleFormSubmit(values) {
        if (onChangeQuantity) {
            await onChangeQuantity(values);
        }
    }

    return (
        <form className={classes.root} onSubmit={form.handleSubmit(handleFormSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form}/>
        </form>
    );
}

export default QuantityForm;
