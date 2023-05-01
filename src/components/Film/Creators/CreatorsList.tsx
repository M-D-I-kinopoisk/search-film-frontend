import React, { useState } from 'react'

import styles from './Creators.module.scss'
import MyModal from '../MyModal/MyModal'
import CreatorsItem from './CreatorsItem'

const CreatorsList: React.FC = () => {
    const [visible, setVisible] = useState(false)

    let items = [1, 2, 3, 4, 5, 6]

    const setModalScroll = () => {
        setVisible(true)
        document.body.classList.add('modalScroll')
    }

    return (
        <div className={styles.creators}>
            <div className={styles.creatorsTitle}>
                Актёры и создатели
            </div>

            <div className={styles.creatorsItems}>
                {items.map((elem) =>
                    <CreatorsItem key={elem} />
                )}

                <div onClick={() => setModalScroll()}
                    className={styles.moreCreatorsBtn}>
                    Еще
                </div>
            </div>

            <MyModal visible={visible}
                setVisible={setVisible}
                componentName={'creators'} />
        </div>
    )
}

export default CreatorsList