import React from "react";
import { Switch, Route } from "react-router-dom";
// import SearchLook from './searchLook';
import SearchProd from "./searchProd";
import SelectProd from "./selectProducts";
import Homepage from "./Homepage/index";
import APIComponent from "./APIComp";
import AvatarTestingPage from "./AvatarTesting/AvatarTestingPage";
import LookTabs from "./CreateLookTabs";
import Vanity from "./Vanity";
// import LogIN from "./LogIN";
// import RegisterU from "./RegisterU";
import Login from "./auth/Login";
import Register from "./auth/Register";

import { Provider } from "react-redux";
import store from "../store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import PrivateRoute from "./private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/Login";
  }
}

const Main = () => (
  <Provider store={store}>
    <Switch>
      <PrivateRoute exact path="/looktabs" component={LookTabs} />
      <Route exact path="/" component={Homepage} />
      <Route path="/searchProd" component={SearchProd} />
      <Route path="/selectProd" component={SelectProd} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      {/* <Route path="/looktabs" component={LookTabs} /> */}
      <Route path="/APIComp" component={APIComponent} />
      <Route path="/avatarTestingPage" component={AvatarTestingPage}></Route>
      <Route path="/vanity" component={Vanity} />
    </Switch>
  </Provider>
);

export default Main;
