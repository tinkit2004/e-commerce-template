import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.reducer";
import { selectCartItemsCount } from "../../redux/cart/cart.reducer";
import { useSelector } from "react-redux";
import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCountContainer,
} from "./cart-icon-style";
const CartIcon = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectCartItemsCount(state));
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCartIcon />
      <ItemCountContainer>{count}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
