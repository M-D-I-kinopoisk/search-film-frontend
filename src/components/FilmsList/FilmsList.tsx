'use client'

import styles from './filmList.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {useParams,  useSearchParams} from 'next/navigation'


export default function FilmsList({genres, params, searchParams}) {

    // const searchParams = useSearchParams()

    // const params = useParams()


    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()


    // const [listGenres, setListGenres] = useState<[] | any>([])

    useEffect(() => {
        console.log('useEffect работает')
        // console.log(params)

        const fetchData = async () => {

            fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify({
                    ...filterObj,
                    // arrIdGenres: [newArrParams[0].id]
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
                .then(data => setFilmsList(data))






            // if (Object.keys(params).length !== 0) {
            //     const arrParams = params.movies.split('/')
            //     console.log(arrParams[0])
            //     const newArrParams = genres.filter(el => el.nameEN === arrParams[0])
            //     console.log(newArrParams)
            //     console.log()
            //
            //
            //
            // }
        }

        fetchData()


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


    }, [])


    console.log(params)
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