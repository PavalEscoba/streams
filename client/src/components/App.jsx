import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header.jsx";
import history from "../history";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>App</h1>
          </div>
        </div>
        <Router history={history}>
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <Switch>
              <Route exact path="/" component={StreamList}></Route>
              <Route path="/streams/new" component={StreamCreate}></Route>
              <Route path="/streams/edit/:id" component={StreamEdit}></Route>
              <Route path="/streams/delete/:id" component={StreamDelete}></Route>
              <Route path="/streams/:id" component={StreamShow}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
