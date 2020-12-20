import { createStyles, Theme } from "@material-ui/core";

export type Createlogin = ("paper" |"avatar"|"Bouton"|"GrisAlign") ;;

const createStylesLogin= (theme: Theme) => createStyles<Createlogin, {}>({
    paper:{
        padding :20,
        height:'70vh',
        width:280, 
        margin:"20px auto"
    },
    avatar: {
        backgroundColor:'#1bbd7e'
      },
      Bouton: {
        margin:'8px 0',
      },
      GrisAlign:{
          textAlign:'center',
      }
});

export default  createStylesLogin