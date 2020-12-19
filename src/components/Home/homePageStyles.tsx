import { createStyles, Theme } from "@material-ui/core";

export type CreateHome = ("header" | "appName" | "root" | "messageText") ; 


const createStylesHomePage = (theme: Theme) => createStyles<CreateHome, {}>({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/logo-app.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'black',
    fontSize: 30,
  },
  header: {
    marginTop: '50px',
    borderRadius:'%',
    textAlign: 'center',
    alignItem: 'center',
    marginBottom: 50,
    padding: 15,
    fontSize: 40,
    fontFamily: 'Roboto',
    color: 'white',
    backgroundImage: ' linear-gradient(blue, Lime, DarkSlateGray)'
  },
  appName:{
    color: 'blue',
    fontWeight: 900,
    fontSize: 50
  },

  messageText:{
    textAlign: 'center',
    fontWeight: 400,
    fontFamily: 'Lobster, cursive',
    fontSize : '30px',
  },
  
});

export default  createStylesHomePage

