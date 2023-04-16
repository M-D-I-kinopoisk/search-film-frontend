import React from 'react'

import style from './AwardsList.module.scss'
import AwardsItem from '../AwardsItem/AwardsItem'

const AwardsList: React.FC = () => {
    return (
        <div className={style.awards}>
            <div className={style.awardsTitle}>
                Награды
            </div>
            <div className={style.awardsItems}>
                <AwardsItem />
                <AwardsItem />
            </div>
        </div>
    )
}

export default AwardsList