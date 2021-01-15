import { createStyles, makeStyles, Theme } from "@material-ui/core";

export type CreateRegister = ("root"|"BorderPaper" |"paper" |"avatar"|"form"|"submit"|"centerButton" 
|"titleInscription"|"titleConnexion"|"Connexion") ;

const createStylesRegister= (theme: Theme) => createStyles<CreateRegister, {}>({
    root:{
        backgroundColor: 'linear-gradient(.5deg, #1b1b1b, #222, #1b1b1b)',
        borderRadius:'5px'
    },
    BorderPaper:{
      padding :30,
      height:'80vh',
      width:500, 
      margin:"30px auto"
  },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(2),
      },
      submit: {
        margin: theme.spacing(2, 0, 2),
        alignItems:'center'
      },
      centerButton:{
          textAlign: 'center'
      },
      titleInscription:{
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'Lobster, cursive',
        fontSize : '35px',
      },
      titleConnexion:{
        fontWeight: 500,
        fontFamily: 'Lobster, cursive',
        fontSize : '15px',
      },
      Connexion:{
        fontWeight: 500,
        fontFamily: 'Lobster, cursive',
        fontSize : '15px',
        color: 'blue'
      }

});

export default  createStylesRegister

