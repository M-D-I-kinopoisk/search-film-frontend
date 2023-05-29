'use client'

import styles from './Trailers.module.scss'

import {RxLapTimer} from 'react-icons/rx'
import {useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'

type TrailersItemProps = {
    inModal?: any
}

const TrailersItem = ({inModal}: TrailersItemProps) => {
    const {filmInfo} = useSelector(selectFilms)

    return (
        <>
            {inModal ?
                <div className={styles.modalItem}>
                    <div className={styles.trailerContainer}>
                        <iframe width='330' height='166' frameBorder={0} src={filmInfo.trailerLink}></iframe>
                    </div>
                    <div className={styles.modalItemName}>
                        Трейлер
                    </div>

                    <div className={styles.modalFullDuration}>
                        <RxLapTimer size={16} color={'#ea003d'}/>
                        <h3>0:02:11</h3>
                    </div>
                </div>
                :
                <div className={styles.item}>
                    <div className={styles.trailerContainer}>
                        <iframe width='330' height='166' frameBorder={0} src={filmInfo.trailerLink}></iframe>
                    </div>

                    <div className={styles.itemName}>
                        Трейлер
                    </div>

                    <div className={styles.shortDuration}>
                        3 мин.
                    </div>
                </div>
            }
        </>
    )
}

export default TrailersItem