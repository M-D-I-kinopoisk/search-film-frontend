import {useState} from 'react'

import styles from './filterGrades.module.scss'


const FilterGrades = () => {

    const [inputRange, setInputRange] = useState({rating: '1', grade: '500'})

    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='500' max='1000000'
                   value={inputRange.grade} step={500}
                   onChange={(e) => setInputRange((prev) => ({
                       ...prev,
                       grade: e.target.value
                   }))}/>
            <div className={styles.inputRange__text}>{inputRange.grade}</div>
        </div>
    )
}

export default FilterGrades