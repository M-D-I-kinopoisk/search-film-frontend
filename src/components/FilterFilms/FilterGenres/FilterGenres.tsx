'use client'

import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import Link from 'next/link'
import { useRouter, useSearchParams, useParams  } from 'next/navigation'




export default function FilterGenres() {

    const router = useRouter()
    const params = useParams()

    const searchParams = useSearchParams()


    const [listGenres, setListGenres] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Сработал')
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/genres')
            const genres = await res.json()
            setListGenres(genres)
        }
        fetchData()
    }, [])


    function filterGenres(e, id, nameGenres, nameGenresEN) {
        e.stopPropagation()

        nameGenres = firstLetterToUpperCase(nameGenres)
        if ('arrIdGenres' in filterObj) {

            if (filterObj.arrIdGenres && filterObj.arrIdGenres.includes(id)) {

                if (filterObj.arrIdGenres.length === 1) {

                    const {arrGenres, ...restName} = filterTextObj
                    dispatch(getFilterTextObj(
                        {...restName}
                    ))
                    const {arrIdGenres, ...restId} = filterObj
                    dispatch(getFilterObj(
                        {
                            ...restId,
                            'part': 1,
                        }
                    ))
                    router.push('/movies',)
                    // history.pushState('/movies', 'Title', '/movies')
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
                    dispatch(getFilterObj(
                        {
                            ...filterObj,
                            'arrIdGenres': filterListIdGenres,
                            'part': 1,
                        }
                    ))
                    console.log(filterListNameGenresEN.join('+'))
                    router.push(`/movies/${filterListNameGenresEN.join('+')}`,)
                    // history.pushState(`/movies/filter/${filterListNameGenresEN.join('+')}`, 'Title', `/movies/filter/${filterListNameGenresEN.join('+')}`)
                }

            } else {

                dispatch(getFilterTextObj(
                    {
                        ...filterTextObj,
                        'arrGenres': [...filterTextObj.arrGenres, nameGenres],
                        'arrGenresEN' : [...filterTextObj.arrGenresEN, nameGenresEN]
                    }
                ))
                dispatch(getFilterObj(
                    {
                        ...filterObj,
                        'arrIdGenres': [...filterObj.arrIdGenres, id],
                        'part': 1,
                    }
                ))
                router.push(`/movies/${[...filterTextObj.arrGenresEN, nameGenresEN].join('+')}`,)
                // history.pushState(`/movies/filter/${[...filterTextObj.arrGenresEN, nameGenresEN].join('+')}`, 'Title', `/movies/filter/${[...filterTextObj.arrGenresEN, nameGenresEN].join('+')}`)
            }
        } else {

            dispatch(getFilterTextObj(
                {
                    ...filterTextObj,
                    'arrGenres': [nameGenres],
                    'arrGenresEN' : [nameGenresEN]
                }
            ))
            dispatch(getFilterObj(
                {
                    ...filterObj,
                    'arrIdGenres': [id],
                    'part': 1,
                }
            ))
            // history.pushState(`/movies/filter/${nameGenresEN}`, 'Title', `/movies/filter/${nameGenresEN}`)

            router.push(`/movies/${nameGenresEN}`,)
            // history.pushState(`/movies/filter/${nameGenresEN}`)
            // router.push(`/movies/filter/${nameGenresEN}`)

        }
    }
    // console.log(JSON.stringify(params))
    // console.log(searchParams)

    function firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
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




