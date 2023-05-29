import styles from './TrailerContent.module.scss'
import MyButton from '@/components/UI/MyButton/MyButton'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'
import {IoMdExpand} from 'react-icons/io'
import MainInfo from '@/components/Film/MainInfo/MainInfo'

export type FilmInfoProps = {
    filmInfo: {
        trailerLink: string
    }
}

const TrailerContent = ({filmInfo}: FilmInfoProps) => {
    const userButtonsInfo = [
        {text: 'Трейлер', icon: <BsPlay size={26} color='rgba(255,255,255,.72)'/>, nameClass: 'trailerButton'},
        {icon: <BsBookmark size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'markerButton'},
        {icon: <FiShare size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'shareButton'},
    ]

    return (
        <div className={styles.trailerContent}>
            {/*<MainInfo/>*/}
            <div className={styles.video}>
                <div className={styles.trailerWrapper}>
                    <iframe src={filmInfo.trailerLink} className={styles.trailer} frameBorder={0}></iframe>
                </div>
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