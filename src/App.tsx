import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import RegistrationPage from './components/registration/RegistrationPage';
import Forgotpassword from './components/forgotPassword/ForgotPasswordPage';
import LoginPage from './components/login/LoginPage';
import ResetPasswodPage from './components/resetpassword/ResetPasswordPage';
import ProfilPage from './components/profilPage/ProfilPage';
import Codepage from './components/codePage/CodePage';
import AdminPage from './components/adminPage/AdminPage';
import ErrorPage from './components/errorPage/ErrorPage';


const  App = () => {
  return (    
    <div className="app">
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
    </div>
  );
}

export default App;
