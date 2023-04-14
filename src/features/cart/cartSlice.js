import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";
const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState()); returns the whole store of redux .
      // thunkAPI.dispatch(openModal());   you can dispatch any thing .
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      //it will pass the error to action.payload 
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

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
    calcuateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease,calcuateTotals } = cartSlice.actions;
export default cartSlice.reducer;
