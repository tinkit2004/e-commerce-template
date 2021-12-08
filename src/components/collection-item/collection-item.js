import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cart/cart.reducer";
import {
  BackGroundImage,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
  AddButton,
  CollectionFooterContainer,
} from "./collection-item-style";
const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackGroundImage className="image" imageUrl={imageUrl}></BackGroundImage>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItems(item))}>
        Add To Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
