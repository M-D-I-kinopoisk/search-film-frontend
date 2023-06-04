export interface User {
    idUser? : number | null | undefined
    role? : {
        id? : number
        name? : string
        description? : string
        createdAt? : string
        updatedAt? : string
    }
    token? : string
}

// {
//     "idUser": 5,
//     "role": {
//     "id": 2,
//         "name": "USER",
//         "description": "обычный пользователь",
//         "createdAt": "2023-06-03T18:17:07.268Z",
//         "updatedAt": "2023-06-03T18:17:07.268Z"
// },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5ydSIsImlkIjo1LCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiVVNFUiIsImRlc2NyaXB0aW9uIjoi0L7QsdGL0YfQvdGL0Lkg0L_QvtC70YzQt9C-0LLQsNGC0LXQu9GMIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wM1QxODoxNzowNy4yNjhaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wM1QxODoxNzowNy4yNjhaIn0sImlhdCI6MTY4NTg2MjMxNiwiZXhwIjoxNjg1OTQ4NzE2fQ.DshAjOyipNR3uTpuCyxA4LpeYSEDc1PyXMk9EhWlDbE"
// }