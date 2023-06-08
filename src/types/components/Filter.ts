export type Actor = {
    nameRU: string,
    nameEN: string,
    id : number
}

export interface ListActorProps {
    listActor: Actor[]
}


export type Country = {
    id: number,
    nameRU: string,
    nameEN: string
}

export interface CountriesProps {
    countries: Country[]
}

export type Dir = {
    nameRU: string,
    nameEN: string,
    id : number
}

export interface ListDirProps {
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

export interface GenresProps {
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