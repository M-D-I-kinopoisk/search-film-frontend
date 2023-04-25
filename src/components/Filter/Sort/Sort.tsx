import {MdOutlineSort} from 'react-icons/md'
import {useState} from 'react'
import styles from './sort.module.scss'


const Sort = () => {

    const [sortToggle, SetSortToggle] = useState(false)

    return (
        <div className={styles.sort}>
            <div className={styles.sort__group} onClick={() => SetSortToggle(!sortToggle)}>
            <MdOutlineSort style={{transform : ' scale(-1, 1)'}} size={20} color={'#fff'}/>
            <p className={styles.sort__title}>По кол-ву оценок Кинопоиска</p>
            </div>
            {sortToggle && <div className={styles.sort__dropDown}>
                <p className={styles.sort__dropDown_title}>Сортировать</p>
                <div className={styles.sort__dropDown_item}>
                    <p className={styles.sort__dropDown_text}>Кол-ву оценок Кинопоиска</p></div>
                <div className={styles.sort__dropDown_item}>
                    <p className={styles.sort__dropDown_text}>Ретингу Кинопоиска</p></div>
                <div className={styles.sort__dropDown_item}>
                    <p className={styles.sort__dropDown_text}>Дате выход</p></div>
                <div className={styles.sort__dropDown_item}>
                    <p className={styles.sort__dropDown_text}>Алфавиту</p></div>
            </div> }
        </div>
    )
}

export default Sort