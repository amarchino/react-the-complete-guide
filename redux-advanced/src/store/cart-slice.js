import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find(item => item.id === newItem.id);
      if(!existingItem) {
        state.items.push({ itemId: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
    },
    removeItemFromCart() {

    }
  }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
