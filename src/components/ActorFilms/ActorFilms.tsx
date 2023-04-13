import React from 'react'
import ActorFilmItem from '../ActorFilmItem/ActorFilmItem'
import style from './ActorFilms.module.scss'

type ActorFilmsProps = {
}

const ActorFilms: React.FC<ActorFilmsProps> = () => {
    return (
        <div className={style.films}>
            {/* тут будет цикл с map со всеми фильмами актера */}

            <ActorFilmItem />
        </div>
    )
}

export default ActorFilms