import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header-styles";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase";
import { signOut } from "@firebase/auth";
import { selectCurrentUser } from "../../redux/user/user.reducer";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCartDropDownHiddenStatus } from "../../redux/cart/cart.reducer";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartDropDownHiddenStatus);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact_us">Contact</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() =>
              signOut(auth)
                .then((result) => {})
                .catch((error) => console.log(error))
            }
          >
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

export default Header;
