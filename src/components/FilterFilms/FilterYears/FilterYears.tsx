import styles from './filterYears.module.scss'


const FilterYears = () => {

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
    
    return (
        <ul>
            {listYears.map((element, inx) => {
                return <li key={inx} className={styles.years__item}>{element}</li>
            })}
        </ul>
    )    
}

export default FilterYears
