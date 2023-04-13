import React from 'react'
import style from './ActorInfo.module.scss'

type ActorInfoProps = {
}

const ActorInfo: React.FC<ActorInfoProps> = () => {
    return (
        <div>
            <div className={style.img}>
                <img src="https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/120x144/?q=85" />
            </div>

            <h2 className={style.name}>
                Франсуа Клюзе
            </h2>

            <div className={style.nation}>
                François Cluzet
            </div>

            <div className={style.info}>
                <p>
                    Франсуа Клюзе (фр. François Cluzet) - французский актер театра, телевидения и кино.
                    Родился
                    21 сентября 1955 г. в...
                </p>
                <a href="">Развернуть</a>
            </div>
        </div>
    )
}

export default ActorInfo