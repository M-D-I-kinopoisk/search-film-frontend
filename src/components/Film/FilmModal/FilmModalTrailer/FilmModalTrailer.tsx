'use client'

import styles from '@/components/Film/FilmTrailers/FilmTrailersItem/filmTrailersItem.module.scss'

import {RxLapTimer} from 'react-icons/rx'

import {FilmModalTrailerProps} from '@/types/components/Film'

const FilmModalTrailer = ({inModal, filmInfo}: FilmModalTrailerProps) => {
    return (
        <>
            {inModal &&
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
            }
            </>
    )
}

export default FilmModalTrailer