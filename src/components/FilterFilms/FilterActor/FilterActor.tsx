import {BiSearch} from 'react-icons/bi'
import {IoPersonCircleOutline} from 'react-icons/io5'

import styles from './filterActor.module.scss'


const FilterActor = () => {
    return (
        <div>
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
    )
}

export default FilterActor