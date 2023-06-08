import styles from './mainTrailer.module.scss'

import UserButton from '@/components/UI/UserButton/UserButton'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'
import MainFilmInfo from '@/components/Film/FilmInfo/MainFilmInfo/MainFilmInfo'

import {FilmInfoProps} from '@/types/components/Film'

const MainTrailer = ({filmInfo, film}: FilmInfoProps) => {
    const userButtons = [
        {icon: <BsPlay size={26} color='rgba(255,255,255,.72)'/>, text: 'Трейлер', nameClass: 'trailerButton'},
        {icon: <BsBookmark size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'markerButton'},
        {icon: <FiShare size={16} color='rgba(255,255,255,.72)'/>, nameClass: 'shareButton'},
    ]

    return (
        <div className={styles.trailerContent}>
            <div className={styles.mainInfoContainer}>
                <MainFilmInfo film={film}/>
            </div>
            <div className={styles.video}>
                <div className={styles.trailerWrapper}>
                    <iframe src={filmInfo.trailerLink} className={styles.trailer} frameBorder={0}></iframe>
                </div>
            </div>
            <div className={styles.userButtons}>
                <div className={styles.userButtonsWrapper}>
                    {userButtons.map((elem) =>
                        <UserButton key={elem.nameClass}
                                    text={elem.text ? elem.text : null}
                                    icon={elem.icon}
                                    nameClass={elem.nameClass}/>
                    )}
                </div>

                <UserButton text={'Бесплатные фильмы'}
                            icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)'/>}
                            nameClass='freeFilmsButton'/>
            </div>
        </div>
    )
}

export default MainTrailer