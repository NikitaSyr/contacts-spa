export type UserType = {
    id : number
    login : string
    email : string
    password : string
    isAuth: boolean
}

export type LogInFormType = {
    email : string
    password : string
}

export type ContactType = {
    contactId : number
    name : string
    surname : string
    image : string
    phone : number
}