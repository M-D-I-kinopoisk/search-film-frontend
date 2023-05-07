import React from 'react'

import styles from './TrailerContent.module.scss'
import MyButton from '@/components/UI/MyButton/MyButton'

import { FiVolume1 } from 'react-icons/fi'
import { BsKeyboard } from 'react-icons/bs'
import { BsPlay } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'
import { MdOndemandVideo } from 'react-icons/md'
import { IoMdExpand } from 'react-icons/io'

const TrailerContent: React.FC = () => {
    const userButtonsInfo = [
        { text: 'Трейлер', icon: <BsPlay size={26} color='rgba(255,255,255,.72)' />, nameClass: 'trailerButton' },
        { icon: <BsBookmark size={16} color='rgba(255,255,255,.72)' />, nameClass: 'markerButton' },
        { icon: <FiShare size={16} color='rgba(255,255,255,.72)' />, nameClass: 'shareButton' },
    ]

    return (
        <div className={styles.trailerContent}>
            <div className={styles.mainInfo}>
                <h2>1+1 (Фильм 2011)</h2>
                <div>2011 1 ч. 52 мин. 16+</div>
                <div>Франция Драмы Комедии Биография</div>

                <div className={styles.params}>
                    <div className={styles.hd}>FullHD</div>
                    <FiVolume1 size={25} color='rgba(255,255,255,.8)' />
                    <div>Рус</div>
                    <BsKeyboard size={25} color='rgba(255,255,255,.8)' />
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
                    <IoMdExpand size={16} color='rgba(255,255,255,.88)' />
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
                        <MyButton key={elem.nameClass}
                            text={elem.text ? elem.text : null}
                            icon={elem.icon}
                            nameClass={elem.nameClass} />
                    )}
                </div>

                <MyButton text={'Бесплатные фильмы'}
                    icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)' />}
                    nameClass='freeFilmsButton' />
            </div>
        </div>
    )
}

export default TrailerContent