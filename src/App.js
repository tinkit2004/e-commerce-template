import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/Sign-in-sign-up/sign-in-sign-up-page";
import { signInWithGoogle } from "./components/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setCurrentUser(user);
  //       console.log(user);
  //     } else {
  //       console.log("no user");
  //     }
  //   });
  //   return () => {
  //     unsubscribeFromAuth();
  //   };
  // }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div onClick={() => signInWithGoogle()}>Sign In with Google</div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
