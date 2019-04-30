
import dotenv from 'dotenv'
dotenv.config();

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import configureStore from './redux/configureStore';
import "./App.css";
import 'normalize.css';

import Dashboard from './Dashboard';
import Navbar from './Navbar';
import SignIn from './SignIn';

//const store = configureStore();

class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
  }
  
  render() 
  {
    return (
      <Router> 
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;