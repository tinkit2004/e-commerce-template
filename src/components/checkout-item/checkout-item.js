
import { useDispatch } from "react-redux";
import { clearCartItems, removeCartItems } from "../../redux/cart/cart.reducer";
import { addItems } from "../../redux/cart/cart.reducer";
import {
  CheckOutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.style";
const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
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
      </QuantityContainer>

      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearCartItems(cartItem))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
