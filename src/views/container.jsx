import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import User from "./user";

const Container = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/users" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
};

export default Container;
