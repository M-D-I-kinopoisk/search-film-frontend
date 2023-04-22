import React from 'react'

import style from './Description.module.scss'

const Description: React.FC = () => {
    return (
        <div className={style.description}>
            <div>2011 1 ч. 52 мин. 16+</div>
            <div>Франция Драмы Комедии Биография</div>
            <div className={style.params}>
                <div className={style.hd}>FullHD</div>
                <img src='/img/volume.png' />
                <div>Рус</div>
                <img src='/img/keyboard.png' />
                <div>Рус</div>
            </div>
        </div>
    )
}

export default Description