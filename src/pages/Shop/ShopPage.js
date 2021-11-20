import { Route } from "react-router";
import CollectionsOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../CollectionPage/collectionPage";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
