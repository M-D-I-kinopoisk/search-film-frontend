import {useEffect, useState} from 'react'

import styles from './filterGenres.module.scss'


export default  function FilterGenres()   {

    
    const [listGenres,  setListGenres] = useState<[] | any>([])

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

    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>{element.nameRU}</li>
            })}
        </ul>
    )
}




