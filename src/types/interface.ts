export interface User {
    idUser? : number | null | undefined
    message? : string
    name? : string
    role? : {
        id? : number
        name? : string
        description? : string
        createdAt? : string
        updatedAt? : string
    }
    token? : string
}

