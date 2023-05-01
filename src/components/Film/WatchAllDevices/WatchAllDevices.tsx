import React from 'react'

import styles from './WatchAllDevices.module.scss'
import Image from 'next/image'

const WatchAllDevices: React.FC = () => {
    return (
        <div className={styles.devices}>
            <div>
                <div className={styles.devicesInfoTitle}>
                    Cмотреть «1+1» на всех устройствах
                </div>
                
                <div className={styles.devicesInfoDescription}>
                    Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
                </div>

                <div className={styles.connectBtn}>
                    Подключить устройства
                </div>
            </div>

            <div className={styles.devicesImg}>
                <Image className={styles.frameImg}
                    alt='frame'
                    width={536}
                    height={272}
                    src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png' />
            
                <Image className={styles.ipadImg}
                    alt='frame'
                    width={200}
                    height={136}
                    src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png' />
           
                <Image className={styles.mainImgIpad}
                    alt='frame'
                    width={188}
                    height={102}
                    src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' />
          
                <Image className={styles.mainImgTv}
                    alt='frame'
                    width={337}
                    height={192}
                    src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' />
            </div>
        </div>
    )
}

export default WatchAllDevices