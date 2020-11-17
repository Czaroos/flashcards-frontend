import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Dashboard from "./dashboard";

const ModulesRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/:userId" component={Dashboard} />
      <Route path="**" render={() => <div>Not Found Page</div>} />
    </Switch>
  );
};

export default ModulesRouter;
