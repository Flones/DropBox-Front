import { createStyles, Theme } from "@material-ui/core";

export type CreateLostPassword = ("root") ;

const createStylesLostPassword= (theme: Theme) => createStyles<CreateLostPassword, {}>({
    root:{
    color: 'blue'
},

});

export default  createStylesLostPassword
