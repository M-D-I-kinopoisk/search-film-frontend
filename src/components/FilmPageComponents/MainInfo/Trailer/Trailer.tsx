import React from 'react'

import style from './Trailer.module.scss'
import Image from 'next/image'

const Trailer: React.FC = () => {
    return (
        <div className={style.trailer}>
            <div className={style.video}>
                <Image
                    alt='фильм'
                    width={719}
                    height={404}
                    src='https://thumbs.dfs.ivi.ru/storage30/contents/c/c/e934645a5e1cc379ebd22e1a3bd3fa.jpg/858x483/?q=85'
                />
                <div>

                    <div className={style.expand}>
                        <img src='/img/full.png' />
                        <span>Развернуть трейлер</span>
                    </div>
                    <div className={style.subscription}>
                        <div className={style.subscriptionBtn}>
                            <div>Смотреть</div>
                            <div>по подписке Иви</div>
                        </div>
                        <div className={style.saleSub}>
                            Первые 30 дней подписки за 1 ₽
                        </div>

                    </div>
                    <div className={style.age}>
                        16+
                    </div>
                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonsWrapper}>
                    <div className={style.trailerBtn}>
                        <img src='/img/play.png' />
                        <div>Трейлер</div>
                    </div>
                    <div className={style.marker}>
                        <img src='/img/marker.png' />
                    </div>
                    <div className={style.share}>
                        <img src='/img/share.png' />
                    </div>
                </div>
                <div className={style.sale}>
                    <img src='/img/video.png' />
                    <span>Бесплатные фильмы</span>
                </div>
            </div>
        </div>
    )
}

export default Trailer