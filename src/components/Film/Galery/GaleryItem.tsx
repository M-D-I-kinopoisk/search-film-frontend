import React from 'react'

import styles from './Galery.module.scss'
import Image from 'next/image'
import { BsBookmark } from 'react-icons/bs'

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
                    <BsBookmark size={20} color='rgba(255,255,255,.88)' />
                </div>

                <div className={styles.galleryItemDescroption} >
                    <div className={styles.galleryItemRating}>
                        <h3>8,2</h3>
                        <div className={styles.graphs}>
                            <div className={styles.progressBar}>
                                <div className={styles.backBar}></div>
                                <div className={styles.valueBar}></div>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.backBar}></div>
                                <div className={styles.valueBar}></div>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.backBar}></div>
                                <div className={styles.valueBar}></div>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.backBar}></div>
                                <div className={styles.valueBar}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actory}>актеры</div>
                    <div className={styles.graph}>
                        <div className={styles.graphProgress}></div>
                    </div>

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