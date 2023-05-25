'use client'

import React from 'react'
import Image from 'next/image'

import styles from './filmsRating.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

const FilmsRating: React.FC = () => {
    return (
        <div className={styles.films__rating}>
            <div className={styles.title}>
                <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg'
                       width={116}
                       height={28}
                       alt='top10'/>
                <span>за неделю</span>
            </div>
            <Swiper className='slider__rating'
                    spaceBetween={25}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number2.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number3.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number4.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number6.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number7.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number8.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number9.svg'
                                           width={48}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link className={styles.link} href='/'>
                        <div className={styles.wrapper}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}></div>
                                <div className={styles.imageFade}></div>
                                <div className={styles.placeNumber}>
                                    <Image src='https://solea-parent.dfs.ivi.ru/picture/bypass/number10.svg'
                                           width={60}
                                           height={66}
                                           alt='/'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsRating