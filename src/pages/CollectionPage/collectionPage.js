import { selectCollection } from "../../redux/shop/shop.reducer";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collectionPage-styles";
const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  console.log(collection);
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
