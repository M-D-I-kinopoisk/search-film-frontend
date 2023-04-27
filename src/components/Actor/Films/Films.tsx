import React from 'react'
import FilmItem from '../FilmItem/FilmItem'
import style from './Films.module.scss'

type FilmsProps = {
}

const Films: React.FC<FilmsProps> = () => {
    return (
        <div className={style.films}>
            <div className={style.title}>
                <h2>Полная фильмография </h2>
                <div>18 фильмов</div>
            </div>
            <div className={style.items}>
                {/* тут будет цикл с map со всеми фильмами актера */}
                <FilmItem />
                <FilmItem />
                <FilmItem />
                <FilmItem />
                <FilmItem />
            </div>


        </div>
    )
}

export default Films