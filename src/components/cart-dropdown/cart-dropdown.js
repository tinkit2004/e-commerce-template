import CustonButton from "../custom-button/custom-button";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.reducer";
import CartItem from "../cart-item/cart-item";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import "./cart-dropdown.scss";
import { toggleCartHidden } from "../../redux/cart/cart.reducer";
const CartDropDown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustonButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustonButton>
    </div>
  );
};

export default withRouter(CartDropDown);
