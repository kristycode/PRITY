import React from "react";
import { Switch, Route } from "react-router-dom";
// import SearchLook from './searchLook';
import SearchProd from "./searchProd";
import SelectProd from "./selectProducts";
import Body from "./Body/index";
import APIComponent from "./APIComp";
import AvatarTestingPage from "./AvatarTesting/AvatarTestingPage";
import LookTabs from "./NewCreateLook";
import Vanity from "./Vanity";
import LogIN from "./LogIN";
import RegisterU from "./RegisterU";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Body} />
    <Route path="/searchProd" component={SearchProd} />
    <Route path="/selectProd" component={SelectProd} />
    <Route exact path="/LogIN" component={LogIN} />
    <Route exact path="/RegisterU" component={RegisterU} />
    <Route path="/looktabs" component={LookTabs} />
    <Route path="/APIComp" component={APIComponent} />
    <Route path="/avatarTestingPage">
      <AvatarTestingPage eyes="blue" blush="orange" />
    </Route>
    <Route path="/vanity" component={Vanity} />
  </Switch>
);

export default Main;
