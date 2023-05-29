'use client'

import React from 'react'

import styles from './Trailers.module.scss'

import TrailersItem from './TrailersItem'
import MyModal from '../MyModal/MyModal'

const TrailersList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [isModalOpen])

    return (
        <div className={styles.addMaterials}>
            <div className={styles.addMaterialsTitle}>
                <div onClick={() => setIsModalOpen(true)}>Трейлеры</div> и доп. материалы
            </div>
            <div className={styles.addMaterialsItems}>
                <TrailersItem/>
            </div>
            <MyModal isModalOpen={isModalOpen}
                     setIsModalOpen={setIsModalOpen}
                     componentName={'trailers'}/>
        </div>
    )
}

export default TrailersList