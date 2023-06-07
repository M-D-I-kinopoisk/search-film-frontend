export type Film = {
    film: {
        year: number,
        nameRU: string,
        rating: number,
        imageName: string,
        id: string
    },
    profession: {
        nameRU: string,
        nameEN: string
    }
}

export interface ActorFilmProps {
    item: Film
}


export interface actorFilmsProps {
    actorFilms: Film[]
}
