import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.reducer";
import CartItem from "../cart-item/cart-item";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.reducer";
import {
  CartDropDownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropDownButton,
} from "./cart-dropdown-style";
const CartDropDown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropDownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CartDropDownButton>
    </CartDropDownContainer>
  );
};

export default withRouter(CartDropDown);
