import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItems: [],
  },
  reducers: {
    toggleCartHidden(state, action) {
      state.hidden = !state.hidden;
    },
    addItems(state, action) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        return;
      } else {
        const newItems = Object.assign({ ...action.payload, quantity: 1 });
        state.cartItems.push(newItems);

        return;
      }
    },
    clearCartItems(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    removeCartItems(state, action) {
      const cartItemToBeRemoved = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (cartItemToBeRemoved.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        return;
      } else {
        cartItemToBeRemoved.quantity -= 1;
        return;
      }
    },
  },
});
export const { toggleCartHidden, addItems, clearCartItems, removeCartItems } =
  cartSlice.actions;
export const selectCart = (state) => state.cart;
export const selectCartDropDownHiddenStatus = createSelector(
  selectCart,
  (cart) => cart.hidden
);
export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (prevQuantity, cartItem) => prevQuantity + cartItem.quantity,
      0
    )
);
export const selectCartItemsPriceTotal = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (prevQuantity, cartItem) =>
        prevQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
// export const selectCartItemsCount = (state) =>
//   state.cart.cartItems.reduce(
//     (prevQuantity, cartItem) => prevQuantity + cartItem.quantity,
//     0
//   );
export default cartSlice.reducer;
