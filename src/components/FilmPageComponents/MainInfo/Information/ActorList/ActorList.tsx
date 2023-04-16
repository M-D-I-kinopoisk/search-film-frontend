import React from 'react'

import style from './ActorList.module.scss'
import ActorItem from '../ActorItem/ActorItem'

const ActorList: React.FC = () => {
    return (
        <div className={style.actors}>
            <div className={style.actor}>
                <div className={style.itemWrapper}>
                    <div>
                        <h3> 8,9</h3>
                    </div>
                </div>
                <div className={style.rating}>
                    Рейтинг Иви
                </div>
            </div>
            <ActorItem/>
            <ActorItem/>
            <ActorItem/>
            <ActorItem/>
        </div>
    )
}

export default ActorList