import {useEffect, useState} from 'react'

import styles from './filterCountries.module.scss'


const FilterCountries = () => {

    const [listCountries,  setListCountries] = useState<[] | any>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/countries')
            const genres = await res.json()
            setListCountries(genres)
        }
        fetchData()
    }, [])


    // const listCountries = [
    //     'Австралия',
    //     'Аргентина',
    //     'Армения',
    //     'Беларусь',
    //     'Бельгия',
    //     'Бразилия',
    //     'Великобритания',
    //     'Венгрия',
    //     'Германия',
    //     'Гонконг',
    //     'Дания',
    //     'Индия',
    //     'Ирландия',
    //     'Испания',
    //     'Италия',
    //     'Казахстан',
    //     'Канада',
    //     'Китай',
    //     'Колумбия',
    //     'Мексика',
    //     'Нидерланды',
    //     'Новая Зеландия',
    //     'Норвегия',
    //     'Польша',
    //     'Россия',
    //     'СССР',
    //     'США',
    //     'Таиланд',
    //     'Турция',
    //     'Финляндия',
    //     'Франция',
    //     'Швейцария',
    //     'Швеция',
    //     'ЮАР',
    //     'Южная Корея',
    //     'Япония',
    // ]

    return (
        <ul className={styles.country__list}>
            {listCountries.map((element, inx) => {
                return <li key={inx} className={styles.country__item}>{element.nameRU}</li>
            })}
        </ul>
    )
}

export default FilterCountries