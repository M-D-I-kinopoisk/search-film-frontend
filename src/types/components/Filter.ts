export type Actor = {
    nameRU: string,
    nameEN: string
}

export interface ListActor {
    listActor: Actor[]
}


export type Country = {
    id: number,
    nameRU: string,
    nameEN: string
}

export interface Countries {
    countries: Country[]
}

export type Dir = {
    nameRU: string,
    nameEN: string
}

export interface ListDir {
    listDir: Dir[]
}

export interface FilterCategoriesProps {
    className: string
    children
    title: string
    titleEN: string
    filterText?: string[]
    filterTextEN?: string[]
    onClick: () => void
    activePlank: boolean
}

export type Genre = {
    id: number,
    nameRU: string,
    nameEN: string
}

export interface Genres {
    genres: Genre[]
}

export interface FilterFilmsProps {
    genres: Genre[],
    countries: Country[],
    listActor: Actor[],
    listDir: Dir[]
}

export interface FilmsListProps {
    genres: Genre[],
    countries: Country[],
    listActor: Actor[],
    listDir: Dir[],
    searchPar: string
}