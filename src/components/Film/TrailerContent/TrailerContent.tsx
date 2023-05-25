import styles from './TrailerContent.module.scss'
import MyButton from '@/components/UI/MyButton/MyButton'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'
import {IoMdExpand} from 'react-icons/io'
import MainInfo from '@/components/Film/MainInfo/MainInfo'
import {infoProps} from '@/components/Film/InfoContent/InfoContent'

const TrailerContent = ({filmInfo, film}: infoProps) => {
    const userButtonsInfo = [
        {text: 'Трейлер', icon: <BsPlay size={26} color='rgba(255,255,255,.72)'/>, nameClass: 'trailerButton'},
        {icon: <BsBookmark size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'markerButton'},
        {icon: <FiShare size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'shareButton'},
    ]

    return (
        <div className={styles.trailerContent}>
            {/*<MainInfo film={film} filmInfo={filmInfo}/>*/}
            <div className={styles.video}>
                <div className={styles.videoImg}>
                    <video loop muted autoPlay>
                        <source src='' type='video/mp4'/>
                    </video>
                </div>

                <div className={styles.expand}>
                    <IoMdExpand size={16} color='rgba(255,255,255,.88)'/>
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
                                  nameClass={elem.nameClass}/>
                    )}
                </div>

                <MyButton text={'Бесплатные фильмы'}
                          icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)'/>}
                          nameClass='freeFilmsButton'/>
            </div>
        </div>
    )
}

export default TrailerContent