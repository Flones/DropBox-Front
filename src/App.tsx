import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import AdminPage from './components/adminPage/AdminPage';
import CodePage from './components/codePage/CodePage';
import ErrorPage from './components/errorPage/ErrorPage';
import Forgotpassword from './components/forgotPassword/ForgotPasswordPage';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilPage from './components/profilPage/ProfilPage';
import RegistrationPage from './components/registration/RegistrationPage';
import ResetPasswodPage from './components/resetpassword/ResetPasswordPage';

const  App = () => {
  
  // const auth = useSelector(state => state.auth)

  return (    
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/"> <HomePage.Display/> </Route>
        <Route exact path="/inscription"> <RegistrationPage/> </Route>        
        <Route exact path="/connexion"> <LoginPage/> </Route>        
        <Route exact path="/motdePasseOublie"> <Forgotpassword/> </Route> 
        <Route exact path="/user/reset/:token"> <ResetPasswodPage/> </Route>        
        <Route exact path="/profil"><ProfilPage.Display/> </Route> 
        <Route exact path="/editerCode"> <CodePage.Display/> </Route>         
        <Route exact path="/admin"><AdminPage.Display/> </Route>        
        <Route exact path="/pageErreur"><ErrorPage.Display/> </Route>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
