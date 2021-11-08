import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase";
import { signOut } from "@firebase/auth";
import { selectCurrentUser } from "../../redux/user/user.reducer";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact_us">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() =>
              signOut(auth)
                .then((result) => {})
                .catch((error) => console.log(error))
            }
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
