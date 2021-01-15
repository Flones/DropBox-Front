import React, { useEffect, useState } from 'react';
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
import useLocalStorage from './hooks/useLocalStorage';

const  App = () => {
  
  // pour éditer le code
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [php, setPhp] = useLocalStorage('php', '')
  const [xml, setXml] = useLocalStorage('xml', '')
  const [sql, setSql] = useLocalStorage('sql', '')

  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  

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
        <Route exact path="/editerCode">
          <div className="pane">
          <CodePage language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}/>

          <CodePage language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}/>
            
          <CodePage language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}/>
          </div>

            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />

          <div className="paneCOde2">
          <CodePage language="php"
          displayName="PHP"
          value={php}
          onChange={setPhp}/>

          <CodePage language="xml"
          displayName="XML"
          value={xml}
          onChange={setXml}/>

          <CodePage language="sql"
          displayName="SQL"
          value={sql}
          onChange={setSql}/>
          </div>
        </Route>         
        <Route exact path="/admin"><AdminPage.Display/> </Route>        
        <Route exact path="/pageErreur"><ErrorPage.Display/> </Route>        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
