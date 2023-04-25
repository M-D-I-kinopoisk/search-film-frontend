import React from 'react'

import style from './FilmInfo.module.scss'

type FilmInfoProps = {
}

const FilmInfo: React.FC<FilmInfoProps> = () => {
    return (
        <div className={style.filmInfo}>
            <img src='https://thumbs.dfs.ivi.ru/storage2/contents/6/1/0ceca03c51c3d38f34bdf3fd0dd2c8.jpg/128x196/?q=85' />
            <div className={style.ball}>
                <span>8,9</span>
                <img src='/img/progress.png' />
            </div>
            <div className={style.information}>
                <span>2011, Франция, Драмы</span>
            </div>
            <div className={style.duration}>
                <img src='/img/time.png' />
                <span>112 минут</span>
            </div>
        </div>
    )
}

export default FilmInfo