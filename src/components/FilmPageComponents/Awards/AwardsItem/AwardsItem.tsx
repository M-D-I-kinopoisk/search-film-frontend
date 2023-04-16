import React from 'react'

import style from './AwardsItem.module.scss'

const AwardsItem: React.FC = () => {
    return (
        <div className={style.awardsItem}>
            <div className={style.awardsItemImg}>
                <img src='https://thumbs.dfs.ivi.ru/storage26/contents/c/7/1075c56f00e8ddfdef1e1ab2aa7af5.png?q=85' />
            </div>
            <div className={style.awardsItemInfo}>
                <div className={style.awardsItemInfoTitle}>
                    Британская академия · 2013
                </div>
                <div className={style.awardsItemInfoDescription}>
                    Номинации: Лучший фильм на иностранном языке
                </div>
            </div>
        </div>
    )
}

export default AwardsItem