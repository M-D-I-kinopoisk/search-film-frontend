import styles from './film.module.scss'
import {BsChevronRight} from 'react-icons/bs'
import TrailerContent from '@/components/Film/TrailerContent/TrailerContent'
import InfoContent from '@/components/Film/InfoContent/InfoContent'
import CreatorsList from '@/components/Film/Creators/CreatorsList'
import AwardsList from '@/components/Film/Awards/AwardsList'
import TrailersList from '@/components/Film/TrailersAndMaterials/TrailersList'
import CommentList from '@/components/Film/Comments/CommentsList'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import MyModal from '@/components/Film/MyModal/MyModal'

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
        console.log(error, 'произошла ошибка')
    }
}

async function getFilmInfoById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/film-info/film/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log(error, 'произошла ошибка')
    }
}

async function getActorFilmById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/film-members/${id}`, {
            next: {revalidate: 100}
        })

        return response.json()
    } catch (error) {
        console.log(error, 'произошла ошибка')
    }
}

async function getCommentsFilmById(id) {
    try {
        const response = await fetch(`http://localhost:12120/api/comments/film/${id}`)

        return response.json()
    } catch (error) {
        console.log(error, 'произошла ошибка')
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
        console.log(error, 'произошла ошибка')
    }
}

export default async function Film({params: {id}}: FilmProps) {
    const film = await getFilmById(id)
    const actors = await getActorFilmById(id)
    const filmInfo = await getFilmInfoById(id)
    const filmComments = await getCommentsFilmById(id)
    const genres = await getGenresFilm(film.genres)

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
            <TrailerContent filmInfo={filmInfo}/>
            <InfoContent film={film} filmInfo={filmInfo} actors={actors} filmComments={filmComments}/>
        </div>

        <FilmsCategory title={`С фильмом <<${film.nameRU}>> смотрят`} list={genres}/>
        <CreatorsList actors={actors}/>
        <AwardsList/>
        <TrailersList filmInfo={filmInfo}/>
        <CommentList/>
        <WatchAllDevices/>
        <MyModal actors={actors} filmInfo={filmInfo}/>
    </div>
}