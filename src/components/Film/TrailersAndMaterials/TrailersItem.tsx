import React from 'react'

import styles from './Trailers.module.scss'
import Image from 'next/image'

type TrailersItemProps = {
    inModal?: any
}

const TrailersItem: React.FC<TrailersItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={styles.modalItem}>
                    <div className={styles.modalItemImg}>
                        <Image alt='Трейлер'
                            width={500}
                            height={500}
                            src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85' />
                    </div>

                    <div className={styles.modalItemName}>
                        Трейлер (дублированный)
                    </div>

                    <div className={styles.modalFullDuration}>
                        <Image alt='Трейлер'
                            width={16}
                            height={16}
                            src='/img/time.png' />
                        <h3>0:02:11</h3>
                    </div>
                </div>
                :
                <div className={styles.item}>
                    <div className={styles.itemImg}>
                        <Image alt='Трейлер'
                            width={280}
                            height={160}
                            src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85' />
                    </div>

                    <div className={styles.itemName}>
                        Трейлер (дублированный)
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