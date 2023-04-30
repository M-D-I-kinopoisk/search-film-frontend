import React from 'react'
import styles from './filmsInteresting.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

const FilmsInteresting: React.FC = () => {
    return (
        <div className={styles.interesting}>
            <h2 className={styles.title}>Cамое интересное</h2>
            <Swiper className='slider__interesting'
                    spaceBetween={25}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                <SwiperSlide className={styles.interesting__card}>
                    <Link className={styles.link} href='/'>1</Link>
                </SwiperSlide>
                <SwiperSlide className={styles.interesting__card}>
                    <Link className={styles.link} href='/'>2</Link>
                </SwiperSlide>
                <SwiperSlide className={styles.interesting__card}>
                    <Link className={styles.link} href='/'>3</Link>
                </SwiperSlide>
                <SwiperSlide className={styles.interesting__card}>
                    <Link className={styles.link} href='/'>4</Link>
                </SwiperSlide>
                <SwiperSlide className={styles.interesting__card}>
                    <Link className={styles.link} href='/'>СМОТРЕТЬ ВСЕ</Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsInteresting