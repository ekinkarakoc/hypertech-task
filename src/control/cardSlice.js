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
      const newItems = action.payload;

      state.cardItems = newItems.map((newItem) => {
        const existing = state.cardItems.find(
          (item) => item.productID === newItem.productID
        );
        return {
          ...newItem,
          selected: existing ? existing.selected : false,
        };
      });
    },
    toggleCardItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cardItems.find((item) => item.productID === itemId);

      if (item) {
        item.selected = !item.selected;
        state.quantity += item.selected ? 1 : -1;
      }
    },
    clearSelectedItems: (state) => {
      state.cardItems = state.cardItems.map((item) => ({
        ...item,
        selected: false,
      }));
      state.quantity = 0;
    },
  },
});

export const { setCardItems, toggleCardItem, clearSelectedItems } =
  cardSlice.actions;

export default cardSlice.reducer;
