import "./sign-in-sign-up-page.scss";
import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/sign-up";
const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
