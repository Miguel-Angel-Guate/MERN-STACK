import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register'
import Home from './containers/user/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home}  exact />
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
