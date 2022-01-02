import { CustomButtonContainer } from "./custom-button-styles";
const CustonButton = ({
  children,

  ...otherProps
}) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustonButton;
