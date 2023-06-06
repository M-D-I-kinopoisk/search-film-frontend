'use client'

import styles from './filmList.module.scss'
import {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilter} from '@/redux/FilterSlice'
import {useParams, useSearchParams} from 'next/navigation'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import FilmCard from '@/components/FilmCard/FilmCard'


export default function FilmsList({genres, countries, listDir, listActor, searchPar}) {

    const searchParams = useSearchParams()
    const params = useParams()


    const [filmsList, setFilmsList] = useState<object[]>([])

    const {filterObj} = useSelector(selectFilter)
    // const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
            console.log('useEffect работает')
            console.log(params)

            const filter = {
                'ratingStart': 1,
                'countRatingStart': 1000,
                'yearStart': 0,
                'yearEnd': 0,
                'part': 1,
                'typeSorting': 'year'
            }
            const filterText = {}
            let newFilterText = {...filterText}
            let newFilter = {...filter}
            // @ts-ignore
            if (Object.keys(params).length !== 0) {

                // @ts-ignore
                const arrParams = params?.movies.split('/')
                arrParams.forEach(i => {
                    const strArr = i.replaceAll('%2B', ',').replaceAll('%20', ' ').split(',')
                    const arrGenres = genres.filter(i => strArr.includes(i.nameEN.toLowerCase()))
                    const arrCountries = countries.filter(i => strArr.includes(i.nameEN.toLowerCase()))


                    if (arrCountries.length > 0) {
                        const countriesArrId = arrCountries.map(i => i.id)
                        const arrCountriesEN = arrCountries.map(i => i.nameEN)
                        const arrCountriesRU = arrCountries.map(i => i.nameRU)
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


            if (searchParams?.get('ivi_rating_10_gte')) {

                const ratingStart = Number(searchParams.get('ivi_rating_10_gte'))
                newFilter = {...newFilter, 'ratingStart': ratingStart}
            }
            if (searchParams?.get('year')) {

                const yearStart = Number(searchParams.get('year')?.split('_')[0])
                const yearEnd = Number(searchParams.get('year')?.split('_')[1])
                const nameYears = searchParams.get('year')?.replaceAll('_', '-')
                newFilterText = {...newFilterText, 'arrYears': [nameYears]}
                newFilter = {...newFilter, 'yearStart': yearStart, 'yearEnd': yearEnd}
            }
            if (searchParams?.get('sort')) {

                const typeSorting = searchParams.get('sort')
                // @ts-ignore
                newFilter = {...newFilter, 'typeSorting': typeSorting}
            }
            if (searchParams?.get('ivi_rating_10_gte')) {

                const ratingStart = Number(searchParams.get('ivi_rating_10_gte'))

                newFilter = {...newFilter, 'ratingStart': ratingStart}
                newFilterText = {...newFilterText, 'ratingStart': [ratingStart]}
            }
            if (searchParams?.get('ivi_grades')) {

                const countRatingStart = Number(searchParams.get('ivi_grades'))
                newFilter = {...newFilter, 'countRatingStart': countRatingStart}
                newFilterText = {...newFilterText, 'countRatingStart': [countRatingStart]}
            }
            if (searchParams?.get('dir')) {

                const strMembersDir = searchParams.get('dir')

                const StrNameDirReplace = strMembersDir?.replaceAll('%20', ' ')

                const arrDir = listDir.filter(i => StrNameDirReplace?.includes(i.nameEN))

                // @ts-ignore
                if (newFilter.hasOwnProperty('arrMembersFilterDto')) {
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrMembersFilterDto': [...newFilter.arrMembersFilterDto, {
                            'idMember': arrDir[0].id,
                            'idProfession': 1
                        }]
                    }
                    newFilterText = {
                        ...newFilterText,
                        'arrDirMembers': [arrDir[0].nameRU],
                        'arrDirMembersEN': [arrDir[0].nameEN]
                    }
                } else {
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrMembersFilterDto': [{'idMember': arrDir[0].id, 'idProfession': 1}]}
                    newFilterText = {
                        ...newFilterText,
                        'arrDirMembers': [arrDir[0].nameRU],
                        'arrDirMembersEN': [arrDir[0].nameEN]
                    }
                }
            }


            if (searchParams?.get('actor')) {

                const strMembersActor = searchParams.get('actor')

                const StrNameActorReplace = strMembersActor?.replaceAll('%20', ' ')

                const arrActor = listActor.filter(i => StrNameActorReplace?.includes(i.nameEN))


                if (newFilter.hasOwnProperty('arrMembersFilterDto')) {
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrMembersFilterDto': [...newFilter.arrMembersFilterDto, {
                            'idMember': arrActor[0].id,
                            'idProfession': 2
                        }]
                    }
                    newFilterText = {
                        ...newFilterText,
                        'arrActorMembers': [arrActor[0].nameRU],
                        'arrActorMembersEN': [arrActor[0].nameEN]
                    }
                } else {
                    // @ts-ignore
                    newFilter = {...newFilter, 'arrMembersFilterDto': [{'idMember': arrActor[0].id, 'idProfession': 2}]}
                    newFilterText = {
                        ...newFilterText,
                        'arrActorMembers': [arrActor[0].nameRU],
                        'arrActorMembersEN': [arrActor[0].nameEN]
                    }
                }

            }

            //
            // console.log(newFilterText)
            // console.log(newFilter)
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
                setLoading(false)
                try {
                    fetch('http://localhost:12120/api/films/filter', {
                        method: 'POST',
                        body: JSON.stringify({...newFilter}),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => setFilmsList(data))
                } catch (error) {
                    console.log(error.message)
                }
                setLoading(true)
            }

            fetchData()


            // console.log(searchPar)

        }
        ,
        [searchPar]
    )


    const nextListFilms = (part) => {
        try {
            fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify({
                    ...filterObj,
                    'part': part + 1,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setFilmsList(prev => [...prev, ...data])
                    console.log(filmsList)
                })
        } catch (error) {
            console.log(error.message)
        }

    }


    return (
        <>
            {!loading && <Skeleton/>}

            <div className={styles.cardList}>
                {loading &&
                    filmsList && filmsList.map((item: any, inx) => <div key={inx} className={styles.filmCard}>
                        <FilmCard film={item}/></div>)}

            </div>
            <div>
                {filmsList.length > 0 &&
                    filmsList.length % 28 === 0 &&
                    <button className={styles.movies__btn} onClick={() => nextListFilms(filterObj.part)}>
                        Показать еще
                    </button>}
            </div>
        </>
    )
}