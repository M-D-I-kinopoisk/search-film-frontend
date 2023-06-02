import styles from '@/components/Film/FilmInfo/filmInfo.module.scss'
import {FiVolume1} from 'react-icons/fi'
import {BsKeyboard} from 'react-icons/bs'
import React from 'react'
import {funcDeclination} from '@/utils/funcDeclination'
import {Film} from '@/components/Film/FilmInfo/FilmInfo'
import FilmGenres from '@/components/Film/FilmGenres/FilmGenres'

type FilmProps = {
    film: Film
}

const MainInfo = ({film}: FilmProps) => {
    
    return (
        <div className={styles.mainInfo}>
            <h2>{film.nameRU} (Фильм {film.year})</h2>
            <div>{film.year} {funcDeclination(film.duration, ['минута', 'минуты', 'минут'])} {film.ageRating}</div>
            <FilmGenres genres={film.genres}/>

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