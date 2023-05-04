import React, { useState } from 'react'

import style from './Trailers.module.scss'
import TrailersItem from './TrailersItem'
import MyModal from '../MyModal/MyModal'

const TrailersList: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={style.addMaterials}>
            <div className={style.addMaterialsTitle}>
                <a >Трейлеры</a> и доп. материалы
            </div>

            <div
                className={style.addMaterialsItems}
                onClick={() => setIsVisible(true)}
            >
                <TrailersItem />
                <TrailersItem />
                <TrailersItem />
            </div>

            <MyModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                componentName={'trailers'}
            />
        </div>
    )
}

export default TrailersList