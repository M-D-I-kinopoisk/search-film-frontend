import MainContainer from '@/components/MainContainer/MainContainer'
import FilterFilms from '@/components/FilterFilms/FilterFilms'

import styles from '@/scss/pages/movies.module.scss'


const Movies = () => {
    return (
        <MainContainer title='Фильмы'>
            <div className={styles.container}>
            <FilterFilms/>
            </div>
        </MainContainer>
    )
}

export default Movies