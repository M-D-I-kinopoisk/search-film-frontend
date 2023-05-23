'use clinet'

import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'


export default function FilterGenres() {


    const [listGenres, setListGenres] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/genres')
            const genres = await res.json()
            setListGenres(genres)
        }
        fetchData()
    }, [])

    // const listGenres = [
    //     'Артхаус',
    //     'Биография',
    //     'Боевики',
    //     'Вестерн',
    //     'Военные',
    //     'Детективы',
    //     'Для детей',
    //     'Документальные',
    //     'Драмы',
    //     'Зарубежные',
    //     'Исторические',
    //     'Катастрофы',
    //     'Комедии',
    //     'Криминал',
    //     'Мелодрамы',
    //     'Мистические',
    //     'Музыкальные',
    //     'По комиксам',
    //     'Приключения',
    //     'Русские',
    //     'Семейные',
    //     'Советские',
    //     'Спорт',
    //     'Триллеры',
    //     'Ужасы',
    //     'Фантастика',
    //     'Фэнтези',]

    function filterGenres (id) {
        dispatch(getFilterObj(
            {...filterObj,
                'typeSorting': str
            }
        ))
    }

    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>
                    <button
                        onClick={() => filterGenres(element.id)}>{element.nameRU}
                    </button>
                </li>
            })}
        </ul>
    )
}




