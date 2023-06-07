'use client'

import styles from './filmGenres.module.scss'
import Link from 'next/link'
import {useLocale} from 'next-intl'

type Genre = {
    id: string,
    nameRU: string,
    nameEN: string
}

interface FilmGenres {
    genres: Genre[]
}

const FilmGenres = ({genres}: FilmGenres) => {

    const locale = useLocale()

    return (
        <ul className={styles.genres}>
            {genres.map((genre) => (
                <li key={genre.id}>
                    <Link href={`/movies/${genre.nameEN}`}>
                        {locale === 'ru' ? genre.nameRU : genre.nameEN}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default FilmGenres