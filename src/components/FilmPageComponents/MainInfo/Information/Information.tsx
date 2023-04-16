import React from 'react'

import style from './Information.module.scss'
import Premy from './Premy/Premy'
import ActorList from './ActorList/ActorList'

const Information: React.FC = () => {
    return (
        <div className={style.info}>
            <h2>1+1 (Фильм 2011)</h2>
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
            <ActorList />
            <Premy />

            <div className={style.information}>
                Прикованный к инвалидному креслу аристократ нанимает
                себе в помощники человека, который подходит для этой работы
                меньше всего – только что освободившегося из тюрьмы темнокожего парня.
                Трогательная и глубокая комедийная драма, получившая премии «Сезар», «Жорж» и «Гойя».
            </div>
            <div className={style.details}>
                <a>
                    Детали о фильме
                </a>
            </div>
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
        </div>
    )
}

export default Information