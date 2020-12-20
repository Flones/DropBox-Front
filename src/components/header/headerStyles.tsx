import { createStyles, Theme } from "@material-ui/core";

export type CreateHeader = ("root"| "menuButton" | "title" | "navBar") ;

const createStylesHeader = (theme: Theme) => createStyles<CreateHeader, {}>({
  root: {
    flexGrow: 1,
  },
  navBar:{
    backgroundColor: 'rgb(20, 35, 75)',
    paddingTop: 15,
    paddingBottom: 15,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: 500

  },
});

export default  createStylesHeader