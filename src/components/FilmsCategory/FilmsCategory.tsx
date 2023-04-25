import React from 'react'

// import styles from '@/scss/pages/home.module.scss'

import styles from './filmsCategory.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import Link from 'next/link'

import {RiMagicLine, RiBookmarkLine, RiStarLine} from 'react-icons/ri'
import {MdOutlineHideSource} from 'react-icons/md'
import {BsChevronRight} from 'react-icons/bs'

type FilmsCategoryProps = {
    title: string
}
const FilmsCategory: React.FC<FilmsCategoryProps> = ({title}) => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className={styles.films}>
            <h2 className={styles.films__title}>{title}
                <BsChevronRight size={21}/>
            </h2>
            <Swiper className='slider__films'
                    spaceBetween={25}
                    slidesPerView={7}
                    slidesPerGroup={6}
                    speed={700}
                    modules={[Navigation]}
                    navigation={true}>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}
                          onMouseEnter={() => setVisible(true)}
                          onMouseLeave={() => setVisible(false)}>
                        <div className={styles.image__section}>
                            {visible && <div>
                                <div className={styles.hoards}>
                                    <div className={styles.icon}>
                                        <RiBookmarkLine size={25} fill={'#fff'}/>
                                    </div>
                                    <div className={styles.icon}>
                                        <RiMagicLine size={25} fill={'#fff'}/>
                                    </div>
                                    <div className={styles.icon}>
                                        <RiStarLine size={25} fill={'#fff'}/>
                                    </div>
                                    <div className={styles.icon}>
                                        <MdOutlineHideSource size={25} fill={'#fff'}/>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.estimation}>
                                        <div className={styles.rating}>
                                            <div className={styles.valueInteger}>8</div>
                                            <div className={styles.valueFraction}>,5</div>
                                        </div>
                                        <div className={styles.graphs}>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.graphChart}>
                                        <div className={styles.name}>сюжет</div>
                                        <div className={styles.graph}>
                                            <div className={styles.graphProgress}></div>
                                        </div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.text}>2018, Россия, Драмы</div>
                                        <div className={styles.text}>1 сезон</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Академия сверхъестественного</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/' className={styles.link}>
                        <div className={styles.image__section}></div>
                        <div className={styles.text__section}>
                            <div className={styles.title}>Лунтик и его друзья</div>
                            <div className={styles.extra}>Бесплатно</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.film}>
                    <Link href='/'>
                        <div className={styles.image__section}>Посмотреть все</div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilmsCategory