import React, { useState } from 'react'
import style from './Creators.module.scss'
import CreatorsItem from '../../Creators/CreatorsItem/CreatorsItem'

type CreatorsProps = {
    currencyCode?: any
}

const Creators: React.FC<CreatorsProps> = () => {
    return (
        <div className={style.creators}>
            <div className={style.positions}>
                Режжисеры
            </div>
            <div className={style.directorsItems}>
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
            </div>
            <div className={style.positions}>
                Актеры
            </div>
            <div className={style.directorsItems}>
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />

            </div>
            <div className={style.positions}>
                Продьюсеры
            </div>
            <div className={style.directorsItems}>
                <CreatorsItem inModal={true} />
                <CreatorsItem inModal={true} />
            </div>
        </div>
    )
}

export default Creators