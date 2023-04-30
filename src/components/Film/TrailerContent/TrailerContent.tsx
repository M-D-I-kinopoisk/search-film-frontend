import React, { useState } from 'react'

import style from './TrailerContent.module.scss'
import Image from 'next/image'

const TrailerContent: React.FC = () => {
    return (
        <div className={style.trailerContent}>
            <div className={style.mainInfo}>
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

            <div className={style.video}>
                <div className={style.videoImg}>
                    <video
                        loop muted autoPlay
                        // poster='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'
                        src='https://region.dfs.ivi.ru/mp4-hd720/nDn4S5tE7teKFlBTG3sBtw,1682021327/storage23/contents/a/3/4512a3b60f28b3ddfd12b44caad6b0.mp4'
                    >
                    </video>
                </div>

                <div className={style.expand}>
                    <Image
                        alt='Развернуть'
                        width={16}
                        height={16}
                        src='/img/full.png'
                    />
                    <span>Развернуть трейлер</span>
                </div>

                <div className={style.subscription}>
                    <div className={style.subscriptionBtn}>
                        <div>Смотреть</div>
                        <div>по подписке Иви</div>
                    </div>

                    <div className={style.saleSub}>
                        Первые 30 дней подписки за 1 ₽
                    </div>
                </div>
                
                <div className={style.age1}>
                    16+
                </div>

                <div className={style.age2}>
                    16+
                </div>
            </div>

            <div className={style.userButtons}>
                <div className={style.userButtonsWrapper}>
                    <button className={style.trailerButton}>
                        <Image
                            alt='Трейлер'
                            width={16}
                            height={16}
                            src={'/img/play.png'}
                        />
                        <h3>Трейлер</h3>
                    </button>

                    <button className={style.markerButton}>
                        <Image
                            alt='Маркер'
                            width={16}
                            height={16}
                            src={'/img/marker.png'}
                        />
                    </button>

                    <button className={style.shareButton}>
                        <Image
                            alt='Поделиться'
                            width={16}
                            height={16}
                            src={'/img/share.png'}
                        />
                    </button>
                </div>

                <button className={style.freeFilmsButton}>
                    <Image
                        alt='Бесплатные фильмы'
                        width={16}
                        height={16}
                        src={'/img/video.png'}
                    />
                    <h3>Бесплатные фильмы</h3>
                </button>
            </div>
        </div>
    )
}

export default TrailerContent