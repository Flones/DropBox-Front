import { createStyles, Theme } from "@material-ui/core";

export type CreateRegister = ("root") ;

const createStylesRegister= (theme: Theme) => createStyles<CreateRegister, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesRegister