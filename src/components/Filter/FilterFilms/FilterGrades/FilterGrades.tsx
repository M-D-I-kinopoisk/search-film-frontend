import {useState} from 'react'

import {useSelector} from 'react-redux'
import {selectFilter} from '@/redux/FilterSlice'

import styles from './filterGrades.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const FilterGrades = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilter)

    const [inputRange, setInputRange] = useState(filterObj.countRatingStart)

    const changeRating = (e) => {
        setInputRange((e.target.value))
    }

    const onMouseUpRating = (e) => {
        const numberRating = Number(e.target.value)

        let url = '/movies'
        if (searchParams?.toString()) {

            if (searchParams.has('ivi_grades')) {

                const valueStr = 'ivi_grades=' + searchParams.get('ivi_grades')
                const newStr = searchParams.toString().replace(valueStr, `ivi_grades=${numberRating}`)

                router.push(`${pathname}/?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&ivi_grades=${numberRating}`)
            }
        } else {
            router.push(`/movies?ivi_grades=${numberRating}`)
        }
    }

    return (
        <div className={styles.inputRange__block}>
            <input className={styles.inputRange__input} type='range' min='1000' max='1000000'
                   value={inputRange} step={1000}
                   onChange={(e) => changeRating(e)}
                   onMouseUp={(e) => onMouseUpRating(e)}
            />
            <div className={styles.inputRange__text}>{inputRange}</div>
            <div className={styles.inputRange__numStart}>1000</div>
            <div className={styles.inputRange__numEnd}>1000000</div>
        </div>
    )
}

export default FilterGrades