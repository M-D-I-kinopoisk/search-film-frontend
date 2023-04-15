import React from 'react'

import styles from '../scss/pages/home.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'

const Home: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Swiper spaceBetween={20}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    initialSlide={0}
                    slidesPerView={1.5}
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    className='mySwiper'>
                <Link href='/'>
                    <SwiperSlide>1</SwiperSlide>
                </Link>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
                <SwiperSlide>6</SwiperSlide>
            </Swiper>

            <div className={styles.container}>

            </div>
        </div>
    )
}

export default Home