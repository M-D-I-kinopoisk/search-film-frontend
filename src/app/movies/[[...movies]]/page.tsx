import Filter from '@/components/Filter/Filter'

import styles from '../[movies].module.scss'
import Breadcrumbs from '@/components/UI/Breadcrumbs/Breadcrumbs'

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


const Movies = async ({searchParams}) => {
    const genres = await getGenres()
    const countries = await getCounties()

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.filterNav}>
                    <Breadcrumbs title={'Фильмы'}/>
                </div>
                <Filter genres={genres} countries={countries} searchParams={searchParams}/>
            </div>
        </div>
    )
}

export default Movies