'use client'

import {useState} from 'react'

import styles from './filmInfo.module.scss'

import Image from 'next/image'

import {BsPlay} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import {MdOndemandVideo} from 'react-icons/md'

import MainFilmInfo from '@/components/Film/FilmInfo/MainFilmInfo/MainFilmInfo'
import UserButton from '@/components/UI/UserButton/UserButton'
import FilmWatchOptions from '@/components/Film/FilmWatchOptions/FilmWatchOptions'

import {useLocale, useTranslations} from 'next-intl'

import {funcDeclination} from '@/utils/funcDeclination'
import Link from 'next/link'

import {infoContentProps} from '@/types/components/Film'

const FilmInfo = ({film, filmInfo, actors}: infoContentProps) => {

    const locale = useLocale()

    const t = useTranslations('FilmInfo')

    const [visible, setVisible] = useState(false)

    return (
        <div className={styles.filmInfo}>
            <div className={styles.mainInfoContainer}>
                <MainFilmInfo film={film}/>
            </div>
            <div className={styles.otherInfo}>
                <div className={styles.actors}>
                    <div className={styles.actor}>
                        <div className={styles.actorWrapper}>
                            <div><h3>{film.rating.toFixed(1)}</h3></div>
                        </div>
                        <div className={styles.rating}>
                            {t('title')}
                        </div>
                    </div>
                    {actors.slice(0, 4).map((actor) => (
                        <Link href={`/person/${actor.member.id}`} key={actor.id} className={styles.actor}>
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
                                {locale === 'ru' ? actor.member.nameRU :   (actor.member.nameEN ? actor.member.nameEN : actor.member.nameRU) }
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.userButtons}>
                    <UserButton text={t('btn')}
                                icon={<BsPlay size={16} color='rgba(255,255,255,.72)'/>}
                                nameClass='trailerButton'/>

                    <div className={styles.buttonsWrapper}>
                        <UserButton
                            icon={<BsBookmark size={16} color='rgba(255,255,255,.72)'/>}
                            nameClass='markerButton'/>

                        <UserButton icon={<FiShare size={16} color='rgba(255,255,255,.72)'/>}
                                    nameClass='shareButton'/>
                    </div>
                </div>
            </div>

            <div className={styles.freeFilmsWrapper}>
                <UserButton text={t('btn2')}
                            icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)'/>}
                            nameClass='freeFilmsButton'/>
            </div>

            <div className={styles.filmDescription}>
                <p>{filmInfo.text}</p>
                {visible && <div>
                    <div className={styles.hideWatchOptions}>
                        <FilmWatchOptions film={film}/>
                    </div>
                </div>}
            </div>

            <span onClick={() => setVisible(!visible)}
                  className={styles.detailsButton}>
                    {visible ? t('toggle') : t('toggle1')}
                        </span>

            <span onClick={() => setVisible(!visible)}
                  className={styles.showDetailsButton}>
                    {visible ? t('toggle2') : t('toggle3')}
                        </span>

            <div className={styles.filmRating}>
                <div className={styles.filmRatingWrapper}>
                    <h3>{film.rating.toFixed(1)}</h3>

                    <div className={styles.filmRatingDescription}>
                        <h3>{t('title')}</h3>
                        <p>{t('title1')}</p>
                        <p>{funcDeclination(film.countRating, ['оценка', 'оценки', 'оценок'])}</p>
                    </div>
                </div>

                <div className={styles.evaluateButton}>
                    {t('title2')}
                </div>
            </div>

            <div className={styles.showWatchOptions}>
                <FilmWatchOptions film={film}/>
            </div>
        </div>
    )
}

export default FilmInfo