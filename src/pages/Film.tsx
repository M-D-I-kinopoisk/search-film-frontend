import React, { useState } from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/film.module.scss'
import Trailer from '@/components/Film/Trailer/Trailer'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import CommentList from '@/components/Film/Comments/CommentList/CommentList'
import TrailersList from '@/components/Film/TrailersAndMaterials/TrailersList/TrailersList'
import AwardsList from '@/components/Film/Awards/AwardsList/AwardsList'
import CreatorsList from '@/components/Film/Creators/CreatorsList/CreatorsList'
import GaleryList from '@/components/Film/Galery/GaleryList/GaleryList'
import Description from '@/components/Film/Description/Description'
import WatchOptions from '@/components/Film/WatchOptions/WatchOptions'
import Image from 'next/image'
import { filmDescription } from '@/const/const'

const Film: React.FC = () => {
    const [show, setShow] = useState(false)

    const actors = [1, 2, 3, 4]

    const showDetails = () => {
        setShow(!show)
    }

    return (
        <MainContainer title='Страница фильма'>
            <div className={style.wrapper}>
                <div className={style.genre}>
                    <div className={style.title}>
                        <span>Фильмы</span>
                        <span>Драмы</span>
                    </div>
                    <div className={style.arrow}>
                        <Image
                            alt='Назад'
                            width={20}
                            height={24}
                            src='/img/left-arrow.png'
                        />
                    </div>
                    <div className={style.choice}>
                        выбор Иви
                    </div>
                </div>
                <div className={style.main}>
                    <div className={style.videoBlock}>
                        <div className={style.trailer}>
                            <div className={style.showInfo}>
                                <Description />
                            </div>
                            <Trailer />
                        </div>

                        <div className={style.userButtons}>
                            <div className={style.userButtonsWrapper}>
                                <button className={style.trailerButton}>
                                    <Image
                                        alt='Трейлер'
                                        width={16}
                                        height={16}
                                        src={'/img/play.png'}
                                    />
                                    <h3>Трейлер</h3>
                                </button>

                                <button className={style.markerButton}>
                                    <Image
                                        alt='Маркер'
                                        width={16}
                                        height={16}
                                        src={'/img/marker.png'}
                                    />
                                </button>
                                <button className={style.shareButton}>
                                    <Image
                                        alt='Поделиться'
                                        width={16}
                                        height={16}
                                        src={'/img/share.png'}
                                    />
                                </button>
                            </div>
                            <button className={style.freeFilmsButton}>
                                <Image
                                    alt='Бесплатные фильмы'
                                    width={16}
                                    height={16}
                                    src={'/img/video.png'}
                                />
                                <h3>Бесплатные фильмы</h3>
                            </button>
                        </div>
                    </div>
                    <div className={style.informationBlock}>
                        <Description />
                        <div className={style.actorsAndUserButtons}>
                            <div className={style.actors}>
                                <div className={style.actor}>
                                    <div className={style.itemWrapper}>
                                        <div>
                                            <h3> 8,9</h3>
                                        </div>
                                    </div>
                                    <div className={style.rating}>
                                        Рейтинг Иви
                                    </div>
                                </div>
                                {actors.map((el) =>
                                    <div className={style.actor}>
                                        <div className={style.itemWrapper}>
                                            <div className={style.img}>
                                                <Image
                                                    alt='Актер'
                                                    width={44}
                                                    height={44}
                                                    src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85'
                                                />
                                            </div>
                                        </div>
                                        <div className={style.name}>
                                            Франсуа Клюзе
                                        </div>
                                    </div>
                                )}

                            </div>
                            
                            <div className={style.buttonsShow}>
                                <button className={style.trailerButton}>
                                    <Image
                                        alt='Трейлер'
                                        width={16}
                                        height={16}
                                        src={'/img/play.png'}
                                    />
                                    <h3>Трейлер</h3>
                                </button>
                                <div className={style.buttonsWrapper}>
                                    <button className={style.markerButton}>
                                        <Image
                                            alt='Маркер'
                                            width={16}
                                            height={16}
                                            src={'/img/marker.png'}
                                        />
                                    </button>
                                    <button className={style.shareButton}>
                                        <Image
                                            alt='Поделиться'
                                            width={16}
                                            height={16}
                                            src={'/img/share.png'}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={style.premy}>
                            <Image
                                alt='Премия'
                                width={58}
                                height={58}
                                src='https://thumbs.dfs.ivi.ru/storage29/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85'
                            />
                            <div className={style.premyInfo}>
                                <h3 >Жорж</h3>
                                <div className={style.premyDescription}>
                                    Лучшая зарубежная комедия, Лучшая зарубежная драма,
                                    Лучший европейский фильм, Лучший актер
                                </div>
                            </div>
                        </div>

                        <button className={style.freeFilmsButtonShow}>
                            <Image
                                alt='Бесплатные фильмы'
                                width={16}
                                height={16}
                                src={'/img/video.png'}
                            />
                            <h3> Бесплатные фильмы</h3>
                        </button>

                        <div className={style.information}>
                            <p>{filmDescription[0]}</p>
                            {show ?
                                <div>
                                    {filmDescription.map((el) =>
                                        <p>{el}</p>)}
                                    <div className={style.hideWatchOptions}>
                                        <WatchOptions />
                                    </div>
                                </div>
                                : <></>
                            }
                        </div>

                        <a
                            onClick={() => showDetails()}
                            className={style.detailsButton}
                        >
                            {show ? 'Свернуть детали' : 'Детали о фильме'}
                        </a>
                        <a
                            onClick={() => showDetails()}
                            className={style.showDetailsButton}
                        >
                            {show ? 'Свернуть' : 'Читать дальше'}
                        </a>

                        <div className={style.rate}>
                            <div className={style.rateWrapper}>
                                <div className={style.balls}>
                                    <h3>8,9</h3>
                                </div>
                                <div className={style.ballsDescription}>
                                    <h3>Рейтинг Иви</h3>
                                    <p>Интересный сюжет</p>
                                    <p>143 109 оценок</p>
                                </div>
                            </div>

                            <div className={style.rateBtn}>
                                Оценить
                            </div>
                        </div>

                        <div className={style.showWatchOptions}>
                            <WatchOptions />
                        </div>
                    </div>
                </div>

                <GaleryList />
                <CreatorsList />
                <AwardsList />
                <TrailersList />
                <CommentList />
                <WatchAllDevices />
            </div>
        </MainContainer >
    )
}

export default Film