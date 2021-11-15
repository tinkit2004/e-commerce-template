import "./collection-item.scss";
import CustonButton from "../custom-button/custom-button";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cart/cart.reducer";
const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustonButton inverted onClick={() => dispatch(addItems(item))}>
        Add To Cart
      </CustonButton>
    </div>
  );
};

export default CollectionItem;
