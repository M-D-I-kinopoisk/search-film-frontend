'use client'

import React, {useState} from 'react'

import styles from './Awards.module.scss'
import AwardsItem from './AwardsItem'
import MyModal from '../MyModal/MyModal'

type AwardsListProps = {}

const AwardsList: React.FC<AwardsListProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const items = [1, 2, 3, 4]

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [isModalOpen])

    return (
        <div className={styles.awards}>
            <div onClick={() => setIsModalOpen(false)}
                 className={styles.awardsTitle}>
                Награды
            </div>

            <div className={styles.awardsItems}
                 onClick={() => setIsModalOpen(false)}>
                {items.map((elem) =>
                    <AwardsItem key={elem}/>
                )}
            </div>

            <MyModal isModalOpen={isModalOpen}
                     setIsModalOpen={setIsModalOpen}
                     componentName={'awards'}/>
        </div>
    )
}

export default AwardsList