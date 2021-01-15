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

// pour les msgs d'erreurs'
export const  showErrmsg = (msg: any) => {
    return <div className={classes.errMsg}> {msg} </div>
}

// pour les msgs de succes
export const showSuccessmsg= (msg: any) => {
    return <div className={classes.successMsg}> {msg} </div>
}