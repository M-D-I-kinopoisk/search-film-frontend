import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import ActorInfo from '@/components/ActorInfo/ActorInfo'
import ActorFilms from '@/components/ActorFilms/ActorFilms'
import style from '../scss/pages/Actor.module.scss'
import Image from 'next/image'

const Actor: React.FC = () => {
    return (
        <MainContainer title='Актер'>
            <div className={style.wrapper}>
                <div className={style.backlink}>
                    <Image
                        src='/img/left-arrow.png'
                        width={20}
                        height={20}
                        alt='ivi'
                    />
                    <span >Назад</span>
                </div>

                <div className={style.content}>
                    <ActorInfo />
                    <div className={style.films}>
                        <div className={style.title}>
                            <h2>Полная фильмография </h2>
                            <span>18 фильмов</span>
                        </div>
                        <ActorFilms />
                    </div>

                    <div className={style.more}>
                        <a >Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Actor