'use client'

import styles from './filmCard.module.scss'

import {RiBookmarkLine, RiMagicLine, RiStarLine} from 'react-icons/ri'
import {MdOutlineHideSource} from 'react-icons/md'
import {funcDeclination} from '@/utils/funcDeclination'

import Image from 'next/image'
import Link from 'next/link'
import {Film} from '@/components/Film/InfoContent/InfoContent'

interface FilmCard {
    film: Film,
    filmId: string,
    visible: boolean
}

const FilmCart = ({film, filmId, visible}: FilmCard) => {

    return (
        <Link href={`/film/${film.id}`} className={styles.link}>
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
                            <div className={styles.name}>сюжет</div>
                            <div className={styles.graph}>
                                <div className={styles.graphProgress}></div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div
                                className={styles.text}>{film.year}, {film.country.nameRU}
                            </div>
                            {film.genres.slice(0, 1).map((genre) => (
                                <div className={styles.text}
                                     key={genre.id}>{genre.nameRU}</div>
                            ))}
                            <div
                                className={styles.text}>{funcDeclination(film.duration, ['минута', 'минуты', 'минут'])}</div>
                        </div>
                    </div>
                </div>}
                {film.imageName === null ?
                    <Image
                        src={'/img/static-filmImage.jpg'}
                        width={154}
                        height={100}
                        alt='Film'/>
                    :
                    <Image src={`http://localhost:12120/api/films/images/${film.imageName}`} width={154}
                           height={100}
                           alt='image none'/>}
            </div>
            <div className={styles.text__section}>
                <div className={styles.title}>{film.nameRU}</div>
                <div className={styles.extra}>Бесплатно</div>
            </div>
        </Link>
    )
}

export default FilmCart