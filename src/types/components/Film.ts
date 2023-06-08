export interface FilmBreadCrumbs {
    name: string,
    genres:
        {
            id: number,
            nameRU: string,
            nameEN: string
        }[]
}

export type Comment = {
    id: number,
    idFilm: number,
    idUser: number,
    prevId: number,
    childrenCount: number,
    profile: {
        profileName: string
    },
    createdAt: string,
    text: string,
    title: string
}

export interface Comments {
    id: string,
    filmComments: Comment[]
}

export interface CommentsItemProps {
    inModal?: any,
    comment: Comment
}

export interface CreatorsItemProps {
    actor: Actor,
    inModal: boolean
}

export type Actor = {
    member: {
        id: number,
        nameEN: string,
        nameRU: string,
        imageName: string
    },
    profession: {
        nameRU: string,
        nameEN: string

    },
    id: string
}

export interface CreatorsProps {
    actors: Actor[]
    id: string
}

export type Genre = {
    id: string,
    nameRU: string,
    nameEN: string
}

export interface IFilmGenres {
    genres: Genre[]
}

export interface FilmProps {
    film: Film
}

export type Film = {
    id: number,
    year: number,
    rating: number,
    ageRating: string,
    duration: number,
    nameRU: string,
    nameEN: string,
    countRating: number,
    imageName: string,
    country: {
        nameRU: string
        nameEN: string
    },
    genres: {
        id: string,
        nameRU: string,
        nameEN: string
    }[]
}

export type FilmInfo = {
    trailerLink: string,
    text: string
}

export interface infoContentProps {
    filmInfo: FilmInfo,
    film: Film,
    actors: Actor[]
}

export interface FilmInfoProps {
    filmInfo: FilmInfo,
    film: Film
}

export interface FilmModalCommentItem {
    comment: Comment
}

export interface FilmModalCommentProps {
    inModal: boolean,
    comment: Comment
}

export interface FilmModalCreators {
    actor: Actor,
    inModal?: boolean,
}

export interface FilmModalTrailerProps {
    inModal?: boolean,
    filmInfo: FilmInfo
}

export interface FilmModalProps {
    actors: Actor[],
    filmInfo: FilmInfo,
    filmComments: Comment[],
    film: Film,
    id: string
}


export interface TrailersItemProps {
    inModal?: any,
    filmInfo: FilmInfo
}


export interface FilmTrailersState {
    filmInfo: FilmInfo,
    id: string
}


export interface AllDevices {
    film: Film
}