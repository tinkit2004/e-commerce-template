import "./checkout-item.scss";
import { useDispatch } from "react-redux";
import { clearCartItems, removeCartItems } from "../../redux/cart/cart.reducer";
import { addItems } from "../../redux/cart/cart.reducer";
const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeCartItems(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItems(cartItem))}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearCartItems(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
