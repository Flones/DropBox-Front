import { createStyles, Theme } from "@material-ui/core";

export type CreateHeader = ("headerBar"| "lienNav") ;

const createStylesHeader = (theme: Theme) => createStyles<CreateHeader, {}>({
  headerBar:{
    display: 'flex',
    padding: '0 24px',
    minHeight: '64px',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50

},
lienNav:{
  display: 'flex',
  textDecoration: 'none', 
  justifyContent: 'space-between',
  marginLeft: 50 ,
  padding: 30
},

});

export default  createStylesHeader