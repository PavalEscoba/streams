import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
function pageOne() {
  return <p> pageOne</p>
}

function pageTwo() {
  return <p> pageTwo</p>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>App</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Route exact path="/" component={pageOne}></Route>
              <Route path="/2" component={pageTwo}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
