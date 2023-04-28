import React from 'react'

import style from './GaleryItem.module.scss'
import Image from 'next/image'

type GaleryItemProps = {
    num: number
}

const GaleryItem: React.FC<GaleryItemProps> = ({ num }) => {
    return (
        <div >
            <div className={style.galleryItem}>
                <Image
                    alt='Фильмм'
                    width={153}
                    height={235}
                    src='https://thumbs.dfs.ivi.ru/storage39/contents/0/9/9d7a796cf23365d748577e10ff7079.jpg/234x360/?q=85'
                />
                <div className={style.setIvi}>
                    Сериал Иви
                </div>
                <div className={style.galleryItemMarker}>
                    <Image
                        alt='Добавить'
                        width={20}
                        height={20}
                        src='/img/marker.png'
                    />
                </div>
                <div className={style.galleryItemDescroption} >
                    <div className={style.galleryItemRating}>
                        <span>8,2</span>
                        <Image
                            alt='Прогресс'
                            width={27}
                            height={26}
                            src='/img/progress.png'
                        />
                    </div>
                    <div className={style.actory}>актеры</div>
                    <div className={style.progress}>

                    </div>
                    <div className={style.galleryItemInfo}>
                        2021, Россия, Комедийные
                    </div>
                </div>

                <div className={style.galleryItemAge}>
                    18+ {num}
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