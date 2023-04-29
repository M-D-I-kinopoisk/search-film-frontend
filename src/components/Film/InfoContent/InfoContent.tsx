import React, { useState } from 'react'

import style from './InfoContent.module.scss'
import WatchOptions from '@/components/Film/WatchOptions/WatchOptions'
import Image from 'next/image'
import { filmDescription } from '@/const/const'

const InfoContent: React.FC = () => {
    const [show, setShow] = useState(false)

    const actors = [1, 2, 3, 4]

    const showDetails = () => {
        setShow(!show)
    }

    return (
        <div className={style.infoContent}>
            <div className={style.mainInfo}>
                <h2>1+1 (Фильм 2011)</h2>
                <div>2011 1 ч. 52 мин. 16+</div>
                <div>Франция Драмы Комедии Биография</div>
                <div className={style.params}>
                    <div className={style.hd}>FullHD</div>
                    <Image
                        alt='volume'
                        width={15}
                        height={15}
                        src='/img/volume.png'
                    />
                    <div>Рус</div>
                    <Image
                        alt='keyboard'
                        width={15}
                        height={15}
                        src='/img/keyboard.png'
                    />
                    <div>Рус</div>
                </div>
            </div>

            <div className={style.actorsAndUserButtons}>
                <div className={style.actors}>
                    <div className={style.actor}>
                        <div className={style.actorWrapper}>
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
                            <div className={style.actorWrapper}>
                                <div className={style.actorImage}>
                                    <Image
                                        alt='Актер'
                                        width={44}
                                        height={44}
                                        src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85'
                                    />
                                </div>
                            </div>
                            <div className={style.actorName}>
                                Франсуа Клюзе
                            </div>
                        </div>
                    )}
                </div>

                <div className={style.userButtons}>
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

            <button className={style.freeFilmsButton}>
                <Image
                    alt='Бесплатные фильмы'
                    width={16}
                    height={16}
                    src={'/img/video.png'}
                />
                <h3> Бесплатные фильмы</h3>
            </button>

            <div className={style.filmDescription}>
                <p>{filmDescription[0]}</p>

                {show &&
                    <div>
                        {filmDescription.map((el) =>
                            <p>{el}</p>)}
                        <div className={style.hideWatchOptions}>
                            <WatchOptions />
                        </div>
                    </div>
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

            <div className={style.filmRating}>
                <div className={style.filmRatingWrapper}>
                    <h3>8,9</h3>
                    <div className={style.filmRatingDescription}>
                        <h3>Рейтинг Иви</h3>
                        <p>Интересный сюжет</p>
                        <p>143 109 оценок</p>
                    </div>
                </div>

                <div className={style.evaluateButton}>
                    Оценить
                </div>
            </div>

            <div className={style.showWatchOptions}>
                <WatchOptions />
            </div>
        </div>
    )
}

export default InfoContent