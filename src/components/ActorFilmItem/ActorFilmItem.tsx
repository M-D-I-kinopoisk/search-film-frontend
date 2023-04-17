import React from 'react'
import style from './ActorFilmItem.module.scss'

type ActorFilmItemProps = {
}

const ActorFilmItem: React.FC<ActorFilmItemProps> = () => {
    return (
        <div className={style.item}>
            <div>
                <img
                    src='https://thumbs.dfs.ivi.ru/storage38/contents/0/0/55c8a2551297804e709c65c9b4ecc0.jpg/172x264/?q=85' />
            </div>

            <div className={style.info}>
                <div className={style.wrapper}>
                    <div>2020</div>
                    <div>Поли</div>
                    <div>Рейтинг Иви: 8,3</div>
                </div>

                <div className={style.look}>
                    <a> Смотреть </a>
                </div>
            </div>
        </div>
    )
}

export default ActorFilmItem