import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AdminPage from './components/adminPage/adminPage';
import Codepage from './components/codePage/codePage';
import ErrorPage from './components/errorPage/ErrorPage';
import Forgotpassword from './components/ForgotPassword/ForgotPasswordPage';
import Header from './components/Header/header';
import HomePage from './components/Home/homePage';
import LoginPage from './components/Login/LoginPage';
import ProfilPage from './components/profilPage/profilPage';
import RegistrationPage from './components/Registration/RegistrationPage';
import ResetPasswodPage from './components/resetpassword/resetPasswordPage';

const  App = () => {
  return (    
    <BrowserRouter>
      <Header.Display/>
      <Switch>
        <Route path="/"> <HomePage.Display/> </Route>
        <Route path="/inscription"> <RegistrationPage.Display/> </Route>        
        <Route path="/connexion"> <LoginPage.Display/> </Route>        
        <Route path="/motdePasseOublie"> <Forgotpassword.Display/> </Route> 
        <Route path="/renitialisation"> <ResetPasswodPage.Display/> </Route>        
        <Route path="/profil"><ProfilPage.Display/> </Route> 
        <Route path="/editerCode"><Codepage.Display/> </Route>        
        <Route path="/admin"><AdminPage.Display/> </Route>        
        <Route path="/pageErreur"><ErrorPage.Display/> </Route>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
