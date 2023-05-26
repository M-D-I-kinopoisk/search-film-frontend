import styles from '@/components/Film/InfoContent/InfoContent.module.scss'
import {FiVolume1} from 'react-icons/fi'
import {BsKeyboard} from 'react-icons/bs'
import React from 'react'
import {infoProps} from '@/components/Film/InfoContent/InfoContent'

const MainInfo = ({film}: infoProps) => {
    return (
        <div className={styles.mainInfo}>
            <h2>{film.nameRU} (Фильм {film.year})</h2>
            <div>{film.year} {film.duration} {film.ageRating}</div>

            {film.genres.map((genre: any) => (
                <div key={genre.id}>{genre.nameRU}</div>
            ))}

            <div className={styles.params}>
                <div className={styles.hd}>FullHD</div>
                <FiVolume1 size={25} color='rgba(255,255,255,.8)'/>
                <div>Рус</div>
                <BsKeyboard size={25} color='rgba(255,255,255,.8)'/>
                <div>Рус</div>
            </div>
        </div>
    )
}

export default MainInfo