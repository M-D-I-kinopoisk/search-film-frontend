import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import style from '../scss/pages/film.module.scss'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import Image from 'next/image'

import InfoContent from '@/components/Film/InfoContent/InfoContent'
import AwardsList from '@/components/Film/Awards/AwardsList'
import CommentList from '@/components/Film/Comments/Comments'
import CreatorsList from '@/components/Film/Creators/CreatorsList'
import TrailersList from '@/components/Film/TrailersAndMaterials/TrailersList'
import GaleryList from '@/components/Film/Galery/GaleryList'
import TrailerContent from '@/components/Film/TrailerContent/TrailerContent'

const Film: React.FC = () => {
    return (
        <MainContainer title='Страница фильма'>
            <div className={style.wrapper}>
                <div className={style.genre}>
                    <div className={style.title}>
                        <span>Фильмы</span>
                        <span>Драмы</span>
                    </div>

                    <div className={style.arrow}>
                        <Image
                            alt='Назад'
                            width={20}
                            height={24}
                            src='/img/left-arrow.png'
                        />
                    </div>

                    <div className={style.choice}>
                        выбор Иви
                    </div>
                </div>

                <div className={style.mainContent}>
                    <TrailerContent/>
                    <InfoContent/>
                </div>

                <GaleryList/>
                <CreatorsList/>
                <AwardsList/>
                <TrailersList/>
                <CommentList/>
                <WatchAllDevices/>
            </div>
        </MainContainer>
    )
}

export default Film