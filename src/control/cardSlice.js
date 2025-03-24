import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  quantity: 0,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardItems: (state, action) => {
      state.cardItems = action.payload.map((item) => ({
        ...item,
        selected: false,
      }));
    },
    toggleCardItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cardItems.find(
        (item) => item.productCategoryID === itemId
      );

      if (item) {
        item.selected = !item.selected;
        state.quantity += item.selected ? 1 : -1;
      }
    },
  },
});

export const { setCardItems, toggleCardItem } = cardSlice.actions;

export default cardSlice.reducer;
