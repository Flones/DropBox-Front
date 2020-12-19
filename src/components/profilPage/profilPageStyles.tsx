import { createStyles, Theme } from "@material-ui/core";

export type CreateProfil = ("root") ;

const createStylesProfil= (theme: Theme) => createStyles<CreateProfil, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesProfil