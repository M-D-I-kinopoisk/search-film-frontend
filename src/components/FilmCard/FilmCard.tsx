'use client'

import styles from './filmCard.module.scss'

import {RiBookmarkLine, RiMagicLine, RiStarLine} from 'react-icons/ri'
import {MdOutlineHideSource} from 'react-icons/md'
import {funcDeclination} from '@/utils/funcDeclination'

import Image from 'next/image'
import Link from 'next/link'

import {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {getFilmId, selectFilms} from '@/redux/FilmsSlice'
import {useLocale, useTranslations} from 'next-intl'

import {FilmCardProps} from '@/types/components/FilmCard'

const FilmCard = ({film}: FilmCardProps) => {

    const locale = useLocale()

    const [visible, setVisible] = useState(false)
    const t = useTranslations('FilmCard')

    const {filmId} = useSelector(selectFilms)
    const dispatch = useDispatch()
    const onMouseHandler = (id) => {
        dispatch(getFilmId(id))
        setVisible(true)
    }

    return (
        <div className={styles.linkContainer}>
            <Link onMouseEnter={() => onMouseHandler(film.id)}
                  onMouseLeave={() => setVisible(false)}
                  href={`/film/${film.id}`} className={styles.link}>
                <div className={styles.image__section}>
                    {visible && filmId === film.id && <div className={styles.visible}>
                        <div className={styles.hoards}>
                            <div className={styles.icon}>
                                <RiBookmarkLine size={25} fill={'#fff'}/>
                            </div>
                            <div className={styles.icon}>
                                <RiMagicLine size={25} fill={'#fff'}/>
                            </div>
                            <div className={styles.icon}>
                                <RiStarLine size={25} fill={'#fff'}/>
                            </div>
                            <div className={styles.icon}>
                                <MdOutlineHideSource size={25} fill={'#fff'}/>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.estimation}>
                                <div className={styles.rating}>
                                    <div className={styles.valueInteger}> {film.rating.toFixed(1)}</div>
                                </div>
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
                            <div className={styles.graphChart}>
                                <div className={styles.name}>{t('plot')}</div>
                                <div className={styles.graph}>
                                    <div className={styles.graphProgress}></div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div
                                    className={styles.text}>{film.year}, {locale === 'ru' ? film.country.nameRU : film.country.nameEN}
                                </div>
                                {film.genres.slice(0, 1).map((genre) => (
                                    <div className={styles.text}
                                         key={genre.id}>{locale === 'ru' ? genre.nameRU : genre.nameEN}</div>
                                ))}
                                <div
                                    className={styles.text}>{funcDeclination(film.duration, ['минута', 'минуты', 'минут'])}</div>
                            </div>
                        </div>
                    </div>}
                    {film.imageName === null ?
                        <Image
                            src={'/img/static-filmImage.jpg'}
                            width={170}
                            height={100}
                            alt='Film'/>
                        :
                        <Image src={`http://localhost:12120/api/films/images/${film.imageName}`}
                               width={170}
                               height={200}
                               alt='image none'/>}
                </div>
                <div className={styles.text__section}>
                    <div className={styles.title}>{locale === 'ru'  ? film.nameRU : (film.nameEN ? film.nameEN : film.nameRU) }</div>
                    <div className={styles.extra}>{t('free')}</div>
                </div>
            </Link>
        </div>
    )
}

export default FilmCard