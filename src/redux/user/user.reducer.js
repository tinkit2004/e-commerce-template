import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    SET_CURRENT_USER: {
      reducer(state, action) {
        state.currentUser = action.payload;
      },
    },
  },
});

// const INITIAL_STATE = {
//   currentUser: null,
// };
// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//       return {
//         ...state,
//         currentUser: action.payload,
//       };

//     default:
//       return state;
//   }
// };
export const { SET_CURRENT_USER } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);
export default userSlice.reducer;
