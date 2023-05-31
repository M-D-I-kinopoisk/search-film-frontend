import FilterFilms from '@/components/FilterFilms/FilterFilms'
import FilmsList from '@/components/FilmsList/FilmsList'

import styles from '../[movies].module.scss'



export async function generateMetadata({params}) {
    // const product = await fetch(`http://localhost:12120/api/members/${id}`).then((res) => res.json())
    return {
        title: `${params.movies ? params.movies[0] : null} : фильмы смотреть онлайн бесплатно в хорошем качестве`
    }
}
async function getGenres() {
    const response = await fetch(
        'http://localhost:12120/api/genres',
        // {next: {revalidate: 100}}
    )
    return response.json()
}

async function getCounties() {
    const response = await fetch(
        'http://localhost:12120/api/countries',
        // {next: {revalidate: 100}}
    )
    return response.json()
}

async function getListDir() {
    const response = await fetch(
        'http://localhost:12120/api/film-members/profession/9',
        // {next: {revalidate: 100}}
    )
    return response.json()
}

async function getListActor() {
    const response = await fetch(
        'http://localhost:12120/api/film-members/profession/1',
        // {next: {revalidate: 100}}
    )
    return response.json()
}

const Movies = async ({ params, searchParams  }) => {

    const genres = await getGenres()

    const countries = await getCounties()

    const listDir = await getListDir()

    const listActor = await getListActor()

    console.log(params)


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <FilterFilms genres={genres} countries={countries} listDir={listDir} listActor={listActor}/>
                <FilmsList genres={genres} countries={countries}  listDir={listDir} listActor={listActor} searchPar={searchParams}/>
            </div>
        </div>
    )
}

export default Movies