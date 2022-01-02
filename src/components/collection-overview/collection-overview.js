
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.reducer";
import { CollectionsOverviewContainer } from "./collection-overview-style";
const CollectionsOverview = () => {
  const shopData = useSelector(selectCollectionsForPreview);
  return (
    <CollectionsOverviewContainer>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
