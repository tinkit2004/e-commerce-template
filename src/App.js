import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/Sign-in-sign-up/sign-in-sign-up-page";
import { auth } from "./firebase/firebase";
import { createUserProfileDocument } from "./firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onSnapshot } from "@firebase/firestore";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
        console.log(currentUser);
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
