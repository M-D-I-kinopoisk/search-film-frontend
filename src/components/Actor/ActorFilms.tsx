'use client'

import {Fragment, useState} from 'react'

import styles from './actorFilms.module.scss'

import {funcDeclination} from '@/utils/funcDeclination'
import ActorFilm from '@/components/Actor/ActorFilm/ActorFilm'

const ActorFilms = ({actorFilms}) => {
    const [active, setActive] = useState(0)
    const [numShownFilms, setNumShownFilms] = useState(7)

    const uniqueProfessions = [...new Set(actorFilms?.map(item => item.profession.nameRU))]
    const uniqueFilms = new Set(actorFilms.map(({film}) => film.nameRU))

    const actorFilmsByProfession = actorFilms.reduce((acc, {profession, ...rest}) => {
        acc[profession.nameEN] = [...acc[profession.nameEN] || [], {profession, ...rest}]
        return acc
    }, {})
    const filmKeys = Object.keys(actorFilmsByProfession)

    return (
        <div className={styles.filmsWrapper}>
            <div className={styles.filmsTitle}>
                <h2>Полная фильмография </h2>
                <div>{funcDeclination(uniqueFilms.size, ['фильм', 'фильма', 'фильмов'])}</div>
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
                            {actorFilmsByProfession[filmKeys[active]].slice(0, numShownFilms).map((item) => (
                                item.profession.nameRU === prof &&
                                <ActorFilm key={item.film.id} item={item}/>
                            ))}
                        </div>}
                </div>))}

            {(actorFilmsByProfession[filmKeys[active]].length > 7 &&
                    numShownFilms < actorFilmsByProfession[filmKeys[active]].length) &&
                <div className={styles.moreFilms}>
                    <button onClick={() => setNumShownFilms(numShownFilms + 7)}>Показать еще 7 фильмов</button>
                </div>
            }
        </div>
    )
}

export default ActorFilms
