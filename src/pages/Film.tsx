import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/Film.module.scss'
import Trailer from '@/components/FilmPageComponents/MainInfo/Trailer/Trailer'
import WatchAllDevices from '@/components/FilmPageComponents/WatchAllDevices/WatchAllDevices'
import CommentList from '@/components/FilmPageComponents/Comments/CommentList/CommentList'
import AdditionalsList from '@/components/FilmPageComponents/Additionals/AdditionalsList/AdditionalsList'
import AwardsList from '@/components/FilmPageComponents/Awards/AwardsList/AwardsList'
import CreatorsList from '@/components/FilmPageComponents/Creators/CreatorsList/CreatorsList'
import GaleryList from '@/components/FilmPageComponents/Galery/GaleryList/GaleryList'
import Information from '@/components/FilmPageComponents/MainInfo/Information/Information'

const Film: React.FC = () => {
    return (
        <MainContainer title='Страница фильма'>
            <div className={style.wrapper}>
                <div className={style.genre}>
                    <div className={style.title}>
                        <span>Фильмы</span>
                        <span>Драмы</span>
                    </div>
                    <div className={style.choice}>
                        выбор Иви
                    </div>
                </div>
                <div className={style.main}>
                    <Trailer />
                    <Information />
                </div>
                <GaleryList />
                <CreatorsList />
                <AwardsList />
                <AdditionalsList />
                <CommentList />
                <WatchAllDevices />
            </div>
        </MainContainer>
    )
}

export default Film