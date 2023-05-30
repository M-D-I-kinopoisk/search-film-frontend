'use client'

import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import Link from 'next/link'
import {useRouter, useSearchParams, useParams, usePathname} from 'next/navigation'




export default function FilterGenres({genres}) {

    const router = useRouter()
    const params = useParams()
    const pathname = usePathname()

    const searchParams = useSearchParams()


    // const [listGenres, setListGenres] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log('Сработал')
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:12120/api/genres')
    //         const genres = await res.json()
    //         setListGenres(genres)
    //     }
    //     fetchData()
    // }, [])


    function filterGenres(e, id, nameGenres, nameGenresEN) {
        // e.stopPropagation()

        nameGenres = firstLetterToUpperCase(nameGenres)
        if ('arrIdGenres' in filterObj) {

            if (filterObj.arrIdGenres && filterObj.arrIdGenres.includes(id)) {

                if (filterObj.arrIdGenres.length === 1) {

                    const {arrGenres, arrGenresEN, ...restName} = filterTextObj
                    dispatch(getFilterTextObj(
                        {...restName}
                    ))
                    const {arrIdGenres, ...restId} = filterObj
                    // dispatch(getFilterObj(
                    //     {
                    //         ...restId,
                    //         'part': 1,
                    //     }
                    // ))


                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`movies/${strCountries}?${searchParams.toString()}`,)

                } else {
                    const filterListNameGenres = filterTextObj.arrGenres.filter((str) => str !== nameGenres)
                    const filterListNameGenresEN = filterTextObj.arrGenresEN.filter((str) => str !== nameGenresEN)
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrGenres': filterListNameGenres,
                            'arrGenresEN' : filterListNameGenresEN
                        }
                    ))
                    console.log(1)
                    const filterListIdGenres = filterObj.arrIdGenres.filter((number) => number !== id)
                    // dispatch(getFilterObj(
                    //     {
                    //         ...filterObj,
                    //         'arrIdGenres': filterListIdGenres,
                    //         'part': 1,
                    //     }
                    // ))
                    console.log(123)
                    const str = (filterListNameGenresEN.join('+'))
                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`/movies/${str}/${strCountries}?${searchParams.toString()}`,)

                }

            } else {

                dispatch(getFilterTextObj(
                    {
                        ...filterTextObj,
                        'arrGenres': [...filterTextObj.arrGenres, nameGenres],
                        'arrGenresEN' : [...filterTextObj.arrGenresEN, nameGenresEN]
                    }
                ))
                // dispatch(getFilterObj(
                //     {
                //         ...filterObj,
                //         'arrIdGenres': [...filterObj.arrIdGenres, id],
                //         'part': 1,
                //     }
                // ))

                const str = ([...filterTextObj.arrGenresEN, nameGenresEN].join('+'))
                const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                    filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                    ''
                router.push(`/movies/${str}/${strCountries}?${searchParams.toString()}`,)

            }
        } else {

            dispatch(getFilterTextObj(
                {
                    ...filterTextObj,
                    'arrGenres': [nameGenres],
                    'arrGenresEN' : [nameGenresEN]
                }
            ))
            // dispatch(getFilterObj(
            //     {
            //         ...filterObj,
            //         'arrIdGenres': [id],
            //         'part': 1,
            //     }
            // ))
            console.log(5)
            // const newStr2 = pathname.toString().replace('movies', '')
            const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                ''
            router.push(`/movies/${nameGenresEN}/${strCountries}?${searchParams.toString()}`,)
        }
    }
    // console.log(JSON.stringify(params))
    // console.log(searchParams)

    function firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    return (
        <ul className={styles.genres__list}>
            {genres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>
                    <button onClick={(e) => filterGenres(e, element.id, element.nameRU, element.nameEN)}>
                        {firstLetterToUpperCase(element.nameRU)}
                    </button>
                    {filterObj.arrIdGenres?.includes(element.id) ?
                        <div className={styles.genres__checkbox_active}>
                            <BsCheckLg size={20}/>
                        </div> :
                        <div className={styles.genres__checkbox}>
                            <BsCheckLg size={20}/>
                        </div>}
                </li>
            })}
        </ul>
    )
}




