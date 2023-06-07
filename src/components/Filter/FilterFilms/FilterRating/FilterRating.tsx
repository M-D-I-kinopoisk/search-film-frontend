import {useState} from 'react'

import { useSelector} from 'react-redux'
import { selectFilter} from '@/redux/FilterSlice'


import styles from './filterRating.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const FilterRating = () => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilter)


    const [inputRange, setInputRange] = useState(filterObj.ratingStart)


    const changeRating = (e) => {
        setInputRange((prev) => (e.target.value))
    }


    const onMouseUpRating = (e, inputRange) => {
        const numberRating = Number(e.target.value)
        let url = '/movies'
        if (searchParams?.toString()) {

            if (searchParams.has('ivi_rating_10_gte')) {

                const valueStr = 'ivi_rating_10_gte=' + searchParams.get('ivi_rating_10_gte')
                const newStr = searchParams.toString().replace(valueStr, `ivi_rating_10_gte=${numberRating}`)

                router.push(`${pathname}?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&ivi_rating_10_gte=${numberRating}`)
            }
        } else {
            router.push(`${pathname}?ivi_rating_10_gte=${numberRating}`)
        }
    }



    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='1' max='10'
                   value={inputRange} step={0.1}
                   onChange={(e) => changeRating(e)}
                   onMouseUp={(e) => onMouseUpRating(e, inputRange)}
            />
            <div className={styles.inputRange__text}>{inputRange}</div>
            <div className={styles.inputRange__numStart}>1</div>
            <div className={styles.inputRange__numEnd}>10</div>
        </div>
    )
}

export default FilterRating