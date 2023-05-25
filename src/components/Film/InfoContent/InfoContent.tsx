'use client'

import React, {useState} from 'react'

import styles from './InfoContent.module.scss'
import WatchOptions from '@/components/Film/WatchOptions/WatchOptions'
import Image from 'next/image'
import MyButton from '@/components/UI/MyButton/MyButton'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'
import MainInfo from '@/components/Film/MainInfo/MainInfo'
import {funcDeclination} from '@/utils/funcDeclination'

export type infoProps = {
    film: {
        year: number,
        rating: number,
        ageRating: string,
        duration: number,
        nameRU: string,
        nameEN: string,
        genres: object[],
        countRating: number
    }, filmInfo: {
        trailerLink: string,
        text: string
    }
}

const InfoContent = ({film, filmInfo}: infoProps) => {
    const [visible, setVisible] = useState(false)
    const actors = [1, 2, 3, 4]

    return (
        <div className={styles.infoContent}>
            <MainInfo film={film} filmInfo={filmInfo}/>
            <div className={styles.otherInfo}>
                <div className={styles.actors}>
                    <div className={styles.actor}>
                        <div className={styles.actorWrapper}>
                            <div><h3>{film.rating}</h3></div>
                        </div>

                        <div className={styles.rating}>
                            Рейтинг Иви
                        </div>
                    </div>

                    {actors.map((el) =>
                        <div key={el}
                             className={styles.actor}>
                            <div className={styles.actorWrapper}>
                                <div className={styles.actorImage}>
                                    <Image alt='Актер'
                                           width={44}
                                           height={44}
                                           src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85'/>
                                </div>
                            </div>

                            <div className={styles.actorName}>
                                Франсуа Клюзе
                            </div>
                        </div>
                    )}
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
                <p>{filmInfo.text}...</p>
                {visible && <div>
                    <div className={styles.hideWatchOptions}>
                        <WatchOptions/>
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
                    <h3>{film.rating}</h3>

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
                <WatchOptions/>
            </div>
        </div>
    )
}

export default InfoContent