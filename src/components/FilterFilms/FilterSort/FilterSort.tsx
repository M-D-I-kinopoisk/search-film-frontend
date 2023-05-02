import {useEffect, useRef, useState} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'
import {MdOutlineSort} from 'react-icons/md'

import styles from './filterSort.module.scss'



const FilterSort = () => {

    const [sortToggle, SetSortToggle] = useState(false)

    const modalRef = useRef(null)

    useEffect(() => {
        
        if (sortToggle) {
            const handleClick = (e) => {
                if (!modalRef.current.contains(e.target)) {
                    SetSortToggle(false)
                } else return
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }

        } else return

    }, [sortToggle])

    return (
        <div className={styles.sort}>
            <div className={styles.sort__block} ref={modalRef}>
                <div className={styles.sort__group} onClick={() => SetSortToggle(!sortToggle)}>
                    <MdOutlineSort style={{transform: ' scale(-1, 1)'}} size={20}/>
                    <p className={styles.sort__title}>По кол-ву оценок Кинопоиска</p>
                    {sortToggle ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                        (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
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
                </div>}
            </div>

        </div>
    )
}

export default FilterSort