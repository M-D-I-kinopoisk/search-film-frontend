import React from 'react'

import style from './GaleryItem.module.scss'

const GaleryItem: React.FC = () => {
    return (
        <div >
            <div className={style.galleryItem}>
                <img src='https://thumbs.dfs.ivi.ru/storage39/contents/0/9/9d7a796cf23365d748577e10ff7079.jpg/234x360/?q=85' />
                <div className={style.setIvi}>
                    Сериал Иви
                </div>
                <div className={style.galleryItemMarker}>
                    <img src='/img/marker.png' />
                </div>
                <div className={style.galleryItemDescroption} >
                    <div className={style.galleryItemRating}>
                        <span>8,2</span>
                        <img src='/img/progress.png' />
                    </div>
                    <div className={style.actory}>актеры</div>
                    <div className={style.progress}>

                    </div>
                    <div className={style.galleryItemInfo}>
                        2021, Россия, Комедийные
                    </div>
                </div>

                <div className={style.galleryItemAge}>
                    18+
                </div>
            </div>

            <div className={style.galleryItemTitle}>
                <div className={style.galleryItemName}>
                    По Колено
                </div>
                <div className={style.toogleSale}>
                    Бесплатно
                </div>
            </div>
        </div>
    )
}

export default GaleryItem