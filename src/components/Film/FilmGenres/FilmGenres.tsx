'use client'

import styles from './filmGenres.module.scss'
import Link from 'next/link'

type Genre = {
    id: string,
    nameRU: string,
    nameEN: string
}

interface FilmGenres {
    genres: Genre[]
}

const FilmGenres = ({genres}: FilmGenres) => {

    return (
        <ul className={styles.genres}>
            {genres.map((genre) => (
                <li key={genre.id}>
                    <Link href={`/movies/${genre.nameEN}`}>
                        {genre.nameRU}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default FilmGenres