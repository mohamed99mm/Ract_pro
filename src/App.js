
import React, { Component }  from 'react';
import { StrictMode } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from './BlogDetails';
function App() {

  //const person = {name: "yoshi" , age: 30};
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
