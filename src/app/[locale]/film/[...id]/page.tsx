import styles from './film.module.scss'

import {BsChevronRight} from 'react-icons/bs'
import MainTrailer from '@/components/Film/FilmMainTrailer/MainTrailer'
import FilmInfo from '@/components/Film/FilmInfo/FilmInfo'
import FilmCreators from '@/components/Film/FilmCreators/FilmCreators'
import FilmTrailers from '@/components/Film/FilmTrailers/FilmTrailers'
import CommentList from '@/components/Film/FilmComments/FilmComments'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmModal from '@/components/Film/FilmModal/FilmModal'
import FilmGenres from '@/components/Film/FilmGenres/FilmGenres'

type FilmProps = {
    params: {
        id: string
    }
}

async function getFilmById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/films/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log('Произошла ошибка: ', error)
    }
}

async function getFilmInfoById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/film-info/film/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log('Произошла ошибка: ', error)
    }
}

async function getActorFilmById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/film-members/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log('Произошла ошибка: ', error)
    }
}

async function getCommentsFilmById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/comments/film/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log('Произошла ошибка: ', error)
    }
}

async function getGenresFilm(genres) {
    const genresId = genres?.map((genre) => {
        return genre.id
    })

    try {
        const response = await fetch('http://localhost:12120/api/films/filter', {
            method: 'POST',
            body: JSON.stringify({
                'arrIdGenres': genresId,
                'part': 2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response.json()
    } catch (error) {
        console.log('Произошла ошибка: ', error)
    }
}

export default async function Film({params: {id}}: FilmProps) {
    const film = await getFilmById(id[0])
    const actors = await getActorFilmById(id[0])
    const filmInfo = await getFilmInfoById(id[0])
    const filmComments = await getCommentsFilmById(id[0])
    const genres = await getGenresFilm(film.genres)

    return <div className={styles.wrapper}>
        <div className={styles.filmGenres}>
            <FilmGenres genres={film.genres}/>

            <div className={styles.arrow}>
                <BsChevronRight size={22}/>
            </div>

            <div className={styles.choice}>
                выбор Иви
            </div>
        </div>

        <div className={styles.mainContent}>
            <MainTrailer filmInfo={filmInfo}/>
            <FilmInfo film={film} filmInfo={filmInfo} actors={actors}/>
        </div>

        <FilmsCategory title={`С фильмом «${film.nameRU}» смотрят`} list={genres} titleEN={film.nameEN}/>
        <FilmCreators actors={actors} id={id[0]}/>
        <FilmTrailers id={id[0]} filmInfo={filmInfo}/>
        <CommentList id={id[0]} filmComments={filmComments}/>
        <WatchAllDevices film={film}/>
        <FilmModal filmComments={filmComments} film={film} actors={actors} filmInfo={filmInfo} id={id[0]}/>
    </div>
}