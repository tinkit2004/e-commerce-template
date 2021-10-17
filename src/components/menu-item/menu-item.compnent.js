import "./menu-item.styles.scss";
import { useHistory, useRouteMatch } from "react-router";
const MenItem = ({ title, imageUrl, size, linkUrl }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(url + linkUrl)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenItem;
