import {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterRating.module.scss'


const FilterRating = () => {

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    const [inputRange, setInputRange] = useState(filterObj.ratingStart)


    const changeRating = (e) => {
        setInputRange((prev) => (e.target.value))
    }


    const onMouseUpRating = (e) => {
        const numberRating = Number(e.target.value)
        console.log(e.target.value)
        dispatch(getFilterTextObj(
            {
                ...filterTextObj,
                'ratingStart': [numberRating],
            }
        ))
        dispatch(getFilterObj(
            {
                ...filterObj,
                'ratingStart': numberRating,
                'part': 1,
            }
        ))
    }


    console.log(filterObj)


    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='1' max='10'
                   value={inputRange} step={0.1}
                   onChange={(e) => changeRating(e)}
                   onMouseUp={(e) =>  onMouseUpRating(e)}
            />
            <div className={styles.inputRange__text}>{inputRange}</div>
            <div className={styles.inputRange__numStart}>1</div>
            <div className={styles.inputRange__numEnd}>10</div>
        </div>
    )
}

export default FilterRating