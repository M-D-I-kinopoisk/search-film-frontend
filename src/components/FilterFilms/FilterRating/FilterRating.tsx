import {useState} from 'react'

import styles from './filterRating.module.scss'

const FilterRating = () => {

    const [inputRange, setInputRange] = useState({rating: '1', grade: '500'})

    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='1' max='10'
                   value={inputRange.rating} step={0.1}
                   onChange={(e) => setInputRange((prev) => ({
                       ...prev,
                       rating: e.target.value
                   }))}/>
            <div className={styles.inputRange__text}>{inputRange.rating}</div>
            <div className={styles.inputRange__numStart}>1</div>
            <div className={styles.inputRange__numEnd}>10</div>
        </div>
    )
}

export default FilterRating