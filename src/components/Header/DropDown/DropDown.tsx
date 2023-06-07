import Link from 'next/link'
import {FC} from 'react'
import HeaderBanner from '@/components/Header/HeaderBaner/HeaderBanner'
import style from './DropDown.module.scss'
import DropDownProfile from '@/components/Header/DropDown/DropDownProfile/DropDownProfile'
import DropDownNotification from '@/components/Header/DropDown/DropDownNotification/DropDownNotification'
import DropDownFilter from '@/components/Header/DropDown/DropDownFilter/DropDownFilter'
import {useLocale} from 'next-intl'


export interface DropDownProps {
    headerModule: boolean
    categoryDropDown: string
    handleMouseEnter: (e: any) => void
    handleMouseLeave: (e: any) => void
    scrollList: number
    setScrollList: (i: any) => void
    listGenres : object[]
}

const DropDown: FC<DropDownProps> = ({
                                         headerModule,
                                         categoryDropDown,
                                         handleMouseLeave,
                                         scrollList,
                                         setScrollList,
                                         listGenres,
                                     }) => {

    const locale = useLocale()

    let list

    if (categoryDropDown == 'header-movies') {
        list = {
            genres: listGenres,
            country: [
                {name: 'Русские', nameEN : 'Russians', href: '/movies/russia'},
                {name: 'США', nameEN : 'USA',  href: '/movies/usa'},
                {name: 'Советское кино', nameEN : 'Soviet cinema', href: '/movies/the%20ussr'},
            ],
            years: [
                {name: 'Фильмы 2023 года', nameEN : 'Movies 2023 years',  href: '/movies?year=2023_2023'},
                {name: 'Фильмы 2022 года', nameEN : 'Movies 2022 years', href: '/movies?year=2022_2022'},
                {name: 'Фильмы 2021 года', nameEN : 'Movies 2021 years', href: '/movies?year=2021_2021'},
                {name: 'Фильмы 2020 года', nameEN : 'Movies 2020 years', href: '/movies?year=2020_2020'},
            ],
            new: [
                {
                    name: 'Новинки',
                    href: 'https://www.ivi.ru/new/movie-new',
                } /*Готово */,
                {name: 'Подборки', href: 'https://www.ivi.ru/collections'},
                {
                    name: 'Иви рейтинг',
                    href: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
                },
                {name: 'Скоро на иви', href: 'https://www.ivi.ru/new/soon-ivi'},
                {name: 'Трейлеры', href: 'https://www.ivi.ru/trailers'},
                {name: 'Что посмореть', href: 'https://www.ivi.ru/goodmovies'},
                {
                    name: 'Фильмы в HD',
                    href: 'https://www.ivi.ru/collections/movies-hd',
                },
                {
                    name: 'Выбор иви',
                    href: 'https://www.ivi.ru/collections/vyibor-ivi',
                },
                {
                    name: 'Новинки подписки',
                    href: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
                },
                {
                    name: 'Выбор иви',
                    href: 'https://www.ivi.ru/collections/filmyi-amediateka',
                },
                {
                    name: 'Фильмы Amediateka',
                    href: 'https://www.ivi.ru/collections/filmyi-amediateka',
                },
                {
                    name: 'Популярные фильмы',
                    href: 'https://www.ivi.ru/collections/best-movies',
                },
                {
                    name: 'Фильмы иви',
                    href: 'https://www.ivi.ru/collections/ivi-originals',
                },
            ],
        }
    }

    if (categoryDropDown == 'header-series') {
        list = {
            genres: listGenres,
            country: [
                {name: 'Русские', nameEN : 'Russians',  href: '#!'},
                {name: 'США', nameEN : 'USA', href: '#!'},
                {name: 'Советское кино', nameEN : 'Soviet cinema',  href: '#!'},
            ],
            years: [
                {name: 'Фильмы 2023 года',  nameEN : 'Movies 2023 years', href: '#!'},
                {name: 'Фильмы 2022 года',  nameEN : 'Movies 2022 years', href: '#!'},
                {name: 'Фильмы 2021 года',  nameEN : 'Movies 2021 years', href: '#!'},
                {name: 'Фильмы 2020 года',  nameEN : 'Movies 2020 years', href: '#!'},
            ],
            new: [
                {
                    name: 'Новинки',
                    href: 'https://www.ivi.ru/new/series-new',
                } /*Готово */,
                {
                    name: 'Иви.Рейтинг',
                    href: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
                },
                {
                    name: 'Сериалы в HD',
                    href: 'https://www.ivi.ru/collections/series-hd',
                },
                {
                    name: 'Бесплатные сериалы',
                    href: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
                },
                {
                    name: 'Сериалы Amediateka',
                    href: 'https://www.ivi.ru/collections/serialyi-amediateka',
                },
                {
                    name: 'Сериалы Paramount Play',
                    href: 'https://www.ivi.ru/collections/series-paramount-play',
                },
            ],
        }
    }

    if (categoryDropDown == 'header-animation') {
        list = {
            genres:  listGenres,
            country: [
                {name: 'Советские', nameEN : 'Soviet', href: 'https://www.ivi.ru/animation/us'},
                {name: 'Русские', nameEN : 'Russians', href: 'https://www.ivi.ru/animation/ru'},
                {name: 'Американские', nameEN : 'American', href: 'https://www.ivi.ru/animation/us'},
                {name: 'Зарубежные', nameEN : 'Foreign', href: 'https://www.ivi.ru/animation/foreign'},
            ],
            years: [
                {name: 'Фильмы 2023 года',  nameEN : 'Movies 2023 years', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2022 года',  nameEN : 'Movies 2022 years', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2021 года',  nameEN : 'Movies 2021 years', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2020 года',  nameEN : 'Movies 2020 years', href: 'https://www.ivi.ru/animation/2023'},
            ],
            new: [
                {name: 'Новинки', href: 'https://www.ivi.ru/new/animation-new'},
                {
                    name: 'Мультики в HD',
                    href: 'https://www.ivi.ru/collections/cartoons-hd',
                },
                {
                    name: 'Мультфильмы Paramount Play / Nickelodeon',
                    href: 'https://www.ivi.ru/collections/animation-paramount-play',
                },
                {
                    name: 'Мультфильмы Dreamworks',
                    href: 'https://www.ivi.ru/collections/dreamworks-cartoons',
                },
                {
                    name: 'Мультфильмы СТС Kids',
                    href: 'https://www.ivi.ru/collections/ctc-kids',
                },
            ],
        }
    }


    return (
        <>
            <div className={headerModule ? `${style.dropDown}` : `${style.dropDown_disable}`}>
                <div
                    className={style.dropDown__container}
                    onMouseLeave={handleMouseLeave}>
                    {(categoryDropDown == 'header-movies' ||
                        categoryDropDown == 'header-series' ||
                        categoryDropDown == 'header-animation') && (
                        <div className={style.dropDown__block}>

                            <DropDownFilter list={list}/>

                            <div className={style.dropDown__rightBlock}>
                                <ul className={style.dropDown__new}>
                                    {list.new.map((element, idx) => {
                                        return (
                                            <li key={idx} onMouseEnter={() => setScrollList(idx)}>
                                                <Link
                                                    className={
                                                        idx == scrollList
                                                            ? `${style.dropDown__newLink} ${style.dropDown__newLinkActive}`
                                                            : style.dropDown__newLink
                                                    }
                                                    href={element.href}>
                                                    {element.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <HeaderBanner/>

                            </div>
                        </div>
                    )}

                    {categoryDropDown === 'header-notifications' && (

                        <DropDownNotification/>

                    )}

                    {categoryDropDown === 'header-user' && (

                        <DropDownProfile/>

                    )}
                </div>
            </div>
        </>
    )
}

export default DropDown
