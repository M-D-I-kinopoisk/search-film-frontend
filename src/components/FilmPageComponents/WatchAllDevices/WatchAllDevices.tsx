import React from 'react'

import style from './WatchAllDevices.module.scss'

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
                <img className={style.frameImg} src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png' />
                <img className={style.ipadImg} src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png' />
                <img className={style.mainImgIpad} src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' />
                <img className={style.mainImgTv} src='	https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' />
            </div>
        </div>
    )
}

export default WatchAllDevices