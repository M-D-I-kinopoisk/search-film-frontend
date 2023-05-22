'use client'

import React from 'react'
import {Metadata} from 'next'
import styles from './home.module.scss'

import TeaserBtn from '@/components/UI/TeaserBtn'
import MainSlider from '@/components/MainSlider/MainSlider'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmsRating from '@/components/FilmsRating/FilmsRating'
import FilmsClause from '@/components/FilmsClause/FilmsClause'
import FilmsInteresting from '@/components/FilmsInteresting/FilmsInteresting'


const Home = () => {

    const [fighters, setFighters] = React.useState([])
    const [adventures, setAdventures] = React.useState([])

    React.useEffect(() => {
        async function getFilms() {
            const resFighters = await fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify({
                    'arrIdGenres': [
                        2
                    ],
                    'part': 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const dataFighters = await resFighters.json()
            setFighters(dataFighters)

            const resAdventures = await fetch('http://localhost:12120/api/films/filter', {
                method: 'POST',
                body: JSON.stringify({
                    'arrIdGenres': [
                        15
                    ],
                    'part': 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const dataAdventures = await resAdventures.json()
            setAdventures(dataAdventures)
        }

        getFilms()
    }, [])

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
            </div>

            <FilmsRating/>

            <FilmsClause/>

            <FilmsCategory list={fighters} title='Боевики'/>

            <FilmsCategory list={adventures} title='Приключения'/>

            <FilmsInteresting/>

        </div>
    )
}

export default Home