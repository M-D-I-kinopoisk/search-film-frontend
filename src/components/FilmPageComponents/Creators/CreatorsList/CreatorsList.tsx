import React, { useState } from 'react'

import style from './CreatorsList.module.scss'
import CreatorsItem from '../CreatorsItem/CreatorsItem'
import Creators from '@/components/ModalPages/Creators'
import MyModal from '../../MyModal/MyModal'

const CreatorsList: React.FC = () => {
    const [active, setActive] = useState('none')

    return (
        <div

            className={style.creators}>
            <div className={style.creatorsTitle}>
                Актёры и создатели
            </div>
            <div className={style.creatorsItems}
                onClick={() => setActive('block')}
            >
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />
                <CreatorsItem />

                <div className={style.moreCreatorsBtn}>
                    Еще
                </div>

            </div>

            <MyModal
                active={active}
                setActive={setActive}
                url={'creators'}
            >
                {<Creators />}
            </MyModal>
        </div>
    )
}

export default CreatorsList