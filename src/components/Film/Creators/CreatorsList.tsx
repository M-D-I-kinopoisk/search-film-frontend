'use client'

import {useEffect} from 'react'

import styles from './Creators.module.scss'

import CreatorsItem from './CreatorsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {Actor} from '@/components/Film/Info/Info'
import {setOpenModal} from '@/redux/FilmsSlice'
import {useRouter} from 'next/navigation'


interface Creators {
    actors: Actor[]
    id: string
}

const CreatorsList = ({actors, id}: Creators) => {
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