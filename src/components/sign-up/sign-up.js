import { SignUpFormContainer, SignUpTitle } from "./sign-up-styles";
import FormInput from "../form-input/form-input";
import CustonButton from "../custom-button/custom-button";
import { createUserProfileDocument, auth } from "../../firebase/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = () => {
  const [signUpInfo, setsignUpInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = signUpInfo;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setsignUpInfo((prevSignUpInfo) => {
      return {
        ...prevSignUpInfo,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passowrds don't match");
      return;
    }
    try {
      //Sign Up with Email
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setsignUpInfo({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpFormContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm  Password"
          required
        />
        <CustonButton type="submit">Sign Up</CustonButton>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUp;
