import React, { useState } from 'react'

import style from './Awards.module.scss'
import AwardsItem from '../../Awards/AwardsItem/AwardsItem'

type AwardsProps = {
}

const Awards: React.FC<AwardsProps> = () => {
    return (
        <div className={style.awards}>
            <AwardsItem inModal={true} />
            <AwardsItem inModal={true} />
            <AwardsItem inModal={true} />
            <AwardsItem inModal={true} />
        </div>
    )
}

export default Awards