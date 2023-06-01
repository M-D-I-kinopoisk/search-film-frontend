import styles from './mainTrailer.module.scss'

import MyButton from '@/components/UI/MyButton/MyButton'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'
import MainInfo from '@/components/Film/MainInfo/MainInfo'

export type FilmInfoProps = {
    filmInfo: {
        trailerLink: string
    }
}

const MainTrailer = ({filmInfo}: FilmInfoProps) => {
    const userButtons = [
        {icon: <BsPlay size={26} color='rgba(255,255,255,.72)'/>, text: 'Трейлер', nameClass: 'trailerButton'},
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
                    {userButtons.map((elem) =>
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

export default MainTrailer