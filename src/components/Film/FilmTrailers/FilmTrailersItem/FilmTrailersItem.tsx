'use client'

import styles from './filmTrailersItem.module.scss'

import {TrailersItemProps} from '@/types/components/Film'

const FilmTrailersItem = ({ filmInfo}: TrailersItemProps) => {

    return (
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

    )
}

export default FilmTrailersItem