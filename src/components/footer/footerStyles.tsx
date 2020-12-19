import { createStyles, Theme } from "@material-ui/core";

export type CreateFooter = ("root") ;

const createStylesFooter = (theme: Theme) => createStyles<CreateFooter, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesFooter
