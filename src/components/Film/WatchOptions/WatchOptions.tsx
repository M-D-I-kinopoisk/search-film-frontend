import React from 'react'

import style from './WatchOptions.module.scss'

const WatchOptions: React.FC = () => {
    return (
        <div className={style.watchOptions}>
            <div className={style.language}>
                <h3>Языки</h3>

                <div>
                    <span>Русский, Французский</span>
                </div>
            </div>

            <div className={style.sub}>
                <h3>Субтитры</h3>
                
                <div>
                    <span>Русский</span>
                </div>
            </div>

            <div className={style.quality}>
                <h3>Качество</h3>

                <div className={style.qualityDescription}>
                    <span>4К</span>
                    <span>FullHD</span>
                    <span>1080</span>
                    <span>720</span>
                    <span>5.1</span>
                </div>
            </div>

            <div className={style.picture}>
                <h3>Изображение и звук.
                    <span>
                        Фактическое качество зависит от устройства и
                        ограничений правообладателя.
                    </span>
                </h3>

                <div className={style.pictureDescription}>
                    <span>4К</span>
                    <span>FullHD</span>
                    <span>1080</span>
                    <span>720</span>
                    <span>5.1</span>
                </div>
            </div>
        </div>
    )
}

export default WatchOptions