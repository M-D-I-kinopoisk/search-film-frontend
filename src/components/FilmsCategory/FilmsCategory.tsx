import React from 'react'

import styles from '@/scss/pages/home.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

type FilmsCategoryProps = {
    className: string,
    title: string
}

const FilmsCategory: React.FC<FilmsCategoryProps> = ({className, title}) => {
    return (
        <div className={className}>
            <h2 className={styles.films__title}>{title}
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
            <Swiper className='slider__films'
                    spaceBetween={25}
                    slidesPerView={7}
                    slidesPerGroup={6}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                <SwiperSlide className={styles.item}>1</SwiperSlide>
                <SwiperSlide className={styles.item}>2</SwiperSlide>
                <SwiperSlide className={styles.item}>3</SwiperSlide>
                <SwiperSlide className={styles.item}>4</SwiperSlide>
                <SwiperSlide className={styles.item}>5</SwiperSlide>
                <SwiperSlide className={styles.item}>6</SwiperSlide>
                <SwiperSlide className={styles.item}>7</SwiperSlide>
                <SwiperSlide className={styles.item}>8</SwiperSlide>
                <SwiperSlide className={styles.item}>9</SwiperSlide>
                <SwiperSlide className={styles.item}>10</SwiperSlide>
                <SwiperSlide className={styles.item}>11</SwiperSlide>
                <SwiperSlide className={styles.item}>12</SwiperSlide>
                <SwiperSlide className={styles.item}>13</SwiperSlide>
                <SwiperSlide className={styles.item}>14</SwiperSlide>
                <SwiperSlide className={styles.item}>15</SwiperSlide>
                <SwiperSlide className={styles.item}>16</SwiperSlide>
                <SwiperSlide className={styles.item}>17</SwiperSlide>
                <SwiperSlide className={styles.item}>18</SwiperSlide>
                <SwiperSlide className={styles.item}>19</SwiperSlide>
                <SwiperSlide className={styles.item}>20</SwiperSlide>
                <SwiperSlide className={styles.item}>21</SwiperSlide>
                <SwiperSlide className={styles.item}>Показать все</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsCategory