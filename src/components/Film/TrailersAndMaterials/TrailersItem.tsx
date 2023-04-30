import React from 'react'

import style from './Trailers.module.scss'
import Image from 'next/image'

type TrailersItemProps = {
    inModal?: any
}

const TrailersItem: React.FC<TrailersItemProps> = ({ inModal }) => {
    return (
        <>
            {inModal ?
                <div className={style.modalItem}>
                    <div className={style.modalItemImg}>
                        <Image
                            alt='Трейлер'
                            width={500}
                            height={500}
                            src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85'
                        />
                    </div>
                    <div className={style.modalItemName}>
                        Трейлер (дублированный)
                    </div>
                    <div className={style.modalFullDuration}>
                        <img src='/img/time.png' />
                        <h3>0:02:11</h3>
                    </div>
                </div> 
                :
                <div className={style.item}>
                    <div className={style.itemImg}>
                        <Image
                            alt='Трейлер'
                            width={280}
                            height={160}
                            src='https://thumbs.dfs.ivi.ru/storage8/contents/4/4/fdca1878aeef2765f45e66bd7e7bb7.jpg/784x440/?q=85'
                        />                    </div>
                    <div className={style.itemName}>
                        Трейлер (дублированный)
                    </div>
                    <div className={style.shortDuration}>
                        3 мин.
                    </div>
                </div>
            }
        </>
    )
}

export default TrailersItem