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
                {/* сюда приходят все фильмы по категориям на главной, прост перебираем их и делает компоненту ну и вставляет данные
                (они дожны быть одинаковыми) кроме наполнения фильмов, разумеется*/}
                <h2 className={styles.filmsTitle}>Рекомендую посмотреть
                    <svg width='20px' height='22px' viewBox='-4.5 0 20 20' version='1.1'
                         xmlns='http://www.w3.org/2000/svg'>
                        <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                            <g id='Dribble-Light-Preview' transform='translate(-305.000000, -6679.000000)'
                               fill='#ffffff'>
                                <g id='icons' transform='translate(56.000000, 160.000000)'>
                                    <path
                                        d='M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769'
                                        id='arrow_right-[#336]'>

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </h2>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home