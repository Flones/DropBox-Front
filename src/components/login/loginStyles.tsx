import { createStyles, Theme } from "@material-ui/core";

export type Createlogin = ("root"|"paper"|"avatar"|"Bouton"
|"GrisAlign"|"titleConnexion"|"reseauButton"|"Connexion"
|"titleMessage"|"Motdepasseoublie") ;;

const createStylesLogin= (theme: Theme) => createStyles<Createlogin, {}>({
  root:{
    marginTop:'30px',
  },
    paper:{
        padding :50,
        height:'70vh',
        width:400, 
        margin:"20px auto"
    },
    avatar: {
        backgroundColor:'#1bbd7e',
        textAlign:'center'
      },
      Bouton: {
        margin:'30px 0',
      },
      GrisAlign:{
          textAlign:'center',
      },
      titleConnexion:{
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'Lobster, cursive',
        fontSize : '40px',
        color: "green",
      },
      reseauButton:{
        width: '100%',
        margin: "10px 0",
        fontSize:'14px',
        fontWeight:200,
        textTransform: 'capitalize',
        letterSpacing: '1.3px',
        marginTop: "20px",
        boxShadow: "0 2px 4px #777"

        },
        Connexion:{
          fontWeight: 500,
          fontFamily: 'Lobster, cursive',
          fontSize : '15px',
          color: 'blue'
        },
        Motdepasseoublie:{
          fontWeight: 500,
          fontFamily: 'Lobster, cursive',
          fontSize : '15px',
          color: 'red',
        },
        titleMessage:{
        fontWeight: 500,
        fontFamily: 'Lobster, cursive',
        fontSize : '15px',

        },
});

export default  createStylesLogin