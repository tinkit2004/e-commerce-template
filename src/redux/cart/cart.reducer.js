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
        action.payload.quantity = 1;
        state.cartItems.push(action.payload);
        return;
      }
    },
  },
});
export const { toggleCartHidden, addItems } = cartSlice.actions;
export const selectCartDropDownHiddenStatus = (state) => state.cart.hidden;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (prevQuantity, cartItem) => prevQuantity + cartItem.quantity,
      0
    )
);
// export const selectCartItemsCount = (state) =>
//   state.cart.cartItems.reduce(
//     (prevQuantity, cartItem) => prevQuantity + cartItem.quantity,
//     0
//   );
export default cartSlice.reducer;
