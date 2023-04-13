import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  isOpen: true,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {state.isOpen=true},
    closeModal: (state) => {state.isOpen = false;},
  },
});

export const {openModal,closeModal} = modal.actions;
export default modal.reducer;
