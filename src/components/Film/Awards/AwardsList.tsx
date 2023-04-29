import React, { useState } from 'react'

import style from './Awards.module.scss'
import AwardsItem from './AwardsItem'
import MyModal from '../MyModal/MyModal'

type AwardsListProps = {
}

const AwardsList: React.FC<AwardsListProps> = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={style.awards}>
            <div className={style.awardsTitle}>Награды</div>

            <div
                className={style.awardsItems}
                onClick={() => setIsVisible(true)}
            >
                <AwardsItem />
                <AwardsItem />
            </div>

            <MyModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                componentName={'awards'}
            />
        </div>
    )
}

export default AwardsList