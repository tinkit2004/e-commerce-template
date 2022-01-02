import { SignInSignUpFormContainer } from "./sign-in-sign-up-styles";
import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/sign-up";
const SignInAndSignUpPage = () => {
  return (
    <SignInSignUpFormContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpFormContainer>
  );
};

export default SignInAndSignUpPage;
