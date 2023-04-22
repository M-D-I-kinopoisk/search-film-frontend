import React from 'react'

import style from './Premy.module.scss'
import Image from 'next/image'

const Premy: React.FC = () => {
    return (
        <div className={style.premy}>
            <Image
                alt='фильм'
                width={58}
                height={58}
                src='https://thumbs.dfs.ivi.ru/storage29/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85'
            />
            <div className={style.premyInfo}>
                <h3 >
                    Жорж
                </h3>
                <div className={style.premyDescription}>
                    Лучшая зарубежная комедия, Лучшая зарубежная драма, Лучший европейский фильм, Лучший актер
                </div>
            </div>
        </div>
    )
}

export default Premy