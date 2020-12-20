import { createStyles, Theme } from "@material-ui/core";

export type CreateRestpass = ("root") ;

const createStylesRestPass= (theme: Theme) => createStyles<CreateRestpass, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesRestPass