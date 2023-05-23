'use client'

import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'


export default function FilterGenres() {


    const [listGenres, setListGenres] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
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



    function filterGenres(id) {
        if ('arrIdGenres' in filterObj) {}

        if (filterObj.arrIdGenres && filterObj.arrIdGenres.includes(id)) {

            if (filterObj.arrIdGenres.length === 1) {

                const {arrIdGenres, ...rest} = filterObj
                dispatch(getFilterObj(
                    {...rest}
                ))

            } else {

                const filterListGenres = filterObj.arrIdGenres.filter((number) => number !== id)
                dispatch(getFilterObj(
                    {
                        ...filterObj,
                        'arrIdGenres': filterListGenres,
                    }
                ))
            }

        } else {

            dispatch(getFilterObj(
                {
                    ...filterObj,
                    'arrIdGenres': [...filterObj.arrIdGenres, id],
                }
            ))
        }
    }

    console.log(filterObj.arrIdGenres)

    return (
        <ul className={styles.genres__list}>
            {listGenres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>
                    <button onClick={() => filterGenres(element.id)}>
                        {element.nameRU}
                    </button>
                    <div className={styles.genres__checkbox}>
                        <BsCheckLg size={16}/>
                    </div>
                </li>
            })}
        </ul>
    )
}




