import "./cart-icon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.reducer";
const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
