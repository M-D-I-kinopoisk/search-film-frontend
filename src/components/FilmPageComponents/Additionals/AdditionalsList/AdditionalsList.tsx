import React, { useState } from 'react'

import style from './AdditionalsList.module.scss'
import AdditionalsItem from '../AdditionalsItem/AdditionalsItem'
import Trailers from '@/components/ModalPages/Trailers'
import MyModal from '../../MyModal/MyModal'

const AdditionalsList: React.FC = () => {
    const [active, setActive] = useState('none')

    return (
        <div className={style.addMaterials}>
            <div className={style.addMaterialsTitle}>
                <a >Трейлеры</a> и доп. материалы
            </div>
            <div className={style.addMaterialsItems}
                onClick={() => setActive('block')}
            >
                <AdditionalsItem />
                <AdditionalsItem />
                <AdditionalsItem />
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

export default AdditionalsList