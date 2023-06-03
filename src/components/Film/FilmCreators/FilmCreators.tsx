'use client'

import {useEffect} from 'react'

import styles from './filmCreators.module.scss'

import FilmCreatorsItem from './FilmCreatorsItem/FilmCreatorsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {Actor} from '@/components/Film/FilmInfo/FilmInfo'
import {setOpenModal} from '@/redux/FilmsSlice'
import {useRouter} from 'next/navigation'


interface Creators {
    actors: Actor[]
    id: string
}

const FilmCreators = ({actors, id}: Creators) => {
    const router = useRouter()

    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()

    useEffect(() => {
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

        router.push(`film/${id}/creators`)
    }

    return (
        <div className={styles.creators}>
            <div className={styles.creatorsTitle}>
                Актёры и создатели
            </div>
            <div className={styles.creatorsItems}>
                {actors.slice(0, 10).map((actor) => (
                    <FilmCreatorsItem actor={actor} key={actor.id}/>
                ))}
                <button onClick={() => modalOpenHandler()}
                        className={styles.moreCreators}>
                    Еще
                </button>
            </div>
        </div>
    )
}

export default FilmCreators