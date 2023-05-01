import React, { useState } from 'react'

import styles from './Awards.module.scss'
import AwardsItem from './AwardsItem'
import MyModal from '../MyModal/MyModal'

type AwardsListProps = {
}

const AwardsList: React.FC<AwardsListProps> = () => {
    const [visible, setVisible] = useState(false)

    let items = [1, 2, 3, 4, 5, 6]

    const setModalScroll = () => {
        setVisible(true)
        document.body.classList.add('modalScroll')
    }
    
    return (
        <div className={styles.awards}>
            <div className={styles.awardsTitle}>Награды</div>

            <div className={styles.awardsItems}
                onClick={() => setModalScroll()}>
                {items.map((elem) =>
                    <AwardsItem key={elem} />
                )}
            </div>

            <MyModal visible={visible}
                setVisible={setVisible}
                componentName={'awards'} />
        </div>
    )
}

export default AwardsList