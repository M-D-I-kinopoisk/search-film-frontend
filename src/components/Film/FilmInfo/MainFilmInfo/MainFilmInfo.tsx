'use client'

import styles from './mainFilmInfo.module.scss'

import {FiVolume1} from 'react-icons/fi'
import {BsKeyboard} from 'react-icons/bs'

import {funcDeclination} from '@/utils/funcDeclination'

import {Film} from '@/components/Film/FilmInfo/FilmInfo'
import FilmGenres from '@/components/Film/FilmGenres/FilmGenres'
import {useLocale, useTranslations} from 'next-intl'

type FilmProps = {
    film: Film
}

const MainFilmInfo = ({film}: FilmProps) => {

    const locale = useLocale()

    const t = useTranslations('MainFilmInfo')
    
    return (
        <div className={styles.mainInfo}>
            <h2>{locale === 'ru'  ? film.nameRU : (film.nameEN ? film.nameEN : film.nameRU) } ({t('title')} {film.year})</h2>
            <div>{film.year} {funcDeclination(film.duration, ['минута', 'минуты', 'минут'])} {film.ageRating}</div>
            <FilmGenres genres={film.genres}/>

            <div className={styles.params}>
                <div className={styles.hd}>FullHD</div>
                <FiVolume1 size={25} color='rgba(255,255,255,.8)'/>
                <div>{t('text')}</div>
                <BsKeyboard size={25} color='rgba(255,255,255,.8)'/>
                <div>{t('text')}</div>
            </div>
        </div>
    )
}

export default MainFilmInfo