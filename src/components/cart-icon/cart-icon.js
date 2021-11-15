import "./cart-icon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.reducer";
import { selectCartItemsCount } from "../../redux/cart/cart.reducer";
import { useSelector } from "react-redux";
const CartIcon = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectCartItemsCount(state));
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
