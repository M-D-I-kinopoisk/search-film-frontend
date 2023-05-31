'use client'

import {useState} from 'react'

import styles from './actorFilm.module.scss'

import Image from 'next/image'
import Link from 'next/link'

type Film = {
    film: {
        year: number,
        nameRU: string,
        rating: number,
        imageName: string,
        id: string
    }
}

interface ActorFilm {
    item: Film
}

const ActorFilm = ({item}: ActorFilm) => {
    const [isAltUsed, setIsAltUsed] = useState(false)
    const onError = (event) => {
        if (!event.target.alt) {
            setIsAltUsed(false)
        } else {
            setIsAltUsed(true)
        }
    }

    return (
        <Link href={`/film/${item.film.id}`} className={styles.film}>
            <div className={styles.filmImg}>
                {isAltUsed ?
                    <Image src={'/img/static-filmImage.jpg'}
                           width={80}
                           height={122}
                           alt='болванка'/>
                    :
                    <Image onError={(event) => onError(event)}
                           alt='Фильм'
                           width={80}
                           height={122}
                           src={`http://localhost:12120/api/films/images/${item.film.imageName}`}/>}
            </div>
            <div className={styles.filmInfo}>
                <div className={styles.filmInfoContainer}>
                    <div>{item.film.year}</div>
                    <div>{item.film.nameRU}</div>
                    <div>Рейтинг Иви: {item.film.rating.toFixed(1)}</div>
                </div>

                <div className={styles.lookFilm}>
                    <div>Смотреть</div>
                </div>
            </div>
        </Link>
    )
}

export default ActorFilm