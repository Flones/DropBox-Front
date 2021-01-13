

// Vérifier que les champs ne sont pas vides
export const isEmpty = (value:any) => {
    if(!value) return true
    return false
}

// Vérifier que c'est un adresse email valide
export const isEmail = (email: string) => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Vérifier la longueur du mot de passe
export const isLength = (password:any) => {
    if(password.length < 4) return true
    return false
}

// Vérifier que les 2 mots de passe sont identiques
export const isMatch = (password: string, cf_password:string) => {
    if(password === cf_password) return true
    return false
}