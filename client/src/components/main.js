import React from "react";
import { Switch, Route } from "react-router-dom";

// import SearchLook from './searchLook';
import SearchProd from './searchProd';
import Body from './Body/index';
import APIComponent from './APIComp';
import CreateLookApi from "./createLook";
import AvatarTestingPage from "./AvatarTesting/AvatarTestingPage"


const Main = () => (
  <Switch>
    <Route exact path="/" component={Body} />
    {/* <Route path="/searchLook" component={SearchLook} /> */}
    <Route path="/searchProd" component={SearchProd} />
    <Route exact path="/createlook" component={CreateLookApi} />
    <Route path="/APIComp" component={APIComponent} />
    <Route path="/avatarTestingPage" component={AvatarTestingPage} />

  </Switch>
);

export default Main;