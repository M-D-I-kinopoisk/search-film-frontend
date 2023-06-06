import {useTranslations} from 'next-intl'

import FilterFilms from '@/components/Filter/FilterFilms/FilterFilms'
import FilmsList from '@/components/FilmsList/FilmsList'

import styles from '../[movies].module.scss'

export async function generateMetadata({params}) {
    // const product = await fetch(`http://localhost:12120/api/members/${id}`).then((res) => res.json())
    return {
        title: `${params.movies ? params.movies[0] : ''} : фильмы смотреть онлайн бесплатно в хорошем качестве`
    }
}

async function getGenres() {
    const response = await fetch(
        'http://localhost:12120/api/genres',
        {next: {revalidate: 100}}
    )
    return response.json()
}

async function getCounties() {
    const response = await fetch(
        'http://localhost:12120/api/countries',
        {next: {revalidate: 100}}
    )
    return response.json()
}

async function getActor() {
    const response = await fetch(
        'http://localhost:12120/api/film-members/profession/2')
    return response.json()
}

async function getDir() {
    const response = await fetch(
        'http://localhost:12120/api/film-members/profession/1')
    return response.json()
}




const Movies = async ({searchParams, params}) => {

    // const t = useTranslations('Index')

    const genres = await getGenres()

    const countries = await getCounties()

    const listActor = await getActor()

    const listDir = await getDir()
    


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <FilterFilms genres={genres} countries={countries}  listActor={listActor} listDir={listDir}/>
                <FilmsList genres={genres} countries={countries}  listDir={listDir} listActor={listActor} searchPar={searchParams}/>
            </div>
        </div>
    )
}

export default Movies