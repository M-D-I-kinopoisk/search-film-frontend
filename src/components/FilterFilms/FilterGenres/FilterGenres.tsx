'use client'

import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'



export default function FilterGenres() {


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


    function filterGenres(id, nameGenres) {
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

                } else {
                    const filterListNameGenres = filterTextObj.arrGenres.filter((str) => str !== nameGenres)
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrGenres': filterListNameGenres,
                        }
                    ))
                    const filterListIdGenres = filterObj.arrIdGenres.filter((number) => number !== id)
                    dispatch(getFilterObj(
                        {
                            ...filterObj,
                            'arrIdGenres': filterListIdGenres,
                            'part': 1,
                        }
                    ))
                }

            } else {

                dispatch(getFilterTextObj(
                    {
                        ...filterTextObj,
                        'arrGenres': [...filterTextObj.arrGenres, nameGenres],
                    }
                ))
                dispatch(getFilterObj(
                    {
                        ...filterObj,
                        'arrIdGenres': [...filterObj.arrIdGenres, id],
                        'part': 1,
                    }
                ))
            }
        } else {

            dispatch(getFilterTextObj(
                {
                    ...filterTextObj,
                    'arrGenres': [nameGenres],
                }
            ))
            dispatch(getFilterObj(
                {
                    ...filterObj,
                    'arrIdGenres': [id],
                    'part': 1,
                }
            ))
        }
    }


    function firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>
                    <button onClick={() => filterGenres(element.id, element.nameRU)}>
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




