'use client'

import {useEffect, useRef, useState} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'
import {MdOutlineSort} from 'react-icons/md'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'

import styles from './filterSort.module.scss'


const FilterSort = () => {

    const [sortToggle, SetSortToggle] = useState(false)

    const modalRef = useRef<HTMLDivElement>(null)

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()


    let text = ''
    if (filterObj.typeSorting === 'year') {
        text = 'По дате выхода'
    }



    const [sortText, setSortText] = useState(text)

    useEffect(() => {

        if (sortToggle) {
            const handleClick = (e) => {
                if (!modalRef.current?.contains(e.target)) {
                    SetSortToggle(false)
                } else return
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }

        } else return

    }, [sortToggle])

    function sort(str) {
        if (str === 'countRating') {
            setSortText('По кол-ву оценок Кинопоиска')
        }
        if (str === 'rating') {
            setSortText('По рейтингу Кинопоиска')
        }
        if (str === 'year') {
            setSortText('По дате выхода')
        }
        if (str === 'alphabetRU') {
            setSortText('По алфавиту')
        }
        dispatch(getFilterObj(
            {
                ...filterObj,
                'typeSorting': str
            }
        ))
        SetSortToggle(false)
    }

    function SortingText() {
        return ''
    }


    return (
        <div className={styles.sort}>
            <div className={styles.sort__block} ref={modalRef}>
                <div className={styles.sort__group} onClick={() => SetSortToggle(!sortToggle)}>
                    <MdOutlineSort style={{transform: ' scale(-1, 1)'}} size={20}/>
                    <p className={styles.sort__title}>
                        {sortText}</p>
                    {sortToggle ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                        (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
                </div>
                {sortToggle && <div className={styles.sort__dropDown}>
                    <p className={styles.sort__dropDown_title}>Сортировать</p>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'countRating' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('countRating')}>
                            <p className={styles.sort__dropDown_text}>Кол-ву оценок Кинопоиска</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'rating' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('rating')}>
                            <p className={styles.sort__dropDown_text}>Рейтингу Кинопоиска</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'year' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('year')}>
                            <p className={styles.sort__dropDown_text}>Дате выход</p>
                        </button>
                    </div>
                    <div className={styles.sort__dropDown_item}>
                        {filterObj.typeSorting === 'alphabetRU' &&
                            <div className={styles.sort__dropDown_active}></div>}
                        <button onClick={() => sort('alphabetRU')}>
                            <p className={styles.sort__dropDown_text}>Алфавиту</p>
                        </button>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default FilterSort