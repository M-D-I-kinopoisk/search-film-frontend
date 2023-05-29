import styles from './home.module.scss'

import TeaserBtn from '@/components/UI/TeaserBtn'
import MainSlider from '@/components/MainSlider/MainSlider'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmsRating from '@/components/FilmsRating/FilmsRating'
import FilmsClause from '@/components/FilmsClause/FilmsClause'

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

export default async function Home() {
    const fighters = await getFightersFilms()
    const adventures = await getAdventuresFilms()

    return <div className={styles.wrapper}>
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
        </div>

        <FilmsRating/>

        <FilmsClause/>

        <FilmsCategory list={fighters} title='Боевики'/>

        <FilmsCategory list={adventures} title='Приключения'/>
    </div>
}