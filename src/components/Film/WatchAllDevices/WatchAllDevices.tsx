import React from 'react'

import style from './WatchAllDevices.module.scss'
import Image from 'next/image'

const WatchAllDevices: React.FC = () => {
    return (
        <div className={style.devices}>
            <div className={style.devicesInfoWrapper}>
                <div className={style.devicesInfo}>
                    <div className={style.devicesInfoTitle}>
                        Cмотреть «1+1» на всех устройствах
                    </div>
                    <div className={style.devicesInfoDescription}>
                        Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
                    </div>
                    <div className={style.connectBtn}>
                        Подключить устройства
                    </div>
                </div>
            </div>
            <div className={style.devicesImg}>
                <Image
                    className={style.frameImg}
                    alt='frame'
                    width={536}
                    height={272}
                    src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'
                />
                <Image
                    className={style.ipadImg}
                    alt='frame'
                    width={200}
                    height={136}
                    src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png'
                />
                <Image
                    className={style.mainImgIpad}
                    alt='frame'
                    width={188}
                    height={102}
                    src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'
                />
                <Image
                    className={style.mainImgTv}
                    alt='frame'
                    width={337}
                    height={192}
                    src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'
                />
            </div>
        </div>
    )
}

export default WatchAllDevices