import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increase: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id == id;
      });
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id == id;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    calcuateTotals :(state) => { 
      let total=0 ;
      let amount=0 ;
state.cartItems.forEach((item) => { 

  amount+= item.amount
  total+= item.amount * item.price

 })
state.total=total
state.amount= amount
     }
  },
});

export const { clearCart, removeItem, increase, decrease,calcuateTotals } = cartSlice.actions;
export default cartSlice.reducer;
