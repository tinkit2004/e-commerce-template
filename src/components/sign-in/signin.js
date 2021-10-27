import "./signin.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustonButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../firebase/firebase";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserState({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onClick={handleSubmit}>
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
        <CustonButton type="submit">Sign In</CustonButton>
      </form>
      <div onClick={() => signInWithGoogle()}>Sign In with Google</div>
    </div>
  );
};

export default SignIn;
