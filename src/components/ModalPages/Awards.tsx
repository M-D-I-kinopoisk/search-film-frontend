import React, { useState } from 'react'

import style from './Awards.module.scss'
import AwardsItem from '../FilmPageComponents/Awards/AwardsItem/AwardsItem'

type AwardsProps = {
}

const Awards: React.FC<AwardsProps> = () => {
    return (
        <div >
            <AwardsItem inModal={true} />
        </div>
    )
}

export default Awards