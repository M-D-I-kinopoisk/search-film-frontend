import React from 'react'

import style from './Trailer.module.scss'
import Image from 'next/image'

const Trailer: React.FC = () => {
    return (
        <div className={style.video}>
            <div className={style.videoImg}>
                <video
                    loop muted autoPlay
                    // poster='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/'
                    src='https://region.dfs.ivi.ru/mp4-hd720/nDn4S5tE7teKFlBTG3sBtw,1682021327/storage23/contents/a/3/4512a3b60f28b3ddfd12b44caad6b0.mp4'
                >
                </video>
            </div>
            <div className={style.expand}>
                <Image
                    alt='Развернуть'
                    width={26}
                    height={16}
                    src='/img/full.png'
                />
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
            <div className={style.age1}>
                16+
            </div>
            <div className={style.age2}>
                16+
            </div>
        </div>
    )
}

export default Trailer