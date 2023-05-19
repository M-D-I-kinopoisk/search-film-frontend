'use client'

import React, { useState } from 'react'

import styles from './Trailers.module.scss'
import TrailersItem from './TrailersItem'
import MyModal from '../MyModal/MyModal'

const TrailersList: React.FC = () => {
    const [visible, setVisible] = useState(false)

    let items = [1, 2, 3, 4]

    const setModalScroll = () => {
        setVisible(true)
        document.body.classList.add('modalScroll')
    }

    return (
        <div className={styles.addMaterials}>
            <div className={styles.addMaterialsTitle}>
                <a onClick={() => setModalScroll()}>Трейлеры</a> и доп. материалы
            </div>

            <div className={styles.addMaterialsItems}>
                {items.map((elem) =>
                    <TrailersItem key={elem} />
                )}
            </div>

            <MyModal visible={visible}
                setVisible={setVisible}
                componentName={'trailers'} />
        </div>
    )
}

export default TrailersList