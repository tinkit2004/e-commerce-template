import CustonButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustonButton>Go To Checkout</CustonButton>
    </div>
  );
};

export default CartDropDown;
