import FilterFilms from '@/components/FilterFilms/FilterFilms'

import {Metadata} from 'next'

import styles from './movies.module.scss'


export const metadata: Metadata = {
    title: 'Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн фильмов на ivi.ru',
    description: 'Generated by Next.js',
}

const Movie = () => {


    return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <FilterFilms/>
                    <button className={styles.movies__btn}>Показать еще</button>
                </div>
            </div>
    )
}

export default Movie