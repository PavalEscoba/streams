import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./header.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BrowserRouter>
              <Header />
              <Route exact path="/" component={StreamList}></Route>
              <Route path="/streams/new" component={StreamCreate}></Route>
              <Route path="/streams/edit" component={StreamEdit}></Route>
              <Route path="/streams/delete" component={StreamDelete}></Route>
              <Route path="/streams/show" component={StreamShow}></Route>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
