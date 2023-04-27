import React, { useState } from 'react'

import style from './Trailers.module.scss'
import TrailersItem from '../../TrailersAndMaterials/TrailersItem/TrailersItem'

type TrailersProps = {
}

const Trailers: React.FC<TrailersProps> = () => {
    const [url, setUrl] = useState('trailers')
    return (
        <div className={style.trailers}>
            <TrailersItem inModal={true} />
            <TrailersItem inModal={true} />
            <TrailersItem inModal={true} />
        </div>
    )
}

export default Trailers