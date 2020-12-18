// import { CssBaseline } from '@material-ui/core';
// import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Header from './components/Header/header';
import HomePage from './components/Home/homePage';
import {BrowserRouter, Router} from 'react-router-dom'
import { Switch } from '@material-ui/core';


const  App = () => {
  return (
    <div className="App">
      <Header.Display/>
      <BrowserRouter>
      <Switch>
      <HomePage.Display/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
