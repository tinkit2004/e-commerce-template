import "./collections-overview.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.reducer";
const CollectionsOverview = () => {
  const shopData = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
