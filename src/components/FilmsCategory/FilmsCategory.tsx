'use client'

import styles from './filmsCategory.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

import {BsChevronRight} from 'react-icons/bs'

import FilmCard from '@/components/FilmCard/FilmCard'
import {useLocale, useTranslations} from 'next-intl'

type FilmsCategoryProps = {
    title: string,
    titleEN: string,
    list: string[]
}
const FilmsCategory = ({title, titleEN, list}: FilmsCategoryProps) => {

    const locale = useLocale()

    const t = useTranslations('FilmsCategory')

    return (
        <div className={styles.films}>
            <Link href={'/movies'}>
                <div className={styles.films__title}>
                    <h2>{locale === 'ru' ? title : titleEN} <BsChevronRight size={21}/></h2>
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
                            spaceBetween: 25
                        }, 800: {
                            slidesPerView: 5,
                            slidesPerGroup: 4,
                            spaceBetween: 25
                        }, 600: {
                            slidesPerView: 4,
                            slidesPerGroup: 3,
                            spaceBetween: 25
                        }, 500: {
                            slidesPerView: 3,
                            slidesPerGroup: 2,
                            spaceBetween: 25
                        }, 300: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 25
                        }, 100: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 25
                        },
                    }}>
                {list.slice(0, 20).map((film: any) => (
                    <SwiperSlide key={film.id} className={styles.film}>
                        <FilmCard film={film}/>
                    </SwiperSlide>
                ))}
                <SwiperSlide className={styles.film}>
                    <Link href='/'>
                        <div className={styles.image__section}>{t('title')}</div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsCategory