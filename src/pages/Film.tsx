import React, { useState } from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/film.module.scss'
import Trailer from '@/components/FilmPageComponents/Trailer/Trailer'
import WatchAllDevices from '@/components/FilmPageComponents/WatchAllDevices/WatchAllDevices'
import CommentList from '@/components/FilmPageComponents/Comments/CommentList/CommentList'
import TrailersList from '@/components/FilmPageComponents/TrailersAndMaterials/TrailersList/TrailersList'
import AwardsList from '@/components/FilmPageComponents/Awards/AwardsList/AwardsList'
import CreatorsList from '@/components/FilmPageComponents/Creators/CreatorsList/CreatorsList'
import GaleryList from '@/components/FilmPageComponents/Galery/GaleryList/GaleryList'
import Description from '@/components/FilmPageComponents/Description/Description'
import ActorList from '@/components/FilmPageComponents/ActorList/ActorList'
import Rating from '@/components/FilmPageComponents/Rating/Rating'
import WatchOptions from '@/components/FilmPageComponents/WatchOptions/WatchOptions'
import MyButton from '@/components/UI/MyButton/MyButton'
import Image from 'next/image'

const Film: React.FC = () => {
    const [show, setShow] = useState(false)

    let filmDescription = [
        ` Прикованный к инвалидному креслу аристократ нанимает
        себе в помощники человека, который подходит для этой работы
        меньше всего – только что освободившегося из тюрьмы темнокожего парня.
        Трогательная и глубокая комедийная драма, получившая премии «Сезар», «Жорж» и
        «Гойя».`,
        `Пожилой аристократ Филипп, ставший парализованным в
        результате несчастного случая, ищет помощника с функциями сиделки.
        Ему нужен не просто человек, который стал бы его руками и ногами,
        а кто-то, кому можно доверять. В своём особняке Филипп проводит
        отбор кандидатов, и в итоге принимает неожиданное решение.
        К недоумению окружающих, работа достаётся тому, кто, казалось бы,
        меньше всего для неё подходит – бывшему заключённому, выросшему
        на окраинах.`,
        ` Чтобы узнать, что общего может быть у богатого инвалида и его
        неблагополучного помощника, смотри онлайн на Иви «1+1».`,
        ` Приглашаем посмотреть фильм «1+1» в нашем онлайн-кинотеатре в
        хорошем HD качестве. Приятного просмотра!`
    ]

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
                        <img src='/img/left-arrow.png' />
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
                                <div className={style.trailerButton}>
                                    <MyButton img={'/img/play.png'}>Трейлер</MyButton>
                                </div>
                                <div className={style.markerButton}>
                                    <MyButton img={'/img/marker.png'} />
                                </div>
                                <div className={style.shareButton}>
                                    <MyButton img={'/img/share.png'} />
                                </div>
                            </div>
                            <div className={style.freeFilmsButton}>
                                <MyButton img={'/img/video.png'}>Бесплатные фильмы</MyButton>
                            </div>
                        </div>
                    </div>
                    <div className={style.informationBlock}>
                        <Description />
                        <div className={style.actorsAndUserButtons}>
                            <ActorList />
                            <div className={style.buttonsShow}>
                                <div className={style.trailerButton}>
                                    <MyButton img={'/img/play.png'}>
                                        Трейлер
                                    </MyButton>
                                </div>
                                <div className={style.buttonsWrapper}>
                                    <div className={style.markerButton}>
                                        <MyButton img={'/img/marker.png'} />
                                    </div>
                                    <div className={style.shareButton}>
                                        <MyButton img={'/img/share.png'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.premy}>
                            <Image
                                alt='фильм'
                                width={58}
                                height={58}
                                src='https://thumbs.dfs.ivi.ru/storage29/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85'
                            />
                            <div className={style.premyInfo}>
                                <h3 >
                                    Жорж
                                </h3>
                                <div className={style.premyDescription}>
                                    Лучшая зарубежная комедия, Лучшая зарубежная драма, Лучший европейский фильм, Лучший актер
                                </div>
                            </div>
                        </div>

                        <div className={style.freeFilmsButtonShow}>
                            <MyButton img={'/img/video.png'}>
                                Бесплатные фильмы
                            </MyButton>
                        </div>
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

                        <a onClick={() => showDetails()} className={style.detailsButton}>
                            {show ? 'Свернуть детали' : 'Детали о фильме'}
                        </a>
                        <a onClick={() => showDetails()} className={style.showDetailsButton}>
                            {show ? 'Свернуть' : 'Читать дальше'}
                        </a>

                        <Rating />

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
        </MainContainer>
    )
}

export default Film