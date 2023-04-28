import React, { useState } from 'react'

import style from './AwardsList.module.scss'
import AwardsItem from '../AwardsItem/AwardsItem'
import MyModal from '../../MyModal/MyModal'
import Awards from '../../ModalPages/Awards/Awards'

type props = {
}

const AwardsList: React.FC<props> = () => {
    const [active, setActive] = useState('none')

    return (
        <div className={style.awards}>
            <div className={style.awardsTitle}>
                Награды
            </div>
            <div className={style.awardsItems}

                onClick={() => setActive('block')}

            >
                <AwardsItem />
                <AwardsItem />
            </div>
            <MyModal
                active={active}
                setActive={setActive}
                url={'awards'}
            >
                {<Awards />}
            </MyModal>
        </div>
    )
}

export default AwardsList