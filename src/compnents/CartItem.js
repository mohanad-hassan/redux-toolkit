import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button
                    className="remove-btn"
                    onClick={() => {
                        console.log("removeItem");
                    }}
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    className="amount-btn"
                    onClick={() => {
                        console.log("increase");
                    }}
                >
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="amount-btn"
                    onClick={() => {
                        if (amount === 1) {
                            console.log("removeItem");
                            return;
                        }
                        console.log("decrease");
                    }}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};
export default CartItem;
