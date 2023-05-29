'use client'

import React from 'react'

import styles from './Trailers.module.scss'

import TrailersItem from './TrailersItem'

import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'
import {useDispatch, useSelector} from 'react-redux'

const TrailersList = ({filmInfo}) => {
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
    }
    return (
        <div className={styles.addMaterials}>
            <div className={styles.addMaterialsTitle}>
                <div onClick={() => modalOpenHandler()}>Трейлеры</div>
                и доп. материалы
            </div>
            <div className={styles.addMaterialsItems}>
                <TrailersItem filmInfo={filmInfo}/>
            </div>
        </div>
    )
}

export default TrailersList