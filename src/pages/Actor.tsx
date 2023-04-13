import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import ActorInfo from '@/components/ActorInfo/ActorInfo'
import ActorFilms from '@/components/ActorFilms/ActorFilms'
import style from '../scss/pages/actor.module.scss'

const Actor: React.FC = () => {
    return (
        <MainContainer title='Актер'>
            <div className={style.wrapper}>
                <div className={style.backlink}>
                    <span className={style.leftArrow}>
                        navigate_before
                    </span>
                    <span className=''>Назад</span>
                </div>

                <div className={style.content}>
                    <ActorInfo/>
                    <div className={style.films}>
                        <div className={style.title}>
                            <h2>Полная фильмография </h2>
                            <span>18 фильмов</span>
                        </div>
                        <ActorFilms/>
                    </div>
                    <div className={style.more}>
                        <a href=''>Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.backlink}>
                    <span className={style.leftarrow}>
                        navigate_before
                    </span>
                    <span className=''>Назад</span>
                </div>

                <div className={style.content}>
                    <ActorInfo/>
                    <div className={style.films}>
                        <div className={style.title}>
                            <h2>Полная фильмография </h2>
                            <span>18 фильмов</span>
                        </div>
                        <ActorFilms/>
                    </div>

                    <div className={style.more}>
                        <a href=''>Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Actor