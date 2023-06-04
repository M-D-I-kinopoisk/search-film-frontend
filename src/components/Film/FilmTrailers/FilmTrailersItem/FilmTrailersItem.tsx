'use client'

import styles from './filmTrailersItem.module.scss'

import {RxLapTimer} from 'react-icons/rx'
import {FilmInfo} from '@/components/Film/FilmInfo/FilmInfo'

type TrailersItemProps = {
    inModal?: any,
    filmInfo: FilmInfo
}

const FilmTrailersItem = ({inModal, filmInfo}: TrailersItemProps) => {

    return (
        <>
            {inModal ?
                <div className={styles.modalTrailers}>
                    <div className={styles.trailersContainer}>
                        <div className={styles.trailerContent}>
                            <iframe width='330' height='166' frameBorder={0} src={filmInfo?.trailerLink}></iframe>
                        </div>
                    </div>
                    <div className={styles.modalTrailerName}>
                        Трейлер
                    </div>

                    <div className={styles.modalDuration}>
                        <RxLapTimer size={16} color={'#ea003d'}/>
                        <h3>0:02:11</h3>
                    </div>
                </div>
                :
                <div className={styles.trailer}>
                    <div className={styles.trailersContainer}>
                        <div className={styles.trailerContent}>
                            <iframe width='330' height='166' frameBorder={0} src={filmInfo?.trailerLink}></iframe>
                        </div>
                    </div>

                    <div className={styles.trailerName}>
                        Трейлер
                    </div>

                    <div className={styles.trailerDuration}>
                        3 мин.
                    </div>
                </div>
            }
        </>
    )
}

export default FilmTrailersItem