import { selectCartItems } from "../../redux/cart/cart.reducer";
import { useSelector } from "react-redux";
import { selectCartItemsPriceTotal } from "../../redux/cart/cart.reducer";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import {
  CheckOutPageContainer,
  CheckOutCartContainer,
  CheckOutHeaderContainer,
  HeaderBlockContainer,
} from "./checkout-page-style";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsPriceTotal);
  return (
    <CheckOutPageContainer>
      <CheckOutCartContainer>
        <CheckOutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckOutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CheckOutItem cartItem={cartItem} />
        ))}
        <div className="total">Total: ${total}</div>
      </CheckOutCartContainer>
    </CheckOutPageContainer>
  );
};

export default CheckOut;
