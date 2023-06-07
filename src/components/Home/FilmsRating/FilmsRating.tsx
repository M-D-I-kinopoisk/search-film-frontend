'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './filmsRating.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import React from 'react'
import {useTranslations} from 'next-intl'

type Film = {
    rating: number,
    id: string,
    imageName: string

}

interface FilmsRating {
    ratingFilms: Film[]
}

const FilmsRating = ({ratingFilms}: FilmsRating) => {

    const t = useTranslations('FilmsRating')

    const topFilmsImg = [
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number2.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number3.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number4.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number6.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number7.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number8.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number9.svg',
        'https://solea-parent.dfs.ivi.ru/picture/bypass/number10.svg',
    ]

    const FilmsBySortRating = ratingFilms.sort((a, b) => b.rating - a.rating)
    const filmsWithTop = FilmsBySortRating.map((film, index) => ({
        ...film,
        imageTop: topFilmsImg[index],
    }))

    return (
        <div className={styles.films__rating}>
            <div className={styles.title}>
                <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg'
                       width={116}
                       height={28}
                       alt='top10'/>
                <span>{t('title')}</span>
            </div>
            <Swiper className='slider__rating'
                    spaceBetween={25}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        1090: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        }, 900: {
                            slidesPerView: 4,
                            slidesPerGroup: 4
                        }, 750: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        }, 470: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        }, 300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1
                        },
                    }}>
                {filmsWithTop.slice(0, 10).map((film) => (
                    <SwiperSlide key={film.id} className={styles.film}>
                        <Link className={styles.link} href={`/film/${film.id}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.image}>
                                        {film.imageName === null ?
                                            <Image
                                                src={'/img/static-filmImage1.jpg'}
                                                width={221}
                                                height={450}
                                                alt='image rating'/> :
                                            <Image src={`http://localhost:12120/api/films/images/${film.imageName}`}
                                                   width={221}
                                                   height={450}
                                                   alt={'image rating'}/>
                                        }
                                    </div>
                                    <div className={styles.imageFade}></div>
                                    <div className={styles.placeNumber}>
                                        <Image src={film.imageTop}
                                               width={55}
                                               height={66}
                                               alt='/'/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default FilmsRating