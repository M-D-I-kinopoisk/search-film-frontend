import React from 'react'

import styles from '../scss/pages/home.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'
import TeaserBtn from '@/components/UI/TeaserBtn'

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
                    speed={800}
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    className='mySwiper'>
                <SwiperSlide>
                    1
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    2
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    3
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    4
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    5
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    6
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    7
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
                <SwiperSlide>
                    8
                    <Link href='/Actor' className={styles.slide}></Link>
                </SwiperSlide>
            </Swiper>
            <div className={styles.container}>
                <ul className={styles.teaserList}>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'
                               alt='/' width={24} height={32} text='30 дней подписки за 1 ₽'
                               className={styles.teaserItem}/>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg'
                               alt='/' width={56} height={32} text='Активировать сертификат'
                               className={styles.teaserItem}/>
                </ul>
            </div>
        </div>
    )
}

export default Home