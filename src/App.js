import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import CheckOut from "./pages/Checkout/checkout";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/Sign-in-sign-up/sign-in-sign-up-page";
import { auth } from "./firebase/firebase";
import { createUserProfileDocument } from "./firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onSnapshot } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_USER } from "../src/redux/user/user.reducer";
import { selectCurrentUser } from "./redux/user/user.reducer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51I0JpRC5c0plZ7shmhQDbDcPosLs26WlbGsX6Juznm7IBMLJe4K047SnKzsJ8yLgdJ7ge30uQJj1yu8PohQfQqh400ry1Mcin2"
);
function App() {
  const [clientSecret, setClientSecret] = useState("");

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
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };
  return (
    <div className="App">
      {/* {clientSecret && ( */}
      <Elements stripe={stripePromise}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </Elements>
      {/* )} */}
    </div>
  );
}

export default App;
