import CustonButton from "../custom-button/custom-button";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.reducer";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";
const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustonButton>Go To Checkout</CustonButton>
    </div>
  );
};

export default CartDropDown;
