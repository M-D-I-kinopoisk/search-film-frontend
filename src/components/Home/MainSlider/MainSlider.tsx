'use client'

import {useLocale} from 'next-intl'
import {useTranslations} from 'next-intl'

import styles from './mainSlider.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'
import Image from 'next/image'

import {compilations} from '@/data/Compilation'

const MainSlider = () => {
    const locale = useLocale()
    const t = useTranslations('MainSlider')
    
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
                        spaceBetween: 25,
                        slidesPerView: 1.5
                    }, 300: {
                        spaceBetween: 25,
                        slidesPerView: 1
                    }
                }}>
            {compilations.map((item) => (
                <SwiperSlide className='main__slide' key={item.id}>
                    <Link className={styles.slide} href={item.link}>
                        <Image className={styles.image}
                               width={1200}
                               height={520}
                               src={item.imageURL}
                               alt=''/>
                        <div className={styles.slide__content}>
                            <h3 className={styles.title}>{locale === 'ru' ? item.title : item.titleEN}</h3>
                            <div className={styles.subtitle}>{locale === 'ru' ? item.subtitle : item.subtitleEN}</div>
                            <button className={styles.showButton}>
                                {t('title')}
                            </button>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MainSlider