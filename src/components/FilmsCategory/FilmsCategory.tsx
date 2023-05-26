'use client'

import React from 'react'

import styles from './filmsCategory.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

import {RiMagicLine, RiBookmarkLine, RiStarLine} from 'react-icons/ri'
import {MdOutlineHideSource} from 'react-icons/md'
import {BsChevronRight} from 'react-icons/bs'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {getFilmId, selectFilms} from '@/redux/FilmsSlice'
import {funcDeclination} from '@/utils/funcDeclination'

type FilmsCategoryProps = {
    title: string,
    list: string[]
}
const FilmsCategory: React.FC<FilmsCategoryProps> = ({title, list}) => {
    const [visible, setVisible] = React.useState(false)
    const {filmId} = useSelector(selectFilms)
    const dispatch = useDispatch()
    const onMouseHandler = (id) => {
        dispatch(getFilmId(id))
        setVisible(true)
    }

    return (
        <div className={styles.films}>
            <h2 className={styles.films__title}>{title}
                <BsChevronRight size={21}/>
            </h2>
            <Swiper className='slider__films'
                    spaceBetween={25}
                    slidesPerView={7}
                    slidesPerGroup={6}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                {list.map((film: any) => (
                    <SwiperSlide key={film.id} className={styles.film}
                                 onClick={() => onMouseHandler(film.id)}
                                 onMouseEnter={() => onMouseHandler(film.id)}
                                 onMouseLeave={() => setVisible(false)}>
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
                                                <div className={styles.valueInteger}> {film.rating}</div>
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
                                {(film.image !== null) &&
                                    <Image src={`http://localhost:12120/api/films/images/${film.imageName}`} width={154} height={100}
                                           alt='image none'/>}
                            </div>
                            <div className={styles.text__section}>
                                <div className={styles.title}>{film.nameRU}</div>
                                <div className={styles.extra}>Бесплатно</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <SwiperSlide className={styles.film}>
                    <Link href='/'>
                        <div className={styles.image__section}>Посмотреть все</div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsCategory