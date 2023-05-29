'use client'

import React from 'react'

import styles from './Creators.module.scss'

import CreatorsItem from './CreatorsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {Actor} from '@/components/Film/InfoContent/InfoContent'
import {setOpenModal} from '@/redux/FilmsSlice'


interface Creators {
    actors: Actor[]
}

const CreatorsList = ({actors}: Creators) => {
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
            value: 'creators'
        }))
    }

    return (
        <div className={styles.creators}>
            <div className={styles.creatorsTitle}>
                Актёры и создатели
            </div>
            <div className={styles.creatorsItems}>
                {actors.slice(0, 10).map((actor) => (
                    <CreatorsItem actor={actor} key={actor.id}/>
                ))}
                <div onClick={() => modalOpenHandler()}
                     className={styles.moreCreatorsBtn}>
                    Еще
                </div>
            </div>
        </div>
    )
}

export default CreatorsList