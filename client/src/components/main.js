import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateLook from "./createLook";
import SearchLook from "./searchLook";
import SearchProd from "./searchProd";
import Introduction from "./intro";
import createLookApi from "./components/createLook";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Introduction} />
    <Route path="/createLook" component={CreateLook} />
    <Route path="/searchLook" component={SearchLook} />
    <Route path="/searchProd" component={SearchProd} />
    <Route exact path="/createlook" component={createLookApi} />
  </Switch>
);

export default Main;
