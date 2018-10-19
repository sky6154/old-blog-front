import React                          from "react";
import ReactDOM                       from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider}                     from "react-redux";

import configureStore from "./redux/store/configureStore";
import rootSagas      from "./redux/sagas";

import App from "./App.js";
import NotFound from "./conatainers/NotFound";

//var injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

//const {store, history} = configureStore({});
const {store} = configureStore({});

store.runSaga(rootSagas);


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));