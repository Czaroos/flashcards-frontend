import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Dashboard from "./dashboard";
import DeckDashboard from "./deck-dashboard";
import LearningGame from "./learning-game";

const ModulesRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/:userId" component={Dashboard} />
      <Route exact path="/decks/:deckId" component={DeckDashboard} />
      <Route exact path="/decks/:deckId/play" component={LearningGame} />
      <Route path="**" render={() => <div>Not Found Page</div>} />
    </Switch>
  );
};

export default ModulesRouter;
