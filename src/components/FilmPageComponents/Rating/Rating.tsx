import React from 'react'

import style from './Rating.module.scss'

const Rating: React.FC = () => {
    return (
        <div className={style.rate}>
            <div className={style.rateWrapper}>
                <div className={style.balls}>
                    <h3>8,9</h3>
                </div>
                <div className={style.ballsDescription}>
                    <h3>Рейтинг Иви</h3>
                    <p>Интересный сюжет</p>
                    <p>143 109 оценок</p>
                </div>
            </div>

            <div className={style.rateBtn}>
                Оценить
            </div>
        </div>
    )
}

export default Rating