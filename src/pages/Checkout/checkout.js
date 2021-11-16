import { selectCartItems } from "../../redux/cart/cart.reducer";
import { useSelector } from "react-redux";
import { selectCartItemsPriceTotal } from "../../redux/cart/cart.reducer";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import "./checkout.scss";
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsPriceTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default CheckOut;
