import { createStyles, Theme } from "@material-ui/core";

export type CreateAdmin = ("root") ;

const createStylesAdmin= (theme: Theme) => createStyles<CreateAdmin, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesAdmin