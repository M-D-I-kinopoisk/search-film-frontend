import React from 'react'

import style from './FreeFilmsButton.module.scss'

const FreeFilmsButton: React.FC = () => {
    return (
        <div className={style.sale}>
            <img src='/img/video.png' />
            <span>Бесплатные фильмы</span>
        </div>
    )
}

export default FreeFilmsButton