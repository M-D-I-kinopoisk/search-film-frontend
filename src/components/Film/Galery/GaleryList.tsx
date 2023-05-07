import React from 'react'

import styles from './Galery.module.scss'
import GaleryItem from './GaleryItem'

const GaleryList: React.FC = () => {
    let items = [1, 2, 3, 4, 5]

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryTitle}>
                С фильмом «1+1» смотрят
            </div>

            <div className={styles.galleryItems}>
                {items.map((elem) =>
                    <GaleryItem key={elem} />
                )}
            </div>
        </div>
    )
}

export default GaleryList