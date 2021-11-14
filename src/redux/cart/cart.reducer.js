import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
  },
  reducers: {
    toggleCartHidden(state, action) {
      state.hidden = !state.hidden;
    },
  },
});
export const { toggleCartHidden } = cartSlice.actions;
export const selectCartDropDownHiddenStatus = (state) => state.cart.hidden;
export default cartSlice.reducer;
