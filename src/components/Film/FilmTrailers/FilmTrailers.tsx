'use client'

import React from 'react'

import styles from './filmTrailers.module.scss'

import FilmTrailersItem from './FilmTrailersItem'

import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/navigation'
import {FilmInfo} from '@/components/Film/FilmInfo/FilmInfo'

interface TrailersState {
    filmInfo: FilmInfo,
    id: string
}

const FilmTrailers = ({filmInfo, id}: TrailersState) => {
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
        <div className={styles.addMaterials}>
            <div className={styles.addMaterialsTitle}>
                <div onClick={() => modalOpenHandler()}>Трейлеры</div>
                и доп. материалы
            </div>
            <div className={styles.addMaterialsItems}>
                <FilmTrailersItem filmInfo={filmInfo}/>
            </div>
        </div>
    )
}

export default FilmTrailers