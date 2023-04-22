import React from 'react'

import MainContainer from '@/components/MainContainer/MainContainer'
import ActorInfo from '@/components/ActorPageComponents/ActorInfo/ActorInfo'
import style from '../scss/pages/Actor.module.scss'
import Films from '@/components/ActorPageComponents/Films/Films'

const Actor: React.FC = () => {
    return (
        <MainContainer title='Актер'>
            <div className={style.wrapper}>
                <div className={style.backLink}>
                    <img src='/img/left-arrow.png' />
                    <span >Назад</span>
                </div>

                <div className={style.content}>
                    <ActorInfo />
                    <Films />

                    <div className={style.more}>
                        <a >Ещё 10 фильмов</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Actor