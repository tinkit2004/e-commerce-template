import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/Sign-in-sign-up/sign-in-sign-up-page";
import { auth } from "./firebase/firebase";
import { createUserProfileDocument } from "./firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onSnapshot } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_USER } from "../src/redux/user/user.reducer";
import { selectCurrentUser } from "./redux/user/user.reducer";
function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          dispatch(SET_CURRENT_USER({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(SET_CURRENT_USER(userAuth));
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
