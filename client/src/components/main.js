import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateLook from './createLook';
// import SearchLook from './searchLook';
import SearchProd from './searchProd';
import Body from './Body/index';
import APIComponent from './APIComp';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Body} />
    <Route path="/createLook" component={CreateLook} />
    {/* <Route path="/searchLook" component={SearchLook} /> */}
    <Route path="/searchProd" component={SearchProd} />
    <Route path="/APIComp" component={APIComponent} />
  </Switch>
)

export default Main;