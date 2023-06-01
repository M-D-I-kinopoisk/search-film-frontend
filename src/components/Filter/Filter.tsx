'use client'

import FilterFilms from '@/components/Filter/FilterFilms/FilterFilms'
import FilmsList from '@/components/FilmsList/FilmsList'
import {useEffect, useState} from 'react'

export default function Filter({genres, countries ,searchParams}) {

    const [listDir, setListDir] = useState([])
const [listActor, setListActor] =useState([])

    useEffect(() => {
        const fetchData = async () => {

            const responseDir = await fetch('http://localhost:12120/api/film-members/profession/1',
                {next: {revalidate: 100},})
            const dataDir = await responseDir.json()
            const responseActor = await fetch('http://localhost:12120/api/film-members/profession/2',
                {next: {revalidate: 100},})
            const dataActor = await responseActor.json()
            console.log(dataDir)
            setListDir(dataDir)
            setListActor(listActor)
        }

        fetchData()
    }, [])

    return (
        <>
            <FilterFilms genres={genres} countries={countries}  listActor={listActor} listDir={listDir}/>
            <FilmsList genres={genres} countries={countries}  listDir={listDir} listActor={listActor} searchPar={searchParams}/>
        </>
    )
}