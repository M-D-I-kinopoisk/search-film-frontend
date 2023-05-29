'use client'

import React, {useState} from 'react'

import styles from './InfoContent.module.scss'

import Image from 'next/image'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'

import MainInfo from '@/components/Film/MainInfo/MainInfo'
import MyButton from '@/components/UI/MyButton/MyButton'
import WatchOptions from '@/components/Film/WatchOptions/WatchOptions'

import {funcDeclination} from '@/utils/funcDeclination'

import {useDispatch, useSelector} from 'react-redux'
import {getComments, getFilms, getFilmsInfo, selectFilms} from '@/redux/FilmsSlice'

export type Film = {
    year: number,
    rating: number,
    ageRating: string,
    duration: number,
    nameRU: string,
    nameEN: string,
    genres: object[],
    countRating: number,
    imageName: string,
}

export type FilmInfo = {
    trailerLink: string,
    text: string
}

export type Actor = {
    member: {
        id: string,
        nameEN: string,
        nameRU: string,
        imageName: string
    },
    profession: {
        nameRU: string
    },
    id: string
}

export type Comment = {
    id: number,
    profile: {
        profileName: string
    },
    createdAt: string,
    text: string
}


export interface infoContentProps {
    filmInfo: FilmInfo,
    film: Film,
    actors: Actor[],
    filmComments: Comment
}

const InfoContent = ({film, filmInfo, actors, filmComments}: infoContentProps) => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getFilms(film))
        dispatch(getFilmsInfo(filmInfo))
        dispatch(getComments(filmComments))
    }, [])

    return (
        <div className={styles.infoContent}>
            <MainInfo film={film}/>
            <div className={styles.otherInfo}>
                <div className={styles.actors}>
                    <div className={styles.actor}>
                        <div className={styles.actorWrapper}>
                            <div><h3>{film.rating.toFixed(1)}</h3></div>
                        </div>
                        <div className={styles.rating}>
                            Рейтинг Иви
                        </div>
                    </div>
                    {actors.slice(0, 4).map((actor) => (
                        <div key={actor.id} className={styles.actor}>
                            <div className={styles.actorWrapper}>
                                <div>
                                    {actor.member.imageName === null ?
                                        <Image className={styles.img}
                                               alt='Создатель'
                                               width={44}
                                               height={44}
                                               src={`http://localhost:12120/api/films/images/${film.imageName}`}/>
                                        :
                                        <Image className={styles.img}
                                               alt='Создатель'
                                               width={44}
                                               height={44}
                                               src={actor.member.imageName}/>}
                                </div>
                            </div>
                            <div className={styles.actorName}>
                                {actor.member.nameRU}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.userButtons}>
                    <MyButton text={'Трейлер'}
                              icon={<BsPlay size={16} color='rgba(255,255,255,.72)'/>}
                              nameClass='trailerButton'/>

                    <div className={styles.buttonsWrapper}>
                        <MyButton
                            icon={<BsBookmark size={16} color='rgba(255,255,255,.72)'/>}
                            nameClass='markerButton'/>

                        <MyButton icon={<FiShare size={16} color='rgba(255,255,255,.72)'/>}
                                  nameClass='shareButton'/>
                    </div>
                </div>
            </div>

            <div className={styles.premy}>
                <Image alt='Премия'
                       width={58}
                       height={58}
                       src='https://thumbs.dfs.ivi.ru/storage29/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85'/>

                <div className={styles.premyInfo}>
                    <h3>Жорж</h3>

                    <div className={styles.premyDescription}>
                        Лучшая зарубежная комедия, Лучшая зарубежная драма,
                        Лучший европейский фильм, Лучший актер
                    </div>
                </div>
            </div>

            <div className={styles.freeFilmsWrapper}>
                <MyButton text={'Бесплатные фильмы'}
                          icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)'/>}
                          nameClass='freeFilmsButton'/>
            </div>

            <div className={styles.filmDescription}>
                <p>{filmInfo.text}</p>
                {visible && <div>
                    <div className={styles.hideWatchOptions}>
                        <WatchOptions film={film}/>
                    </div>
                </div>}
            </div>

            <span onClick={() => setVisible(!visible)}
                  className={styles.detailsButton}>
                    {visible ? 'Свернуть детали' : 'Детали о фильме'}
                        </span>

            <span onClick={() => setVisible(!visible)}
                  className={styles.showDetailsButton}>
                    {visible ? 'Свернуть' : 'Читать дальше'}
                        </span>

            <div className={styles.filmRating}>
                <div className={styles.filmRatingWrapper}>
                    <h3>{film.rating.toFixed(1)}</h3>

                    <div className={styles.filmRatingDescription}>
                        <h3>Рейтинг Иви</h3>
                        <p>Интересный сюжет</p>
                        <p>{funcDeclination(film.countRating, ['оценка', 'оценки', 'оценок'])}</p>
                    </div>
                </div>

                <div className={styles.evaluateButton}>
                    Оценить
                </div>
            </div>

            <div className={styles.showWatchOptions}>
                <WatchOptions film={film}/>
            </div>
        </div>
    )
}

export default InfoContent