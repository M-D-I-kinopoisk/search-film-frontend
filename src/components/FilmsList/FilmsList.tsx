'use client'

import styles from './filmList.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {useParams, usePathname, useRouter, useSearchParams} from 'next/navigation'



export default function FilmsList({genres, countries, }) {

    const searchParams = useSearchParams()
    const params = useParams()
    const pathname = usePathname()




    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilms)
    const dispatch = useDispatch()



    useEffect(() => {
        console.log('useEffect работает')
        console.log(params)
        //
        // console.log(pathname)
        console.log(searchParams.get('year'))

        const filter = {
            'ratingStart': 1,
            'countRatingStart': 1000,
            'yearStart': 0,
            'yearEnd': 0,
            'part': 1,
            'typeSorting': 'year'
        }
        let newFilter = {...filter}
        if (Object.keys(params).length !== 0) {

                 console.log(params.movies.split('/'))
            const arrParams = params.movies.split('/')
            arrParams.forEach(i => {
                const strArr = i.replaceAll('%2B', ',').replaceAll('%20', ' ').split(',')
                console.log(strArr)
                const arrGenres = genres.filter(i => strArr.includes(i.nameEN))
                const arrCountries = countries.filter(i => strArr.includes(i.nameEN))
                if (arrGenres.length > 0) {
                   const genresArrId = arrGenres.map(i => i.id)
                    // @ts-ignore
                    newFilter = {...filter, 'arrIdGenres' : genresArrId}
                }
                if (arrCountries.length > 0) {
                    const countriesArrId = arrCountries.map(i => i.id)
                    // @ts-ignore
                    newFilter = {...filter, 'arrIdCountries' : countriesArrId}
                }
            })

        }

        // if (Object.keys(searchParams).length !== 0) {
            console.log()
            if (searchParams.get('ivi_rating_10_gte')) {
                const ratingStart  =  Number(searchParams.get('ivi_rating_10_gte'))
                newFilter = {...filter, 'ratingStart' : ratingStart}
            }
            if (searchParams.get('year')) {
                console.log('есть year')
                const yearStart =  Number(searchParams.get('year')?.split('_')[0])
                const  yearEnd =  Number(searchParams.get('year')?.split('_')[1])
                newFilter = {...filter, 'yearStart' : yearStart, 'yearEnd' : yearEnd}
            }
        // }
        dispatch(getFilterObj(
            {
                ...newFilter,
            }
        ))


        const fetchData = async () => {

// console.log({
//     ...newFilter
// })


            fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify({...newFilter}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
                .then(data => setFilmsList(data))


            // dispatch(getFilterObj(
            //     {
            //         ...filterObj,
            //         arrIdGenres,
            //         arrIdCountries,
            //         ratingStart,
            //         yearStart,
            //         yearEnd,
            //         'part': 1,
            //     }
            // ))
        }
        // console.log(newFilter)
        fetchData()

        // console.log(params)
        // console.log(searchParams)


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


    }, [pathname, searchParams])


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