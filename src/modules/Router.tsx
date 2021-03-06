import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Dashboard from "./dashboard";
import DeckDashboard from "./deck-dashboard";
import LearningGame from "./learning-game";
import Share from "./share";
import { NoPage } from "@components";

const ModulesRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/decks/:deckId" component={DeckDashboard} />
      <Route exact path="/decks/:deckId/play" component={LearningGame} />
      <Route exact path="/decks/:deckId/share/:token" component={Share} />
      <Route exact path="**" component={NoPage} />
    </Switch>
  );
};

export default ModulesRouter;
