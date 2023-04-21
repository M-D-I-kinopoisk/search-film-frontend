import React from 'react'

import styles from '../scss/pages/home.module.scss'

import TeaserBtn from '@/components/UI/TeaserBtn'
import MainSlider from '@/components/MainSlider/MainSlider'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmsRating from '@/components/FilmsRating/FilmsRating'

const Home: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <MainSlider/>
            <div className={styles.container}>
                <ul className={styles.teaser__list}>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'
                               alt='/' width={24} height={32} text='30 дней подписки за 1 ₽'
                               className={styles.teaser__item}/>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg'
                               alt='/' width={56} height={32} text='Активировать сертификат'
                               className={styles.teaser__item}/>
                </ul>
                {/* сюда приходят все фильмы по категориям на главной, прост перебираем их и делает компоненту ну и вставляет данные
                (они дожны быть одинаковыми) кроме наполнения фильмов, разумеется*/}
            </div>
            <FilmsCategory className={styles.films} title='Рекомендую посмотреть'/>

            <FilmsRating/>

            <FilmsCategory className={styles.films} title='Добрые мультсериалы'/>

        </div>
    )
}

export default Home