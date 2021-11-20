import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import SHOP_DATA from "./Shop_Data";
import memoize from "lodash.memoize";
const shopSlice = createSlice({
  name: "shop",
  initialState: { collections: SHOP_DATA },
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      return;
    });
  },
});
const Collection_ID_Map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  mens: 5,
};
export const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  selectCollections,
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = memoize((collectionUrlParams) =>
  createSelector(
    selectCollections,
    (collections) => collections[collectionUrlParams]
  )
);
export default shopSlice.reducer;
