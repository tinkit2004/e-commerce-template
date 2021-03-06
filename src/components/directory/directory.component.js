// import { useState } from "react";
import MenItem from "../menu-item/menu-item.compnent";
import { DirectoryMenueContainer } from "./directory.component.style";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.reducer";

const Directory = () => {
  const directoryData = useSelector(selectDirectorySections);

  // const [directoryData, setDirectoryData] = useState([
  //   {
  //     title: "hats",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //     id: 1,
  //     linkUrl: "shop/hats",
  //   },
  //   {
  //     title: "jackets",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //     id: 2,
  //     linkUrl: "shop/jackets",
  //   },
  //   {
  //     title: "sneakers",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //     id: 3,
  //     linkUrl: "shop/sneakers",
  //   },
  //   {
  //     title: "womens",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //     size: "large",
  //     id: 4,
  //     linkUrl: "shop/womens",
  //   },
  //   {
  //     title: "mens",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //     size: "large",
  //     id: 5,
  //     linkUrl: "shop/mens",
  //   },
  // ]);
  return (
    <DirectoryMenueContainer>
      {directoryData.map(({ id, ...otherSectionProps }) => (
        <MenItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenueContainer>
  );
};

export default Directory;
