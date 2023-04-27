import React from 'react'

import style from './Description.module.scss'
import Image from 'next/image'

const Description: React.FC = () => {
    return (
        <div className={style.description}>
            <h2>1+1 (Фильм 2011)</h2>
            <div>2011 1 ч. 52 мин. 16+</div>
            <div>Франция Драмы Комедии Биография</div>
            <div className={style.params}>
                <div className={style.hd}>FullHD</div>
                <Image
                    alt='volume'
                    width={15}
                    height={15}
                    src='/img/volume.png'
                />
                <div>Рус</div>
                <Image
                    alt='volume'
                    width={15}
                    height={15}
                    src='/img/keyboard.png'
                />
                <div>Рус</div>
            </div>
        </div>
    )
}

export default Description