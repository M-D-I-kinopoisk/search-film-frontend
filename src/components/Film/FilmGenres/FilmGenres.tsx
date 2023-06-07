'use client'

import styles from './filmGenres.module.scss'
import Link from 'next/link'
import {useLocale} from 'next-intl'

import {FilmGenres} from '@/types/components/Film'

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