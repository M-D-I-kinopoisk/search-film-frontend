import Filter from '@/components/Filter/Filter'
import MainContainer from '@/components/MainContainer/MainContainer'
import styles from '@/scss/pages/movies.module.scss'


const Movies = () => {
    return (
        <MainContainer title='Фильмы'>
            <div className={styles.container}>
            <Filter/>
            </div>
        </MainContainer>
    )
}

export default Movies