import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import QuantityFieldSubmit from 'components/form-controls/QuantityFieldSubmit';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


QuantityForm.propTypes = {
    quantity: PropTypes.number.isRequired,
    productid: PropTypes.number.isRequired,
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

function QuantityForm({ quantity = 1, onChangeQuantity = null, productid = 1 }) {
    const classes = useStyles();

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

    async function handleFormSubmit(quantity) {
        if (onChangeQuantity) {
            const productinfo = {
                id : productid,
                ...quantity,
            }
            await onChangeQuantity(productinfo);
        }
    }

    return (
        <form className={classes.root} onSubmit={form.handleSubmit(handleFormSubmit)}>
            <QuantityFieldSubmit name="quantity" label="Quantity" form={form}/>
        </form>
    );
}

export default QuantityForm;
