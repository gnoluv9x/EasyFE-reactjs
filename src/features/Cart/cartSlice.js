import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [
            // { id : 1, product: {} , quantity : 1}
        ],
    },
    reducers: {
        showMiniCart(state, action) {
            state.showMiniCart = true;
        },
        hideMiniCart(state, action) {
            state.showMiniCart = false;
        },

        addToCart(state, action) {
            const newItems = action.payload;
            const index = state.cartItems.findIndex((item) => item.id === newItems.id);

            if (index >= 0) {
                // increase quantity for this item
                state.cartItems[index].quantity += newItems.quantity;
            } else {
                // add to cart
                state.cartItems.push(newItems);
            }
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
        },
    },
});

const { actions, reducer } = cartSlice;

export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;

export default reducer;
