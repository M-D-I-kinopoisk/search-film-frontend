'use client'

import styles from '@/app/movies/movies.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'

export default function FilmsList() {


    const [filmsList, setFilmsList] = useState([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('useEffect работает')
        async function getFilms() {
            const resFighters = await fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify(filterObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const dataFighters = await resFighters.json()
            setFilmsList(dataFighters)
        }

        getFilms()
    }, [filterObj])

    // console.log(filmsList)

    return (
        <>
            {filmsList && filmsList.map((item: any) => <p style={{color: 'white'}} key={item.id}>{item.nameRU}</p>)}
            {filmsList.length > 0 &&
                <button className={styles.movies__btn} onClick={() => dispatch(getFilterObj(
                {
                    ...filterObj,
                    'part': 2,
                }
            ))}>Показать еще
            </button>}
        </>
    )
}