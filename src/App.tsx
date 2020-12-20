import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import AdminPage from './components/adminPage/AdminPage';
import CodePage from './components/codePage/CodePage';
import ErrorPage from './components/errorPage/ErrorPage';
import Forgotpassword from './components/forgotPassword/ForgotPasswordPage';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import ProfilPage from './components/profilPage/ProfilPage';
import RegistrationPage from './components/registration/RegistrationPage';
import ResetPasswodPage from './components/resetpassword/ResetPasswordPage';

const  App = () => {
  // exact est par défaut à true et permet de définir la condition pour la page en question
  return (    
    <BrowserRouter>
      <Header.Display/>
      <Switch>
        <Route exact path="/"> <HomePage.Display/> </Route>
        <Route path="/inscription"> <RegistrationPage.Display/> </Route>        
        <Route path="/connexion"> <LoginPage.Display/> </Route>        
        <Route path="/motdePasseOublie"> <Forgotpassword.Display/> </Route> 
        <Route path="/renitialisation"> <ResetPasswodPage.Display/> </Route>        
        <Route path="/profil"><ProfilPage.Display/> </Route> 
        <Route path="/editerCode"> <CodePage.Display/> </Route>        
        <Route path="/admin"><AdminPage.Display/> </Route>        
        <Route path="/pageErreur"><ErrorPage.Display/> </Route>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
