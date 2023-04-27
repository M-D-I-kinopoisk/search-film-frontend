import React, { useState } from 'react'

import style from './TrailersList.module.scss'
import TrailersItem from '../TrailersItem/TrailersItem'
import MyModal from '../../MyModal/MyModal'
import Trailers from '../../ModalPages/Trailers/Trailers'

const TrailersList: React.FC = () => {
    const [active, setActive] = useState('none')

    return (
        <div className={style.addMaterials}>
            <div className={style.addMaterialsTitle}>
                <a >Трейлеры</a> и доп. материалы
            </div>
            <div className={style.addMaterialsItems}
                onClick={() => setActive('block')}
            >
                <TrailersItem />
                <TrailersItem />
                <TrailersItem />
            </div>

            <MyModal
                active={active}
                setActive={setActive}
                url={'trailers'}
            >
                {<Trailers />}
            </MyModal>
        </div>
    )
}

export default TrailersList