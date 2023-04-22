import React, { useState } from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/Film.module.scss'
import Trailer from '@/components/FilmPageComponents/Trailer/Trailer'
import WatchAllDevices from '@/components/FilmPageComponents/WatchAllDevices/WatchAllDevices'
import CommentList from '@/components/FilmPageComponents/Comments/CommentList/CommentList'
import AdditionalsList from '@/components/FilmPageComponents/Additionals/AdditionalsList/AdditionalsList'
import AwardsList from '@/components/FilmPageComponents/Awards/AwardsList/AwardsList'
import CreatorsList from '@/components/FilmPageComponents/Creators/CreatorsList/CreatorsList'
import GaleryList from '@/components/FilmPageComponents/Galery/GaleryList/GaleryList'
import Description from '@/components/FilmPageComponents/Description/Description'
import ActorList from '@/components/FilmPageComponents/ActorList/ActorList'
import Premy from '@/components/FilmPageComponents/Premy/Premy'
import Rating from '@/components/FilmPageComponents/Rating/Rating'
import FreeFilmsButton from '@/components/FilmPageComponents/FreeFilmsButton/FreeFilmsButton'
import WatchOptions from '@/components/FilmPageComponents/WatchOptions/WatchOptions'

const Film: React.FC = () => {
    const [show, setShow] = useState(false)

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
                    <div className={style.trailer}>
                        <Trailer />
                        <div className={style.buttons}>
                            <div className={style.buttonsWrapper}>
                                <div className={style.trailerBtn}>
                                    <img src='/img/play.png' />
                                    <div>Трейлер</div>
                                </div>
                                <div className={style.marker}>
                                    <img src='/img/marker.png' />
                                </div>
                                <div className={style.share}>
                                    <img src='/img/share.png' />
                                </div>
                            </div>
                            <FreeFilmsButton />
                        </div>
                    </div>
                    <div className={style.info}>
                        <h2>1+1 (Фильм 2011)</h2>
                        <Description />
                        <ActorList />
                        <Premy />

                        <div
                            className={style.information}
                        >
                            <p>
                                Прикованный к инвалидному креслу аристократ нанимает
                                себе в помощники человека, который подходит для этой работы
                                меньше всего – только что освободившегося из тюрьмы темнокожего парня.
                                Трогательная и глубокая комедийная драма, получившая премии «Сезар», «Жорж» и
                                «Гойя».
                            </p>
                            {show ?
                                <div>
                                    <p>
                                        Пожилой аристократ Филипп, ставший парализованным в
                                        результате несчастного случая, ищет помощника с функциями сиделки.
                                        Ему нужен не просто человек, который стал бы его руками и ногами,
                                        а кто-то, кому можно доверять. В своём особняке Филипп проводит
                                        отбор кандидатов, и в итоге принимает неожиданное решение.
                                        К недоумению окружающих, работа достаётся тому, кто, казалось бы,
                                        меньше всего для неё подходит – бывшему заключённому, выросшему
                                        на окраинах.
                                    </p>
                                    <p>
                                        Чтобы узнать, что общего может быть у богатого инвалида и его
                                        неблагополучного помощника, смотри онлайн на Иви «1+1».
                                    </p>
                                    <p>
                                        Приглашаем посмотреть фильм «1+1» в нашем онлайн-кинотеатре в
                                        хорошем HD качестве. Приятного просмотра!
                                    </p>
                                    <WatchOptions />
                                </div>
                                :
                                <></>
                            }
                        </div>

                        <a
                            onClick={() => showDetails()}
                            className={style.details}
                        >
                            {show ? 'Свернуть детали' : 'Детали о фильме'}
                        </a>

                        <Rating />
                    </div>
                </div>

                <div className={style.infoVsisble}>
                    <h2>1+1 (Фильм 2011)</h2>
                    <Description />
                    <div className={style.trailer}>
                        <Trailer />
                    </div>
                    <div className={style.actorsAndButtons}>
                        <ActorList />
                        <div className={style.buttons}>
                            <div className={style.buttonsWrapper}>
                                <div className={style.trailerBtn}>
                                    <img src='/img/play.png' />
                                    <div>Трейлер</div>
                                </div>
                                <div className={style.buttonsIconsWrapper}>
                                    <div className={style.marker}>
                                        <img src='/img/marker.png' />
                                    </div>
                                    <div className={style.share}>
                                        <img src='/img/share.png' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Premy />
                    <FreeFilmsButton />

                    <div className={style.information}>
                        <p>
                            Прикованный к инвалидному креслу аристократ нанимает
                            себе в помощники человека, который подходит для этой работы
                            меньше всего – только что освободившегося из тюрьмы темнокожего парня.
                            Трогательная и глубокая комедийная драма, получившая премии «Сезар», «Жорж» и «Гойя».
                        </p>

                        {show ?
                            <div>
                                <p>
                                    Пожилой аристократ Филипп, ставший парализованным в
                                    результате несчастного случая, ищет помощника с функциями сиделки.
                                    Ему нужен не просто человек, который стал бы его руками и ногами,
                                    а кто-то, кому можно доверять. В своём особняке Филипп проводит
                                    отбор кандидатов, и в итоге принимает неожиданное решение.
                                    К недоумению окружающих, работа достаётся тому, кто, казалось бы,
                                    меньше всего для неё подходит – бывшему заключённому, выросшему
                                    на окраинах.
                                </p>
                                <p>
                                    Чтобы узнать, что общего может быть у богатого инвалида и его
                                    неблагополучного помощника, смотри онлайн на Иви «1+1».
                                </p>
                                <p>
                                    Приглашаем посмотреть фильм «1+1» в нашем онлайн-кинотеатре в
                                    хорошем HD качестве. Приятного просмотра!
                                </p>
                            </div>
                            :
                            <></>
                        }
                    </div>

                    <a
                        onClick={() => showDetails()}
                        className={style.details}
                    >
                        {show ? 'Свернуть' : 'Читать дальше'}
                    </a>


                    <Rating />
                    <WatchOptions />
                </div>
                <GaleryList />
                <CreatorsList />
                <AwardsList />
                <AdditionalsList />
                <CommentList />
                <WatchAllDevices />
            </div>
        </MainContainer>
    )
}

export default Film