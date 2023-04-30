import {BiSearch} from 'react-icons/bi'
import {GiFilmProjector} from 'react-icons/gi'

import styles from './filterDir.module.scss'

const FilterDir = () => {
    return (
        <div>
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
    )
}

export default FilterDir