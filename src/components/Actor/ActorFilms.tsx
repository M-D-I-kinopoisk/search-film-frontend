'use client'

import {Fragment, useState} from 'react'

import styles from './actorFilms.module.scss'

import {funcDeclination} from '@/utils/funcDeclination'
import ActorFilm from '@/components/Actor/ActorFilm/ActorFilm'

const ActorFilms = ({actorFilms}) => {
    const [active, setActive] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const uniqueProfessions = [...new Set(actorFilms?.map(item => item.profession.nameRU))]

    const actorFilmsByProfession = actorFilms.reduce((acc, item) => {
        const {profession} = item
        if (!acc[profession.nameEN]) { // создаем новый ключ в объекте, если его еще нет
            acc[profession.nameEN] = []
        }
        acc[profession.nameEN].push(item) // добавляем фильм в соответствующий ключ
        return acc
    }, {})
    const filmKeys = Object.keys(actorFilmsByProfession)

    return (
        <div className={styles.filmsWrapper}>
            <div className={styles.filmsTitle}>
                <h2>Полная фильмография </h2>
                <div>{funcDeclination(actorFilms.length, ['фильм', 'фильма', 'фильмов'])}</div>
            </div>
            <div className={styles.profList}>
                {uniqueProfessions.map((prof: string, i) => (
                    <Fragment key={i}>
                        <div className={styles.borderProf}></div>
                        <div className={i === active ? styles.active : styles.prof}
                             onClick={() => setActive(i)}>
                            <p>{prof}</p>
                        </div>
                    </Fragment>
                ))}
            </div>
            {uniqueProfessions.map((prof: string, i) => (
                <div key={i}>
                    {i === active &&
                        <div className={styles.films}>
                            {actorFilms.map((item) => (
                                item.profession.nameRU === prof &&
                                <ActorFilm key={item.film.id} item={item}/>
                            ))}
                        </div>}
                </div>))}

            {(actorFilmsByProfession[filmKeys[active]].length) > 5 && (
                <div className={styles.moreFilms}>
                    <button onClick={() => setShowMore(true)}>Показать еще фильмы</button>
                </div>
            )}
        </div>
    )
}

export default ActorFilms
