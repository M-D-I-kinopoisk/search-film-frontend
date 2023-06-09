import styles from './home.module.scss'

import TeaserButton from '@/components/UI/TeaserButton/TeaserButton'
import MainSlider from '@/components/Home/MainSlider/MainSlider'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmsRating from '@/components/Home/FilmsRating/FilmsRating'
import FilmsClause from '@/components/Home/FilmsClause/FilmsClause'

async function getFightersFilms() {
    const response = await fetch('http://localhost:12120/api/films/filter', {
        method: 'POST',
        body: JSON.stringify({
            'arrIdGenres': [
                2
            ],
            'part': 3
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

async function getAdventuresFilms() {
    const response = await fetch('http://localhost:12120/api/films/filter', {
        method: 'POST',
        body: JSON.stringify({
            'arrIdGenres': [
                15
            ],
            'part': 4
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}

async function getRatingFilms() {
    const response = await fetch('http://localhost:12120/api/films/filter', {
        method: 'POST',
        body: JSON.stringify({
            'ratingStart': 8.5,
            'part': 1
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}

export default async function Home() {
    const fighters = await getFightersFilms()
    const adventures = await getAdventuresFilms()
    const ratingFilms = await getRatingFilms()


    return <div className={styles.wrapper}>
        <MainSlider/>
        <div className={styles.container}>
            <ul className={styles.teaser__list}>
                <TeaserButton src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'
                              alt='/' width={24} height={32} text='30 дней подписки за 1 ₽'
                              textEN={'30 days subscription for 1 ₽'}
                              className={styles.teaser__item}/>
                <TeaserButton src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg'
                              alt='/' width={56} height={32} text='Активировать сертификат'
                              textEN={'Activate Certificate'}
                              className={styles.teaser__item}/>
            </ul>
        </div>

        <FilmsRating ratingFilms={ratingFilms}/>

        <FilmsClause/>

        <FilmsCategory list={fighters} title='Боевики' titleEN='fighter'/>

        <FilmsCategory list={adventures} title='Приключения' titleEN='adventures'/>
    </div>
}