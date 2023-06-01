'use client'

import styles from './WatchAllDevices.module.scss'
import Image from 'next/image'
import {Film} from '@/components/Film/Info/Info'

interface AllDevices {
    film: Film
}

const WatchAllDevices = ({film}: AllDevices) => {
    return (
        <div className={styles.devices}>
            <div>
                <div className={styles.devicesInfoTitle}>
                    Cмотреть «{film.nameRU}» на всех устройствах
                </div>

                <div className={styles.devicesInfoDescription}>
                    Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
                </div>

                <button className={styles.connectBtn}>
                    Подключить устройства
                </button>
            </div>

            <div className={styles.devicesImages}>
                <Image className={styles.frameImg}
                       alt='frame'
                       width={536}
                       height={272}
                       src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'/>

                <Image className={styles.ipadFrameImg}
                       alt='ipadFrame'
                       width={200}
                       height={136}
                       src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png'/>

                <Image className={styles.mainIpadImg}
                       alt='frame'
                       width={188}
                       height={102}
                       src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'/>

                <Image className={styles.mainTvImg}
                       alt='frame'
                       width={337}
                       height={192}
                       src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'/>
            </div>
        </div>
    )
}

export default WatchAllDevices