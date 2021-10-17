import { useState } from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
