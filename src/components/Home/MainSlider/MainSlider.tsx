'use client'

import React from 'react'

import styles from './mainSlider.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'
import Image from 'next/image'

const MainSlider: React.FC = () => {

    const compilations = [
        {
            imageURL: 'https://thumbs.dfs.ivi.ru/storage33/contents/e/6/d9d1fabb4fbbee5b8d119efacc73ff.jpg/1216x524/?q=85',
            title: 'Лето начинается внезапно',
            subtitle: 'Успей оценить фильмы из праздничной подборки',
            id: '1'
        },
        {
            imageURL: 'https://thumbs.dfs.ivi.ru/storage26/contents/4/e/50c28426a058c364d45d4684e6a389.jpg/1216x524/?q=85',
            title: 'В главной роли: Стив Бушеми',
            subtitle: 'Легенда криминального кино, мафиози, гений, любитель дробилок для дерева',
            id: '2'
        },
        {
            imageURL: 'https://thumbs.dfs.ivi.ru/storage39/contents/3/a/8c311940d6da670ff289de283cc85a.jpg/1216x524/?q=85',
            title: 'Быстрее пули (ну почти)',
            subtitle: 'Все фильмы величайшей семейной экшн франшизы «Форсаж»',
            id: '3'
        },
        {
            imageURL: 'https://thumbs.dfs.ivi.ru/storage4/contents/8/e/38164799443c7d7ec1039886ba7ddb.jpg/1216x524/?q=85',
            title: 'Для тех кто хочет, хочет опять',
            subtitle: 'Лучшие фильмы по мнению зрителей',
            id: '4'
        }
    ]

    return (
        <Swiper className='main__slider'
                spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                initialSlide={0}
                speed={800}
                navigation={true}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                    1060: {
                        slidesPerView: 1.5
                    }, 300: {
                        slidesPerView: 1
                    }
                }}>
            {compilations.map((item) => (
                <SwiperSlide className='main__slide' key={item.id}>
                    <Link className={styles.slide} href='/actor'>
                        <Image className={styles.image}
                               width={1200}
                               height={520}
                               src={item.imageURL}
                               alt=''/>
                        <div className={styles.slide__content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.subtitle}>{item.subtitle}</div>
                            <button className={styles.showButton}>
                              Показать подборку
                            </button>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MainSlider