'use client'

import styles from './filmList.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {useParams, usePathname, useRouter, useSearchParams} from 'next/navigation'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'


export default function FilmsList({genres, countries, searchPar}) {

    const searchParams = useSearchParams()
    const params = useParams()
    const pathname = usePathname()


    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
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
        const filterText = {
            // arrActorMembers? : string[]
            // arrCountries? : string[]
            // arrCountriesEN? : string[]
            // arrDirMembers?: string[]
            // arrGenres? : string[]
            // arrGenresEN? : string[]
            // arrYears? : string[]
            // countRatingStart?: number[]
            // ratingStart?: number[]
        }
        let newFilterText = {...filterText}
        let newFilter = {...filter}
        if (Object.keys(params).length !== 0) {

            // console.log(params.movies.split('/'))
            const arrParams = params.movies.split('/')
            arrParams.forEach(i => {
                const strArr = i.replaceAll('%2B', ',').replaceAll('%20', ' ').split(',')

                const arrGenres = genres.filter(i => strArr.includes(i.nameEN.toLowerCase()))
                const arrCountries = countries.filter(i => strArr.includes(i.nameEN.toLowerCase()))


                if (arrCountries.length > 0) {
                    const countriesArrId = arrCountries.map(i => i.id)
                    const arrCountriesEN = arrCountries.map(i => i.nameEN)
                    const arrCountriesRU = arrCountries.map(i => i.nameRU)
                    console.log(arrCountries)
                    newFilterText = {...newFilterText, 'arrCountries': arrCountriesRU, 'arrCountriesEN': arrCountriesEN}
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrIdCountries': countriesArrId}
                }
                if (arrGenres.length > 0) {
                    const genresArrId = arrGenres.map(i => i.id)
                    const arrGenresEN = arrGenres.map(i => i.nameEN)
                    const arrGenresRU = arrGenres.map(i => i.nameRU)

                    newFilterText = {...newFilterText, 'arrGenres': arrGenresRU, 'arrGenresEN': arrGenresEN}
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrIdGenres': genresArrId}
                    console.log(arrGenres)
                }
            })

        }


        console.log()
        if (searchParams.get('ivi_rating_10_gte')) {
            const ratingStart = Number(searchParams.get('ivi_rating_10_gte'))
            newFilter = {...newFilter, 'ratingStart': ratingStart}
        }
        if (searchParams.get('year')) {
            console.log('есть year')
            const yearStart = Number(searchParams.get('year')?.split('_')[0])
            const yearEnd = Number(searchParams.get('year')?.split('_')[1])
            const nameYears = `от ${yearStart} до ${yearEnd}`
            newFilterText = {...newFilterText, 'arrYears': [nameYears]}
            newFilter = {...newFilter, 'yearStart': yearStart, 'yearEnd': yearEnd}
        }
        if (searchParams.get('sort')) {
            console.log('есть sort')
            const typeSorting = searchParams.get('sort')
            console.log(typeSorting)
            // @ts-ignore
            newFilter = {...newFilter, 'typeSorting': typeSorting}
        }
        if (searchParams.get('ivi_rating_10_gte')) {
            console.log('есть ivi_rating_10_gte')
            const ratingStart = Number(searchParams.get('ivi_rating_10_gte'))
            console.log(ratingStart)
            // @ts-ignore
            newFilter = {...newFilter, 'ratingStart': ratingStart}
            newFilterText = {...newFilterText, 'ratingStart': [ratingStart]}
        }


        console.log(newFilterText)
        console.log(newFilter)
        dispatch(getFilterObj(
            {
                ...newFilter,
            }
        ))
        dispatch(getFilterTextObj(
            {
                ...newFilterText,
            }
        ))


        const fetchData = async () => {


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

        }

        fetchData()




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
        console.log(searchPar)

    }, [searchPar])


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