'use client'

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
    titleEN: string,
    list: string[]
}
const FilmsCategory = ({title, titleEN, list}: FilmsCategoryProps) => {

    return (
        <div className={styles.films}>
            <Link href={`/movies/${titleEN}`}>
                <div className={styles.films__title}>
                    <h2>{title} <BsChevronRight size={21}/></h2>
                </div>
            </Link>
            <Swiper className='slider__films'
                    spaceBetween={25}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        1310: {
                            slidesPerView: 7,
                            slidesPerGroup: 6
                        }, 960: {
                            slidesPerView: 6,
                            slidesPerGroup: 5,
                            spaceBetween: 15
                        }, 800: {
                            slidesPerView: 5,
                            slidesPerGroup: 4,
                            spaceBetween: 15
                        }, 600: {
                            slidesPerView: 4,
                            slidesPerGroup: 3,
                            spaceBetween: 15
                        }, 500: {
                            slidesPerView: 3,
                            slidesPerGroup: 2,
                            spaceBetween: 15
                        }, 300: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 15
                        }, 100: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 15
                        },
                    }}>
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