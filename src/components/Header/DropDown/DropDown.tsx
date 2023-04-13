import Link from 'next/link'
import style from './DropDown.module.scss'
import {FC} from 'react'


export interface DropDownProps {
    categoryDropDown: string
    // setCategoryDropDown : (e) => void,
    handleMouseEnter: (e: any) => void,
    handleMouseLeave: (e: any) => void
}


const DropDown: FC<DropDownProps> = ({categoryDropDown, handleMouseEnter, handleMouseLeave}) => {

    let list = {genres: [], country: [], years: []}

    console.log(categoryDropDown)


    if (categoryDropDown == 'movies') {
        list = {
            genres: [
                {name: 'Артхаус', href: '/movies/arthouse'},
                {name: 'Боевики', href: '/movies/boeviki'},
                {name: 'Вестерн', href: '/movies/western'},
                {name: 'Военные', href: '/movies/voennye'},
                {name: 'Детективы', href: '/movies/detective'},
                {name: 'Для всей семьи', href: '/movies/dlya_vsej_semi'},
                {name: 'Для детей', href: '/movies/dlya_vsej_semi'},
                {name: 'Документальные', href: '/movies/dlya_vsej_semi'},
                {name: 'Драмы', href: '/movies/dlya_vsej_semi'},
                {name: 'Исторические', href: '/movies/dlya_vsej_semi'},
                {name: 'Катастрофы', href: '/movies/dlya_vsej_semi'},
                {name: 'Комедии', href: '/movies/dlya_vsej_semi'},
                {name: 'Криминальные', href: '/movies/dlya_vsej_semi'},
                {name: 'Мелодрамы', href: '/movies/dlya_vsej_semi'},
                {name: 'Мистические', href: '/movies/dlya_vsej_semi'},
                {name: 'По комиксам', href: '/movies/dlya_vsej_semi'},
                {name: 'Приключения', href: '/movies/dlya_vsej_semi'},
                {name: 'Спорт', href: '/movies/dlya_vsej_semi'},
                {name: 'Триллеры', href: '/movies/dlya_vsej_semi'},
                {name: 'Ужасы', href: '/movies/dlya_vsej_semi'},
                {name: 'Фантастика', href: '/movies/dlya_vsej_semi'},
                {name: 'Фэнтези', href: '/movies/dlya_vsej_semi'},
            ],
            country: [
                {name: 'Русские', href: '/movies/ru'},
                {name: 'Зарубежные', href: '/movies/foreign'},
                {name: 'Советское кино', href: '/movies/su'},
            ],
            years: [
                {name: 'Фильмы 2023 года', href: '/movies/2023'},
                {name: 'Фильмы 2022 года', href: '/movies/2023'},
                {name: 'Фильмы 2021 года', href: '/movies/2023'},
                {name: 'Фильмы 2020 года', href: '/movies/2023'},
            ]
        }
    }

    if (categoryDropDown == 'series') {
        list = {
            genres: [
                {name: 'Биография', href: '/series/arthouse'},
                {name: 'Боевики', href: '/series/boeviki'},
                {name: 'Военные', href: '/series/western'},
                {name: 'Детективы', href: '/series/voennye'},
                {name: 'Для всей семьи', href: '/series/detective'},
                {name: 'Документальные', href: '/series/dlya_vsej_semi'},
                {name: 'Дорамы', href: '/series/dlya_vsej_semi'},
                {name: 'Драмы', href: '/series/dlya_vsej_semi'},
                {name: 'Исторические', href: '/series/dlya_vsej_semi'},
                {name: 'Криминальные', href: '/series/dlya_vsej_semi'},
                {name: 'Медицинские', href: '/series/dlya_vsej_semi'},
                {name: 'Мелодрамы', href: '/series/dlya_vsej_semi'},
                {name: 'Мистические', href: '/series/dlya_vsej_semi'},
                {name: 'Приключения', href: '/series/dlya_vsej_semi'},
                {name: 'Романтические', href: '/series/dlya_vsej_semi'},
                {name: 'Телешоу', href: '/series/dlya_vsej_semi'},
                {name: 'Триллеры', href: '/series/dlya_vsej_semi'},
                {name: 'Турецкие', href: '/series/dlya_vsej_semi'},
                {name: 'Ужасы', href: '/series/dlya_vsej_semi'},
                {name: 'Фантастика', href: '/series/dlya_vsej_semi'},
                {name: 'Фэнтези', href: '/series/dlya_vsej_semi'},
            ],
            country: [
                {name: 'Русские', href: '/series/ru'},
                {name: 'Зарубежные', href: '/series/ru'},
                {name: 'Советское кино', href: '/series/su'},
            ],
            years: [
                {name: 'Фильмы 2023 года', href: '/series/2023'},
                {name: 'Фильмы 2022 года', href: '/series/2023'},
                {name: 'Фильмы 2021 года', href: '/series/2023'},
                {name: 'Фильмы 2020 года', href: '/series/2023'},
            ]
        }
    }


    if (categoryDropDown == 'animation') {
        list = {
            genres: [


                {name: 'Аниме', href: '/series/arthouse'},
                {name: 'Боевик', href: '/series/boeviki'},
                {name: 'Детектив', href: '/series/western'},
                {name: 'Для взрослых', href: '/series/voennye'},
                {name: 'Для всей семьи', href: '/series/detective'},
                {name: 'Для детей', href: '/series/dlya_vsej_semi'},
                {name: 'Драма', href: '/series/dlya_vsej_semi'},
                {name: 'История', href: '/series/dlya_vsej_semi'},
                {name: 'Комедия', href: '/series/dlya_vsej_semi'},
                {name: 'Криминальные', href: '/series/dlya_vsej_semi'},
                {name: 'Мюзикл', href: '/series/dlya_vsej_semi'},
                {name: 'Полнометражные', href: '/series/dlya_vsej_semi'},
                {name: 'Мистические', href: '/series/dlya_vsej_semi'},
                {name: 'Приключения', href: '/series/dlya_vsej_semi'},
                {name: 'Развивающие', href: '/series/dlya_vsej_semi'},
                {name: 'Сериалы', href: '/series/dlya_vsej_semi'},
                {name: 'Спорт', href: '/series/dlya_vsej_semi'},
                {name: 'Триллер', href: '/series/dlya_vsej_semi'},
                {name: 'Ужасы', href: '/series/dlya_vsej_semi'},
                {name: 'Фантастика', href: '/series/dlya_vsej_semi'},
                {name: 'Фэнтези', href: '/series/dlya_vsej_semi'},
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
            ]
        }
    }
// console.log(e.target.value)

    return (
        <>
            <div
                className={style.dropDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={style.dropDown__block}>
                    <div>
                        <p style={{color: 'white', marginBottom: '15px'}}>Жанры</p>
                        <ul className={style.dropDown__genres}>
                            {list.genres.map((element, indx) => {
                                return (<div key={indx}>
                                    <li>
                                        <Link className={style.dropDown__a} href={element.href}>{element.name}</Link>
                                    </li>
                                </div>)
                            })}
                        </ul>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={{color: 'white', marginBottom: '15px'}}>Страны</p>
                        <ul className={style.dropDown__country}>
                            {list.country.map((element, indx) => {
                                return (<li key={indx}>
                                    <Link className={style.dropDown__a} href={element.href}>{element.name}</Link>
                                </li>)
                            })}
                        </ul>
                        <p style={{color: 'white', marginTop: '15px', marginBottom: '10px'}}>Годы</p>
                        <ul className={style.dropDown__country}>
                            {list.years.map((element, indx) => {
                                return (<li key={indx}>
                                    <Link className={style.dropDown__a} href={element.href}>{element.name}</Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropDown
