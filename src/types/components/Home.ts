
export type Film = {
    rating: number,
    id: string,
    imageName: string

}

export interface FilmsRatingProps {
    ratingFilms: Film[]
}
