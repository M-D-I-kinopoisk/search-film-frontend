'use client'

import styles from './filmList.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {useParams, useSearchParams} from 'next/navigation'


export default function FilmsList({genres, countries, params, searchParams}) {

    // const searchParams = useSearchParams()
    console.log(params)



    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()


    // const [listGenres, setListGenres] = useState<[] | any>([])

    useEffect(() => {
        console.log('useEffect работает')
        // console.log(params)

        const fetchData = async () => {
            let genresObj = {}
            let countriesObj = {}
            if (Object.keys(params).length !== 0) {
                params.movies.forEach(i => {
                    const strArr = i.replace('%20', ' ').split('%2B')
                    const arrGenres = genres.filter(i => strArr.includes(i.nameEN))
                    const arrCountries = countries.filter(i => strArr.includes(i.nameEN))
                    // console.log(arrGenres.length > 0)
                    // console.log(arrCountries.length > 0)

                    if (arrGenres.length > 0) {
                        genresObj = {arrIdGenres: arrGenres}
                    }
                    if (arrCountries.length > 0) {
                        countriesObj = {arrIdCountries: arrCountries}
                    }
                })

                fetch('http://localhost:12120/api/films/filter', {
                    method: 'POST',
                    body: JSON.stringify({
                        ...filterObj,
                        genresObj,
                        countriesObj
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    // 4. Setting *dogImage* to the image url that we received from the response above
                    .then(data => setFilmsList(data))

            }


        }

        fetchData()

        console.log(params)
        console.log(searchParams)


        // try {
        //     const res = await fetch('http://localhost:12120/api/films/filter', {
        //         method: 'POST',
        //         body: JSON.stringify({...filterObj,
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     const films = await res.json()
        //     if (filterObj.part > 1) {
        //         setFilmsList(prev => [...prev, ...films])
        //     } else {
        //         setFilmsList(films)
        //     }
        // } catch (error) {
        //     console.log(error.message)
        // }


    }, [params, searchParams])


    const router = useRouter()
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
                filmsList.length % 28 === 0 &&
                <button className={styles.movies__btn} onClick={() => nextListFilms(filterObj.part)}>
                    Показать еще
                </button>}
        </>
    )
}