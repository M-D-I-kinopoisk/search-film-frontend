import React from 'react'

import style from './AdditionalsItem.module.scss'

const AdditionalsItem: React.FC = () => {
    return (
        <div className={style.addMaterialsItem}>
            <div className={style.addMaterialsItemImg}>
                <img src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85' />
            </div>
            <div className={style.addMaterialsItemName}>
                Трейлер (дублированный)
            </div>
            <div className={style.addMaterialsItemВuration}>
                2 мин.
            </div>
        </div>
    )
}

export default AdditionalsItem