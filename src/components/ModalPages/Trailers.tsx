import React, { useState } from 'react'

import style from './Trailers.module.scss'
import AdditionalsItem from '../FilmPageComponents/Additionals/AdditionalsItem/AdditionalsItem'

type TrailersProps = {
}

const Trailers: React.FC<TrailersProps> = () => {
    const [url, setUrl] = useState('trailers')
    return (
        <div className={style.trailers}>
            <AdditionalsItem inModal={true} />
            <AdditionalsItem inModal={true} />
            <AdditionalsItem inModal={true} />
            <AdditionalsItem inModal={true} />
            <AdditionalsItem inModal={true} />
        </div>
    )
}

export default Trailers