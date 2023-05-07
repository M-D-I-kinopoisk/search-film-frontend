import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import styles from '../scss/pages/Actor.module.scss'
import Image from 'next/image'

const Actor: React.FC = () => {
    return (
        <MainContainer title='Актер'>
            <div className={styles.wrapper}>
                <div className={styles.backLink}>
                    <Image alt='Назад'
                        width={20}
                        height={24}
                        src='/img/left-arrow.png' />
                    <span >Назад</span>
                </div>

                <div className={styles.content}>
                    <div>
                        <div className={styles.img}>
                            <Image alt='Актер'
                                width={120}
                                height={120}
                                src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/120x144/?q=85' />
                        </div>

                        <h2 className={styles.name}>Франсуа Клюзе</h2>
                        <div className={styles.nation}>François Cluzet</div>

                        <div className={styles.info}>
                            <p>
                                Франсуа Клюзе (фр. François Cluzet) -
                                французский актер театра, телевидения и кино.
                                Родился
                                21 сентября 1955 г. в...
                            </p>
                            <a >Развернуть</a>
                        </div>
                    </div>

                    <div className={styles.films}>
                        <div className={styles.filmsTitle}>
                            <h2>Полная фильмография </h2>
                            <div>18 фильмов</div>
                        </div>

                        <div className={styles.items}>
                            <div className={styles.item}>
                                <div className={styles.filmImg}>
                                    <Image alt='Фильм'
                                        width={80}
                                        height={122}
                                        src='https://thumbs.dfs.ivi.ru/storage38/contents/0/0/55c8a2551297804e709c65c9b4ecc0.jpg/172x264/?q=85' />
                                </div>

                                <div className={styles.filmInfo}>
                                    <div className={styles.itemWrapper}>
                                        <div>2020</div>
                                        <div>Поли</div>
                                        <div>Рейтинг Иви: 8,3</div>
                                    </div>

                                    <div className={styles.look}>
                                        <a> Смотреть </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.more}>
                        <a >Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Actor