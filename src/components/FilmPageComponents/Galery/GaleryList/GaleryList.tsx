import React from 'react'

import style from './GaleryList.module.scss'
import GaleryItem from '../GaleryItem/GaleryItem'

const GaleryList: React.FC = () => {
    return (
        <div className={style.gallery}>
            <div className={style.galleryTitle}>
                С фильмом «1+1» смотрят
            </div>
            <div className={style.galleryItems}>
                <GaleryItem />
                <GaleryItem />
                <GaleryItem />
                <GaleryItem />
                <GaleryItem />
                <GaleryItem />
                <GaleryItem />
            </div>
        </div>
    )
}

export default GaleryList