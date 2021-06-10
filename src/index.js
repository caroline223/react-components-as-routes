import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Messages from './Messages'
import SignUp from './SignUp'
import Navbar from './Navbar'
//import react-router functions

import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

//Add basic styling for NavLinks


//Add the navbar component
  

//Changer to have router coordinate what is displayed

ReactDOM.render(
  (<Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);


