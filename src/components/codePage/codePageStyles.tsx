import { createStyles, Theme } from "@material-ui/core";

export type CreateCodePage= ("root") ;

const createStylesCodePage= (theme: Theme) => createStyles<CreateCodePage, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesCodePage