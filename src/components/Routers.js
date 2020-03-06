import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import ViewLogs from "./logs/ViewLogs";
import EditLog from "./logs/EditLog";

const Routers = () => {
  return (
    <Switch>
      <Route exact="true" path="/" component={Home} />
      <Route  path="/editlog" component={EditLog} />
      <Route  path="/viewlogs" component={ViewLogs} />
      {/* <Route exact path="/addlog" component={AddLogs} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/viewemployees" component={ViewEmployee} /> */}
    </Switch>
  );
};

export default Routers;
