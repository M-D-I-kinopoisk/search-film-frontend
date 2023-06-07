'use client'

import styles from './WatchAllDevices.module.scss'

import Image from 'next/image'

import {Film} from '@/components/Film/FilmInfo/FilmInfo'

interface AllDevices {
    film: Film
}

const WatchAllDevices = ({film}: AllDevices) => {
    return (
        <div className={styles.devices}>
            <div className={styles.devicesInfo}>
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
                       alt='tvFrame'
                       width={536}
                       height={272}
                       src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'/>

                <Image className={styles.ipadFrameImg}
                       alt='ipadFrame'
                       width={200}
                       height={136}
                       src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png'/>

                <Image className={styles.mainIpadImg}
                       alt='mainIpadImg'
                       width={184}
                       height={250}
                       src={`http://localhost:12120/api/films/images/${film.imageName}`}/>

                <Image className={styles.mainTvImg}
                       alt='mainTvImg'
                       width={337}
                       height={350}
                       src={`http://localhost:12120/api/films/images/${film.imageName}`}/>
            </div>
        </div>
    )
}

export default WatchAllDevices