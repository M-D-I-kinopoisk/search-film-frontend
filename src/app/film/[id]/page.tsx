'use client'

import styles from './film.module.scss'
import {BsChevronRight} from 'react-icons/bs'
import TrailerContent from '@/components/Film/TrailerContent/TrailerContent'
import InfoContent from '@/components/Film/InfoContent/InfoContent'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import CreatorsList from '@/components/Film/Creators/CreatorsList'
import AwardsList from '@/components/Film/Awards/AwardsList'
import TrailersList from '@/components/Film/TrailersAndMaterials/TrailersList'
import CommentList from '@/components/Film/Comments/CommentsList'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import React from 'react'
import {useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'

export default function Film() {
    const [film, setFilm] = React.useState({})
    const {filmId} = useSelector(selectFilms)
    // через редакс нужно будет бахнуть это
    React.useEffect(() => {
        async function getFilmId(id) {
            const response = await fetch(`http://localhost:12120/api/films/${id}`)
            const dataFilm = await response.json()
            setFilm(dataFilm)
        }

        getFilmId(filmId)
    }, [])

    console.log(film)

    return <div className={styles.wrapper}>
        <div className={styles.genre}>
            <div className={styles.title}>
                <span>Фильмы</span>
                <span>Драмы</span>
            </div>

            <div className={styles.arrow}>
                <BsChevronRight size={22}/>
            </div>

            <div className={styles.choice}>
                выбор Иви
            </div>
        </div>

        <div className={styles.mainContent}>
            <TrailerContent/>
            <InfoContent film={film}/>
            {/* не обращай внимания если чо, это чисто параша для теста была */}
        </div>
        {/*<FilmsCategory title='С фильмом «1+1» смотрят'/>*/}
        <CreatorsList/>
        <AwardsList/>
        <TrailersList/>
        <CommentList/>
        <WatchAllDevices/>
    </div>
}