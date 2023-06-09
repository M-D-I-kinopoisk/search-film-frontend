'use client'

import React from 'react'

import styles from './filmTrailers.module.scss'

import FilmTrailersItem from './FilmTrailersItem/FilmTrailersItem'

import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'
import {useDispatch, useSelector} from 'react-redux'

import {useRouter} from 'next/navigation'

import {FilmTrailersState} from '@/types/components/Film'

const FilmTrailers = ({filmInfo, id}: FilmTrailersState) => {
    const router = useRouter()

    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (modalOpen.modalState) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [modalOpen.modalState])

    const modalOpenHandler = () => {
        dispatch(setOpenModal({
            modalState: true,
            value: 'trailers'
        }))

        router.push(`film/${id}/trailers`)
    }
    return (
        <div className={styles.trailersContainer}>
            <div className={styles.trailersTitle}>
                <span onClick={() => modalOpenHandler()}>Трейлеры</span> и доп. материалы
            </div>
            <div className={styles.trailers}>
                <FilmTrailersItem filmInfo={filmInfo}/>
            </div>
        </div>
    )
}

export default FilmTrailers