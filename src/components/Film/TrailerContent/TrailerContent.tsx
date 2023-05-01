import React, { useState } from 'react'

import styles from './TrailerContent.module.scss'
import Image from 'next/image'
import MyButton from '@/components/UI/MyButton/MyButton'

const TrailerContent: React.FC = () => {
    const userButtonsInfo = [
        { text: 'Трейлер', imageSrc: '/img/play.png', nameClass: 'trailerButton' },
        { imageSrc: '/img/marker.png', nameClass: 'markerButton' },
        { imageSrc: '/img/share.png', nameClass: 'shareButton' },
    ]

    return (
        <div className={styles.trailerContent}>
            <div className={styles.mainInfo}>
                <h2>1+1 (Фильм 2011)</h2>
                <div>2011 1 ч. 52 мин. 16+</div>
                <div>Франция Драмы Комедии Биография</div>

                <div className={styles.params}>
                    <div className={styles.hd}>FullHD</div>

                    <Image alt='volume'
                        width={15}
                        height={15}
                        src='/img/volume.png' />

                    <div>Рус</div>

                    <Image alt='volume'
                        width={15}
                        height={15}
                        src='/img/keyboard.png' />

                    <div>Рус</div>
                </div>
            </div>

            <div className={styles.video}>
                <div className={styles.videoImg}>
                    <video loop muted autoPlay
                        // poster='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'
                        src='https://region.dfs.ivi.ru/mp4-hd720/nDn4S5tE7teKFlBTG3sBtw,1682021327/storage23/contents/a/3/4512a3b60f28b3ddfd12b44caad6b0.mp4'>
                    </video>
                </div>

                <div className={styles.expand}>
                    <Image alt='Развернуть'
                        width={16}
                        height={16}
                        src='/img/full.png' />
                    <span>Развернуть трейлер</span>
                </div>

                <div className={styles.subscription}>
                    <div className={styles.subscriptionBtn}>
                        <div>Смотреть</div>
                        <div>по подписке Иви</div>
                    </div>

                    <div className={styles.saleSub}>
                        Первые 30 дней подписки за 1 ₽
                    </div>
                </div>

                <div className={styles.age1}>16+</div>
                <div className={styles.age2}>16+</div>
            </div>

            <div className={styles.userButtons}>
                <div className={styles.userButtonsWrapper}>
                    {userButtonsInfo.map((elem) =>
                        <MyButton text={elem.text ? elem.text : null}
                            imageSrc={elem.imageSrc}
                            nameClass={elem.nameClass} />
                    )}
                </div>

                <MyButton text={'Бесплатные фильмы'}
                    imageSrc={'/img/video.png'}
                    nameClass='freeFilmsButton' />

            </div>
        </div>
    )
}

export default TrailerContent