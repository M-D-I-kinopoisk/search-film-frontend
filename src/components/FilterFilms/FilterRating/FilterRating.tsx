import {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterRating.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const FilterRating = () => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    const [inputRange, setInputRange] = useState(filterObj.ratingStart)


    const changeRating = (e) => {
        setInputRange((prev) => (e.target.value))
    }


    const onMouseUpRating = (e, inputRange) => {
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
        let url = '/movies'
        if (searchParams.toString()) {
            if (searchParams.has('ivi_rating_10_gte')) {

                const valueStr = 'ivi_rating_10_gte=' + searchParams.get('ivi_rating_10_gte')
                const newStr = searchParams.toString().replace(valueStr, `ivi_rating_10_gte=${numberRating}`)
                 url = pathname + '?' + searchParams.toString()

                router.push(`${pathname}/?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&ivi_rating_10_gte=${inputRange}`)
            }
        } else {
            router.push(`${pathname}?ivi_rating_10_gte=${inputRange}`)
        }
    }


    console.log(filterObj)


    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='1' max='10'
                   value={inputRange} step={0.1}
                   onChange={(e) => changeRating(e)}
                   onMouseUp={(e) =>  onMouseUpRating(e, inputRange)}
            />
            <div className={styles.inputRange__text}>{inputRange}</div>
            <div className={styles.inputRange__numStart}>1</div>
            <div className={styles.inputRange__numEnd}>10</div>
        </div>
    )
}

export default FilterRating