import React from 'react'

import styles from './Galery.module.scss'
import Image from 'next/image'

type GaleryItemProps = {
}

const GaleryItem: React.FC<GaleryItemProps> = () => {
    return (
        <div>
            <div className={styles.galleryItem}>
                <Image alt='Фильмм'
                    width={153}
                    height={235}
                    src='https://thumbs.dfs.ivi.ru/storage39/contents/0/9/9d7a796cf23365d748577e10ff7079.jpg/234x360/?q=85' />

                <div className={styles.setIvi}>Сериал Иви</div>

                <div className={styles.galleryItemMarker}>
                    <Image alt='Добавить'
                        width={20}
                        height={20}
                        src='/img/marker.png' />
                </div>

                <div className={styles.galleryItemDescroption} >
                    <div className={styles.galleryItemRating}>
                        <span>8,2</span>
                        <Image alt='Прогресс'
                            width={27}
                            height={26}
                            src='/img/progress.png' />
                    </div>

                    <div className={styles.actory}>актеры</div>
                    <div className={styles.progress}></div>

                    <div className={styles.galleryItemInfo}>
                        2021, Россия, Комедийные
                    </div>
                </div>

                <div className={styles.galleryItemAge}>18+</div>
            </div>

            <div className={styles.galleryItemTitle}>
                <div className={styles.galleryItemName}>По Колено</div>
                <div className={styles.toogleSale}>Бесплатно</div>
            </div>
        </div>
    )
}

export default GaleryItem