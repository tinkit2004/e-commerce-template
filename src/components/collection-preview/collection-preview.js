import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter(({ id, ...otherItemsProps }, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
