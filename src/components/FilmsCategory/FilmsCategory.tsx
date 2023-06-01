'use client'

import React from 'react'

import styles from './filmsCategory.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

import {BsChevronRight} from 'react-icons/bs'

import FilmCard from '@/components/FilmCard/FilmCard'

type FilmsCategoryProps = {
    title: string,
    titleEN: string
    list: string[]
}
const FilmsCategory: React.FC<FilmsCategoryProps> = ({title, titleEN, list}) => {

    return (
        <div className={styles.films}>
            <Link href={`/movies/${titleEN}`}>
                <h2 className={styles.films__title}>{title}
                    <BsChevronRight size={21}/>
                </h2>
            </Link>
            <Swiper className='slider__films'
                    spaceBetween={25}
                    slidesPerView={7}
                    slidesPerGroup={6}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                {list.slice(0, 20).map((film: any) => (
                    <SwiperSlide key={film.id} className={styles.film}>
                        <FilmCard film={film}/>
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