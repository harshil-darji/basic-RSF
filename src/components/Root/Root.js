import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../store";

const Users = lazy(() => import("../Users"));
const Teachers = lazy(() => import("../Teachers"));

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/teachers" component={Teachers} />
          <Redirect to="/users" />
        </Switch>
      </Suspense>
    </Router>
  </Provider>
);

export default Root;
