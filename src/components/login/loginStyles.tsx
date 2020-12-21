import { createStyles, Theme } from "@material-ui/core";

export type Createlogin = ("paper"|"avatar"|"Bouton"|"GrisAlign"|"titleConnexion") ;;

const createStylesLogin= (theme: Theme) => createStyles<Createlogin, {}>({
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
      },
});

export default  createStylesLogin