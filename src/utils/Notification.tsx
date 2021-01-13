import { makeStyles } from '@material-ui/core'
import React from 'react'

const stylesNotification = makeStyles({
    errMsg:{
        background: 'rgb(214, 10, 10)',
        color: '#fff9',
        textAlign: 'center',
        padding: '10px 0',
        letterSpacing: '1.3px'

    },
    successMsg:{
        background: 'rgb(214, 10, 10)',
        color: '#fff9',
        textAlign: 'center',
        padding: '10px 0',
        letterSpacing: '1.3px'
    },

})

const classes = stylesNotification()


// pour les messages d'erreurs'
export const  showErrMessage = (message: any) => {
    return <div className={classes.errMsg}> {message} </div>
}

// pour les messages de succes
export const showSuccessMessage= (message: any) => {
    return <div className={classes.successMsg}> {message} </div>
}