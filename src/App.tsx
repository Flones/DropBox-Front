// import { CssBaseline } from '@material-ui/core';
// import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Header from './components/Header/header';
import HomePage from './components/Home/homePage';
import {BrowserRouter, Route} from 'react-router-dom'
import { Switch } from '@material-ui/core';
import RegistrationPage from './components/Registration/RegistrationPage';


const  App = () => {
  return (    
    <BrowserRouter>
      <Header.Display/>
      <Switch>
        <Route path="/"> <HomePage.Display/> </Route>
        <Route path="/inscription"> <RegistrationPage.Display/> </Route>        
        <Route path="/connexion"> <HomePage.Display/> </Route>        
        <Route path="/motdePasseOublie"> <HomePage.Display/> </Route> 
        <Route path="/Renitialisation"> <HomePage.Display/> </Route>        
        <Route path="/motDePasseOublie"><HomePage.Display/> </Route>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
