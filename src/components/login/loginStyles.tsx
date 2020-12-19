import { createStyles, Theme } from "@material-ui/core";

export type Createlogin = ("root") ;

const createStylesLogin= (theme: Theme) => createStyles<Createlogin, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesLogin