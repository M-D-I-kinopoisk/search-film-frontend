import Link from 'next/link'
import {FC} from 'react'
import HeaderBanner from '@/components/Header/HeaderBaner/HeaderBanner'
import style from './DropDown.module.scss'
import DropDownProfile from '@/components/Header/DropDown/DropDownProfile/DropDownProfile'
import DropDownNotification from '@/components/Header/DropDown/DropDownNotification/DropDownNotification'
import DropDownFilter from '@/components/Header/DropDown/DropDownFilter/DropDownFilter'


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

    let list

    if (categoryDropDown == 'header-movies') {
        list = {
            genres: listGenres,
            country: [
                {name: 'Русские', href: '/movies/russia'},
                {name: 'США', href: '/movies/usa'},
                {name: 'Советское кино', href: '/movies/the%20ussr'},
            ],
            years: [
                {name: 'Фильмы 2023 года', href: '/movies?year=2023_2023'},
                {name: 'Фильмы 2022 года', href: '/movies?year=2022_2022'},
                {name: 'Фильмы 2021 года', href: '/movies?year=2021_2021'},
                {name: 'Фильмы 2020 года', href: '/movies?year=2020_2020'},
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
            genres: [
                {nameRU: 'Биография', nameEN: '#!'},
                {nameRU: 'Боевики', nameEN: '#!'},
                {nameRU: 'Военные', nameEN: '#!'},
                {nameRU: 'Детективы', nameEN: '#!'},
                {nameRU: 'Для всей семьи', nameEN: '#!'},
                {nameRU: 'Документальные', nameEN: '#!'},
                {nameRU: 'Дорамы', nameEN: '#!'},
                {nameRU: 'Драмы', nameEN: '#!'},
                {nameRU: 'Исторические', nameEN: '#!'},
                {nameRU: 'Криминальные', nameEN: '#!'},
                {nameRU: 'Медицинские', nameEN: '#!'},
                {nameRU: 'Мелодрамы', nameEN: '#!'},
                {nameRU: 'Мистические', nameEN: '#!'},
                {nameRU: 'Приключения', nameEN: '#!'},
                {nameRU: 'Романтические', nameEN: '#!'},
                {nameRU: 'Телешоу', nameEN: '#!'},
                {nameRU: 'Триллеры', nameEN: '#!'},
                {nameRU: 'Турецкие', nameEN: '#!'},
                {nameRU: 'Ужасы', nameEN: '#!'},
                {nameRU: 'Фантастика', nameEN: '#!'},
                {nameRU: 'Фэнтези', nameEN: '#!'},
            ],
            country: [
                {name: 'Русские', href: '#!'},
                {name: 'Зарубежные', href: '#!'},
                {name: 'Советское кино', href: '#!'},
            ],
            years: [
                {name: 'Фильмы 2023 года', href: '#!'},
                {name: 'Фильмы 2022 года', href: '#!'},
                {name: 'Фильмы 2021 года', href: '#!'},
                {name: 'Фильмы 2020 года', href: '#!'},
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
            genres: [
                {nameRU: 'Аниме', nameEN: '#!'},
                {nameRU: 'Боевик', nameEN: '#!'},
                {nameRU: 'Детектив', nameEN: '#!'},
                {nameRU: 'Для взрослых', nameEN: '#!'},
                {nameRU: 'Для всей семьи', nameEN: '#!'},
                {nameRU: 'Для детей', nameEN: '#!'},
                {nameRU: 'Драма', nameEN: '#!'},
                {nameRU: 'История', nameEN: '#!'},
                {nameRU: 'Комедия', nameEN: '#!'},
                {nameRU: 'Криминальные', nameEN: '#!'},
                {nameRU: 'Мюзикл', nameEN: '#!'},
                {nameRU: 'Полнометражные', nameEN: '#!'},
                {nameRU: 'Мистические', nameEN: '#!'},
                {nameRU: 'Приключения', nameEN: '#!'},
                {nameRU: 'Развивающие', nameEN: '#!'},
                {nameRU: 'Сериалы', nameEN: '#!'},
                {nameRU: 'Спорт', nameEN: '#!'},
                {nameRU: 'Триллер', nameEN: '#!'},
                {nameRU: 'Ужасы', nameEN: '#!'},
                {nameRU: 'Фантастика', nameEN: '#!'},
                {nameRU: 'Фэнтези', nameEN: '#!'},
            ],
            country: [
                {name: 'Советские', href: 'https://www.ivi.ru/animation/us'},
                {name: 'Русские', href: 'https://www.ivi.ru/animation/ru'},
                {name: 'Американские', href: 'https://www.ivi.ru/animation/us'},
                {name: 'Зарубежные', href: 'https://www.ivi.ru/animation/foreign'},
            ],
            years: [
                {name: 'Фильмы 2023 года', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2022 года', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2021 года', href: 'https://www.ivi.ru/animation/2023'},
                {name: 'Фильмы 2020 года', href: 'https://www.ivi.ru/animation/2023'},
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
