import {useState} from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import {BiSearch} from 'react-icons/bi'
import styles from './filter.module.scss'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {GiFilmProjector} from 'react-icons/gi'
import FilterCategories from '@/components/Filter/FilterCategories/FilterCategories'
import Sort from '@/components/Filter/Sort/Sort'


const Filter = () => {

    const [activePlank, setActivePlank] = useState({
        genres: false, countries: false, years: false, rating: false,
        grade: false, searchDir: false, searchActor: false
    })

    const [inputRange, setInputRange] = useState({rating: '1', grade: '500'})



    const listGenres = [
        'Артхаус',
        'Биография',
        'Боевики',
        'Вестерн',
        'Военные',
        'Детективы',
        'Для детей',
        'Документальные',
        'Драмы',
        'Зарубежные',
        'Исторические',
        'Катастрофы',
        'Комедии',
        'Криминал',
        'Мелодрамы',
        'Мистические',
        'Музыкальные',
        'По комиксам',
        'Приключения',
        'Русские',
        'Семейные',
        'Советские',
        'Спорт',
        'Триллеры',
        'Ужасы',
        'Фантастика',
        'Фэнтези',]

    const listCountries = [
        'Австралия',
        'Аргентина',
        'Армения',
        'Беларусь',
        'Бельгия',
        'Бразилия',
        'Великобритания',
        'Венгрия',
        'Германия',
        'Гонконг',
        'Дания',
        'Индия',
        'Ирландия',
        'Испания',
        'Италия',
        'Казахстан',
        'Канада',
        'Китай',
        'Колумбия',
        'Мексика',
        'Нидерланды',
        'Новая Зеландия',
        'Норвегия',
        'Польша',
        'Россия',
        'СССР',
        'США',
        'Таиланд',
        'Турция',
        'Финляндия',
        'Франция',
        'Швейцария',
        'Швеция',
        'ЮАР',
        'Южная Корея',
        'Япония',
    ]

    const listYears = [
        'Все годы',
        '2023 год',
        '2022 год',
        '2021 год',
        '2020 год',
        '2019 год',
        '2018 год',
        '2017 год',
        '2016 год',
        '2022-2023',
        '2021-2022',
        '2020-2022',
        '2019-2020',
        '2010-2020',
    ]

    console.log(`${inputRange.rating}px`)


    return (
        <div className={styles.wrapper}>
            <Sort/>
            <div className={styles.filter}>
                <div className={styles.filter__content}>
                    <div className={styles.filter__plankList}>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterGenres} title={'Жанры'}
                                              activePlank={activePlank.genres}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: false,
                                                  rating: false,
                                                  grade: false,
                                                  genres: !activePlank.genres,
                                                  searchDir: false,
                                                  searchActor: false,
                                              })}>
                                <ul className={styles.genesUl}>
                                    {listGenres.map((element, inx) => {
                                        return <li key={inx} className={styles.genesLi}>{element}</li>
                                    })}
                                </ul>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterCountries} title={'Страны'}
                                              activePlank={activePlank.countries}
                                              onClick={() => setActivePlank({
                                                  countries: !activePlank.countries,
                                                  years: false,
                                                  rating: false,
                                                  grade: false,
                                                  genres: false,
                                                  searchDir: false,
                                                  searchActor: false,
                                              })}>
                                <ul className={styles.genesUl}>
                                    {listCountries.map((element, inx) => {
                                        return <li key={inx} className={styles.genesLi}>{element}</li>
                                    })}
                                </ul>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterYears} title={'Годы'}
                                              activePlank={activePlank.years}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: !activePlank.years,
                                                  rating: false,
                                                  grade: false,
                                                  genres: false,
                                                  searchDir: false,
                                                  searchActor: false,
                                              })}>
                                <ul>
                                    {listYears.map((element, inx) => {
                                        return <li key={inx} className={styles.genesLi}>{element}</li>
                                    })}
                                </ul>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterRating} title={'Рейтинг Кинопоиска'}
                                              activePlank={activePlank.rating}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: false,
                                                  rating: !activePlank.rating,
                                                  grade: false,
                                                  genres: false,
                                                  searchDir: false,
                                                  searchActor: false,
                                              })}>
                                <div className={styles.inputRange__block}>
                                    <input className={styles.inputRange__input} type='range' min='1' max='10' value={inputRange.rating} step={0.1}
                                           onChange={(e) => setInputRange((prev) => ({
                                               ...prev,
                                               rating: e.target.value
                                           }))}/>
                                    <div className={styles.inputRange__text}  >{inputRange.rating}</div>
                                    <div className={styles.inputRange__numStart}>1</div>
                                    <div className={styles.inputRange__numEnd}>10</div>
                                </div>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterRating} title={'Оценки Кинопоиска'}
                                              activePlank={activePlank.grade}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: false,
                                                  rating: false,
                                                  grade: !activePlank.grade,
                                                  genres: false,
                                                  searchDir: false,
                                                  searchActor: false,
                                              })}>
                                <div className={styles.inputRange__block}>
                                    <input className={styles.inputRange__input} type='range' min='500' max='1000000'
                                           value={inputRange.grade} step={500}
                                           onChange={(e) => setInputRange((prev) => ({
                                               ...prev,
                                               grade: e.target.value
                                           }))}/>
                                    <div className={styles.inputRange__text}>{inputRange.grade}</div>
                                </div>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterSearch} title={'Поиск по режиссерам'}
                                              activePlank={activePlank.searchDir}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: false,
                                                  rating: false,
                                                  grade: false,
                                                  genres: false,
                                                  searchDir: !activePlank.searchDir,
                                                  searchActor: false,
                                              })}>
                                <div>
                                    {/*<p className={styles.inputText__title}>Начните вводить режиссера</p>*/}
                                    <div className={styles.inputText__body}>
                                        <input type={'text'} className={styles.inputText__input}/>
                                        <div className={styles.inputText__icon}>
                                            <BiSearch size={20}/>
                                        </div>
                                        <label className={styles.inputText__placeholder}>
                                           Режиссеры
                                        </label>
                                    </div>
                                    <div className={styles.inputText__item}>
                                        <GiFilmProjector color={'rgb(234, 0, 61)'} size={20}/>
                                        <span>Брэд Питт</span>
                                    </div>
                                </div>
                            </FilterCategories>
                        </div>
                        <div className={styles.filter__plankItem}>
                            <FilterCategories className={styles.filterSearch} title={'Поиск по актерам'}
                                              activePlank={activePlank.searchActor}
                                              onClick={() => setActivePlank({
                                                  countries: false,
                                                  years: false,
                                                  rating: false,
                                                  grade: false,
                                                  genres: false,
                                                  searchDir: false,
                                                  searchActor: !activePlank.searchActor,
                                              })}>
                                <div>
                                    {/*<p className={styles.inputText__title}>Начните вводить актера</p>*/}
                                    <div className={styles.inputText__body}>
                                        <input type={'text'} className={styles.inputText__input}/>
                                        <div className={styles.inputText__icon}>
                                            <BiSearch size={20}/>
                                        </div>
                                        <label className={styles.inputText__placeholder}>
                                            Актеры
                                        </label>
                                    </div>
                                    <div className={styles.inputText__item}>
                                        <IoPersonCircleOutline color={'rgb(234, 0, 61)'} size={20}/>
                                        <span>Брэд Питт</span>
                                    </div>
                                </div>
                            </FilterCategories>
                        </div>
                    </div>
                    <div className={styles.filter__reset}>
                        <div className={styles.filter__resetContent}>
                            <VscChromeClose size={20}/>
                            Сбросить фильтры
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter