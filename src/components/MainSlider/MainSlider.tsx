'use client'

import React from 'react'

import styles from '@/app/home.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'
import Image from 'next/image'

const MainSlider: React.FC = () => {

    const compilations = [
        {
            imageURL: 'https://thumbs.dfs.ivi.ru/storage2/contents/0/a/3968a59b80ff14ce76a96299850bde.jpg/1216x524/?q=85',
            title: 'Пропуск в мир аниме за 1 рубль',
            subtitle: 'Успей купить шедевры Хаяо Миядзаки до 31 мая, и они останутся с тобой навсегда',
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
            imageURL: 'https://thumbs.dfs.ivi.ru/storage33/contents/1/4/c3d16554533406ac90475bfda5989f.jpg/1216x524/?q=85',
            title: 'Роскошные корейские дорамы',
            subtitle: 'Главный культурный феномен последних лет',
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
                slidesPerView={1.5}
                speed={800}
                navigation={true}
                loop={true}
                centeredSlides={true}>
            {compilations.map((item) => (
                <SwiperSlide className='main__slide' key={item.id}>
                    <Link className={styles.slide} href='/actor'>
                        <Image className={styles.image}
                               src={item.imageURL}
                               layout='fill'
                               objectFit='cover'
                               objectPosition='center'
                               alt=''/>
                        <div className={styles.slide__content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.subtitle}>{item.subtitle}</div>
                            <button className={styles.showButton}>
                                Смотреть по подписке
                            </button>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MainSlider