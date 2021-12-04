import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector =  state => state.cart.cartItems;

// Count quantity of product in cart
export const cartItemsQuantity = createSelector(
    cartItemsSelector,
    (cartItems) =>
    cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
);

// calculate total price
export const cartItemsTotalPrice = createSelector(
    cartItemsSelector,
    (cartItems) =>
    cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
