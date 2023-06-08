'use client'

import styles from './actorFilm.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import {ActorFilmProps} from '@/types/components/Actor'

const ActorFilm = ({item}: ActorFilmProps) => {

    return (
        <Link href={`/film/${item.film.id}`} className={styles.film}>
            <div className={styles.filmImg}>
                {item.film.imageName === null ?
                    <Image src={'/img/static-filmImage.jpg'}
                           width={80}
                           height={122}
                           alt='alt'/>
                    :
                    <Image alt='Фильм'
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