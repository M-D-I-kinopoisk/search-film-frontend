'use client'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import {RxRadiobutton,} from 'react-icons/rx'
import {MdOutlineRadioButtonUnchecked} from 'react-icons/md'

import {useRouter, useSearchParams, useParams, usePathname} from 'next/navigation'

import styles from './filterYears.module.scss'


const FilterYears = () => {

    const pathname = usePathname()

    const router = useRouter()

    const searchParams = useSearchParams()


    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    const listYears = [
        {
            'nameYears': 'Все годы',
            'yearStart': 0,
            'yearEnd': 0,
            'nameYearsEN' : 'All years'
        },
        {
            'nameYears': '2023',
            'yearStart': 2023,
            'yearEnd': 2023,
            'nameYearsEN' : '2023 years'
        },
        {
            'nameYears': '2022',
            'yearStart': 2022,
            'yearEnd': 2022,
            'nameYearsEN' : '2022 years'
        },
        {
            'nameYears': '2021',
            'yearStart': 2021,
            'yearEnd': 2021,
            'nameYearsEN' : '2021 years'
        },
        {
            'nameYears': '2020',
            'yearStart': 2020,
            'yearEnd': 2020,
            'nameYearsEN' : '2020 years'
        },
        {
            'nameYears': '2019',
            'yearStart': 2019,
            'yearEnd': 2019,
            'nameYearsEN' : '2019 years'
        },
        {
            'nameYears': '2018',
            'yearStart': 2018,
            'yearEnd': 2018,
            'nameYearsEN' : '2018 years'
        },
        {
            'nameYears': '2017',
            'yearStart': 2017,
            'yearEnd': 2017,
            'nameYearsEN' : '2017 years'
        },
        {
            'nameYears': '2016',
            'yearStart': 2016,
            'yearEnd': 2016,
            'nameYearsEN' : '2016 years'
        },
        {
            'nameYears': '2022-2023',
            'yearStart': 2022,
            'yearEnd': 2023,
            'nameYearsEN' : '2022-2023'
        },
        {
            'nameYears': '2021-2022',
            'yearStart': 2021,
            'yearEnd': 2022,
            'nameYearsEN' : '2022-2023'
        },
        {
            'nameYears': '2020-2021',
            'yearStart': 2020,
            'yearEnd': 2021,
            'nameYearsEN' : '2020-2021'
        },
        {
            'nameYears': '2019-2020',
            'yearStart': 2019,
            'yearEnd': 2020,
            'nameYearsEN' : '2019-2020',
        },
        {
            'nameYears': '2010-2020',
            'yearStart': 2010,
            'yearEnd': 2020,
            'nameYearsEN' : '2010-2020',
        },
        {
            'nameYears': '2010-2015',
            'yearStart': 2010,
            'yearEnd': 2015,
            'nameYearsEN' : '2010-2015',
        },
        {
            'nameYears': '2000-2010',
            'yearStart': 2000,
            'yearEnd': 2010,
            'nameYearsEN' : '2000-2010',
        },
        {
            'nameYears': '1990-2000',
            'yearStart': 1990,
            'yearEnd': 2000,
            'nameYearsEN' : '1990-2000',
        },
        {
            'nameYears': '1980-1990',
            'yearStart': 1980,
            'yearEnd': 1990,
            'nameYearsEN' :  '1980-1990',
        },
        {
            'nameYears': '1980',
            'yearStart': 0,
            'yearEnd': 1980,
            'nameYearsEN' : 'before 1980'
        },
    ]


    const filterYears = (start: number, end: number, nameYears: string) => {
        console.log(filterObj.yearStart !== start && filterObj.yearEnd !== end)
        if (filterObj.yearStart !== start || filterObj.yearEnd !== end) {
            if (nameYears === 'Все годы') {

                const {arrYears, ...restName} = filterTextObj
                const valueStr = 'year=' + searchParams.get('year')?.replaceAll('+','_')
                const newStr = searchParams.toString().replace(valueStr, '')
                // dispatch(getFilterTextObj(restName))
                // dispatch(getFilterObj(
                //     {
                //         ...filterObj,
                //         'yearStart': 0,
                //         'yearEnd': 0,
                //         'part': 1,
                //     }
                // ))
                // console.log(123)
                router.push(`${pathname}?${newStr}`)

            } else {

                // dispatch(getFilterTextObj(
                //     {
                //         ...filterTextObj,
                //         'arrYears': [nameYears],
                //     }
                // ))

                // dispatch(getFilterObj(
                //     {
                //         ...filterObj,
                //         'yearStart': start,
                //         'yearEnd': end,
                //         'part': 1,
                //     }
                // ))

                // console.log(searchParams)
                let url = '/movies'
                if (searchParams.toString()) {

                    if (searchParams.has('year')) {

                        const valueStr = 'year=' + searchParams.get('year')?.replaceAll('+','_')
                        const newStr = searchParams.toString().replace(valueStr, `year=${start}_${end}`)
                        url = pathname + '?' + searchParams.toString()

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

    // console.log(filterTextObj)

    return (
        <ul>
            {listYears.map((element, inx) => {
                return <li key={inx}
                           className={
                               filterObj.yearStart === element.yearStart && filterObj.yearEnd === element.yearEnd ?
                                   `${styles.years__item} ${styles.years__item_active}` :
                                   styles.years__item}>
                    <button onClick={() => filterYears(element.yearStart, element.yearEnd, element.nameYears)}>
                        {element.nameYears}
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
