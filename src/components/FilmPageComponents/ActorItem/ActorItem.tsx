import React from 'react'

import style from './ActorItem.module.scss'
import Image from 'next/image'

const ActorItem: React.FC = () => {
    return (
        <div className={style.actor}>
            <div className={style.itemWrapper}>
                <div className={style.img}>
                    <Image
                        alt='фильм'
                        width={42}
                        height={42}
                        src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85'
                    />
                </div>
            </div>
            <div className={style.name}>
                Франсуа Клюзе
            </div>
        </div>
    )
}

export default ActorItem