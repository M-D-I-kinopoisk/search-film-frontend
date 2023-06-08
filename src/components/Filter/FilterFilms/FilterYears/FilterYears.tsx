'use client'

import {useSelector} from 'react-redux'
import {selectFilter} from '@/redux/FilterSlice'

import {RxRadiobutton,} from 'react-icons/rx'
import {MdOutlineRadioButtonUnchecked} from 'react-icons/md'

import {useRouter, useSearchParams, usePathname} from 'next/navigation'

import styles from './filterYears.module.scss'

import {useLocale} from 'next-intl'

import {listYears} from '@/data/yearsArr'

const FilterYears = () => {
    const locale = useLocale()

    const pathname = usePathname()

    const router = useRouter()

    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilter)

    const filterYears = (start: number, end: number, nameYears: string) => {
        console.log(filterObj.yearStart !== start && filterObj.yearEnd !== end)
        if (filterObj.yearStart !== start || filterObj.yearEnd !== end) {
            if (nameYears === 'Все годы') {

                const valueStr = 'year=' + searchParams?.get('year')?.replaceAll('+', '_')
                const newStr = searchParams?.toString().replace(valueStr, '')
                router.push(`${pathname}?${newStr}`)

            } else {

                let url = '/movies'
                if (searchParams?.toString()) {

                    if (searchParams.has('year')) {

                        const valueStr = 'year=' + searchParams.get('year')?.replaceAll('+', '_')
                        const newStr = searchParams.toString().replace(valueStr, `year=${start}_${end}`)

                        router.push(`${pathname}?${newStr}`)
                    } else {
                        url = pathname + '?' + searchParams.toString()
                        router.push(`${url}&year=${start}_${end}`)
                    }
                } else {
                    router.push(`${pathname}?year=${start}_${end}`)
                }
            }
        }
    }

    return (
        <ul>
            {listYears.map((element, inx) => {
                return <li key={inx}
                           className={
                               filterObj.yearStart === element.yearStart && filterObj.yearEnd === element.yearEnd ?
                                   `${styles.years__item} ${styles.years__item_active}` :
                                   styles.years__item}>
                    <button onClick={() => filterYears(element.yearStart, element.yearEnd, element.nameYears)}>
                        {locale === 'ru' ? element.nameYears : element.nameYearsEN}
                    </button>
                    {filterObj.yearStart === element.yearStart && filterObj.yearEnd === element.yearEnd ?
                        <div className={styles.years__checkbox_active}>
                            <RxRadiobutton size={20}/>
                        </div> :
                        <div className={styles.years__checkbox}>
                            <MdOutlineRadioButtonUnchecked size={20}/>
                        </div>}
                </li>
            })}
        </ul>
    )
}

export default FilterYears
