import Navbar from "./compnents/Navbar";
import CartContainer from "./compnents/CartContainer";

import { useSelector, useDispatch } from "react-redux";

import { calcuateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";
import Modal from "./compnents/Modal";


function App() {
  const dispatch = useDispatch()
const {cartItems,isLoading} = useSelector((store) => store.cart)
const { isOpen } = useSelector((store) => store.modal);
//this useEffect riggers the component to rernder with every change ofd cartItenms so this is bad aproach .
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calcuateTotals());
  }, [cartItems]);


    if (isLoading) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }
  return (
    <main>
{     isOpen&& <Modal />
}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
