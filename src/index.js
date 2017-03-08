import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import LoginContainer from './containers/login';
import Signup from './components/signup/signup'
import Home from './components/home/home'
import About from './components/about/about'
import store from './store/store';
import { browserHistory , Router, Route, IndexRoute, IndexRedirect, Link, IndexLink} from 'react-router'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={LoginContainer}> </Route>
         <Route path="/signup" component={Signup}> </Route>
       <Route path="/home" component={Home}> </Route>
       <Route path="/about" component={About}> </Route>
       
   

    </Router>
    
  </Provider>
  ,
  document.getElementById('root')
);
