import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Test from "../screens/Test";
import Notfound from "../screens/Notfound";
import Blog from "../screens/Blog";
import Bible from "../screens/Bible";
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={Test} />
      <Route path="/blog" component={Blog} />
      <Route path="/bible" component={Bible} />
      <Route path="*" component={Notfound} />
    </Switch>
  </main>
);

export default Routes;
