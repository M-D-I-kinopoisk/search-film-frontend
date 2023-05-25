'use client'

import styles from '@/app/movies/movies.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'

export default function FilmsList() {


    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('useEffect работает')

        async function getFilms() {
            const res = await fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify(filterObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const films = await res.json()
            if (filterObj.part > 1) {
                setFilmsList(prev => [...prev, ...films])
            } else {
                setFilmsList(films)
            }
        }

        getFilms()
    }, [filterObj])


    const nextListFilms = (part) => {
        dispatch(getFilterObj(
            {
                ...filterObj,
                'part': part + 1,
            }
        ))
    }


    return (
        <>
            {filmsList && filmsList.map((item: any, inx) => <p style={{color: 'white'}} key={inx}>{item.nameRU}</p>)}
            {filmsList.length > 0 &&
                filmsList.length % 20 === 0 &&
                <button className={styles.movies__btn} onClick={() => nextListFilms(filterObj.part)}>
                    Показать еще
                </button>}
        </>
    )
}