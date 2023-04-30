import styles from './filterGenres.module.scss'


const FilterGenres = () => {

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


    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>{element}</li>
            })}
        </ul>
    )
}

export default FilterGenres