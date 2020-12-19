import { createStyles, Theme } from "@material-ui/core";

export type CreateErroPage = ("root") ;

const createStylesErrorPage = (theme: Theme) => createStyles<CreateErroPage, {}>({
    root:{
    color: 'blue'

},

});

export default  createStylesErrorPage