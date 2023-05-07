import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import styles from '../scss/pages/film.module.scss'
import WatchAllDevices from '@/components/Film/WatchAllDevices/WatchAllDevices'
import InfoContent from '@/components/Film/InfoContent/InfoContent'
import AwardsList from '@/components/Film/Awards/AwardsList'
import CommentList from '@/components/Film/Comments/CommentsList'
import CreatorsList from '@/components/Film/Creators/CreatorsList'
import TrailersList from '@/components/Film/TrailersAndMaterials/TrailersList'
import GaleryList from '@/components/Film/Galery/GaleryList'
import TrailerContent from '@/components/Film/TrailerContent/TrailerContent'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'

import { BsChevronRight } from 'react-icons/bs'

const Film: React.FC = () => {
    return (
        <MainContainer title='Страница фильма'>
            <div className={styles.wrapper}>
                <div className={styles.genre}>
                    <div className={styles.title}>
                        <span>Фильмы</span>
                        <span>Драмы</span>
                    </div>

                    <div className={styles.arrow}>
                        <BsChevronRight size={22} />
                    </div>

                    <div className={styles.choice}>
                        выбор Иви
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <TrailerContent />
                    <InfoContent />
                </div>
                <FilmsCategory title='С фильмом «1+1» смотрят' />
                {/* <GaleryList /> */}
                <CreatorsList />
                <AwardsList />
                <TrailersList />
                <CommentList />
                <WatchAllDevices />
            </div>
        </MainContainer>
    )
}

export default Film