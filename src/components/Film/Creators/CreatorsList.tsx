import React, { useState } from 'react'

import style from './Creators.module.scss'
import MyModal from '../MyModal/MyModal'
import CreatorsItem from './CreatorsItem'

const CreatorsList: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

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

                <div
                    onClick={() => setIsVisible(true)}
                    className={style.moreCreatorsBtn}
                >
                    Еще
                </div>

            </div>

            <MyModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                componentName={'creators'}
            />
        </div>
    )
}

export default CreatorsList