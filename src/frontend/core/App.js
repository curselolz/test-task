import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PATH } from "frontend/core/configs";

import AppComponent from "frontend/components/App.jsx";

/**
 * app style import
 */
import "antd/dist/antd.css";

const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            path={PATH.HOME.url}
            name={PATH.HOME.name}
            component={AppComponent}
          />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};


export default App
