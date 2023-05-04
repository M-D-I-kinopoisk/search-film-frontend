import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/Actor.module.scss'
import Image from 'next/image'

const Actor: React.FC = () => {
    return (
        <MainContainer title='Актер'>
            <div className={style.wrapper}>
                <div className={style.backLink}>
                    <Image
                        alt='Назад'
                        width={20}
                        height={24}
                        src='/img/left-arrow.png'
                    />
                    <span >Назад</span>
                </div>

                <div className={style.content}>
                    <div>
                        <div className={style.img}>
                            <Image
                                alt='Актер'
                                width={120}
                                height={120}
                                src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/120x144/?q=85'
                            />
                        </div>

                        <h2 className={style.name}>Франсуа Клюзе</h2>
                        <div className={style.nation}>François Cluzet</div>

                        <div className={style.info}>
                            <p>
                                Франсуа Клюзе (фр. François Cluzet) -
                                французский актер театра, телевидения и кино.
                                Родился
                                21 сентября 1955 г. в...
                            </p>
                            <a >Развернуть</a>
                        </div>
                    </div>

                    <div className={style.films}>
                        <div className={style.filmsTitle}>
                            <h2>Полная фильмография </h2>
                            <div>18 фильмов</div>
                        </div>

                        <div className={style.items}>
                            <div className={style.item}>
                                <div className={style.filmImg}>
                                    <Image
                                        alt='Фильм'
                                        width={80}
                                        height={122}
                                        src='https://thumbs.dfs.ivi.ru/storage38/contents/0/0/55c8a2551297804e709c65c9b4ecc0.jpg/172x264/?q=85'
                                    />
                                </div>

                                <div className={style.filmInfo}>
                                    <div className={style.itemWrapper}>
                                        <div>2020</div>
                                        <div>Поли</div>
                                        <div>Рейтинг Иви: 8,3</div>
                                    </div>

                                    <div className={style.look}>
                                        <a> Смотреть </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.more}>
                        <a >Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Actor