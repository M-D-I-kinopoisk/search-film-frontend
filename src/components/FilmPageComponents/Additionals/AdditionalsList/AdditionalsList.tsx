import React from 'react'

import style from './AdditionalsList.module.scss'
import AdditionalsItem from '../AdditionalsItem/AdditionalsItem'

const AdditionalsList: React.FC = () => {
    return (
        <div className={style.addMaterials}>
            <div className={style.addMaterialsTitle}>
                <a >Трейлеры</a> и доп. материалы
            </div>
            <div className={style.addMaterialsItems}>
                <AdditionalsItem/>
                <AdditionalsItem/>
                <AdditionalsItem/>
            </div>
        </div>
    )
}

export default AdditionalsList