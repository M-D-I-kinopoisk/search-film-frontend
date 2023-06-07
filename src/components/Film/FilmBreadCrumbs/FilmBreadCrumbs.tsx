'use client'

import styles from './filmBreadCrumbs.module.scss'

import Link from 'next/link'

import {FilmBreadCrumbs} from '@/types/components/Film'

const FilmBreadCrumbs = ({name, genres}: FilmBreadCrumbs) => {

    return (
        <ul className={styles.filmNav}>
            <li><Link href={'/'}>Мой иви</Link></li>
            {genres.slice(0, 2).map((genre) => (
                <li className={styles.filmGenres} key={genre.id}>
                    <Link
                    href={`/movies/${genre.nameEN}`}>{genre.nameRU}</Link></li>
            ))}
            <li>{name}</li>
        </ul>
    )
}

export default FilmBreadCrumbs