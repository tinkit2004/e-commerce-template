
import { SignInContainer, SignInButtonContainer } from "./sign-in-styles";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustonButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/firebase";
const SignIn = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserState((prevUserState) => {
      return {
        ...prevUserState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userState;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          required
          value={userState.email}
          label="Email"
        />

        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          required
          value={userState.password}
          label="Password"
        />
        <SignInButtonContainer>
          <CustonButton type="submit" onClick={handleSubmit}>
            Sign In
          </CustonButton>
          <CustonButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustonButton>
        </SignInButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
