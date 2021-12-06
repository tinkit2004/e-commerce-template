import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartItemNameContainer,
} from "./cart-item-style";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <CartItemNameContainer>{name}</CartItemNameContainer>
        <span className="price">
          {quantity}x{price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
