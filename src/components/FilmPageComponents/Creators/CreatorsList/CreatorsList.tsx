import React from 'react'

import style from './CreatorsList.module.scss'
import CreatorsItem from '../CreatorsItem/CreatorsItem'

const CreatorsList: React.FC = () => {
    return (
        <div className={style.creators}>
            <div className={style.creatorsTitle}>
                Актёры и создатели
            </div>
            <div className={style.creatorsItems}>
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />

                <div className={style.moreCreatorsBtn}>
                    Еще
                </div>
            </div>

        </div>
    )
}

export default CreatorsList