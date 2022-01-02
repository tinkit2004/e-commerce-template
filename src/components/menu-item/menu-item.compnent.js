import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
} from "./menu-item-styles";
import { useHistory, useRouteMatch } from "react-router";
const MenItem = ({ title, imageUrl, size, linkUrl }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <MenuItemContainer size={size} onClick={() => history.push(url + linkUrl)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle>Shop Now</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenItem;
