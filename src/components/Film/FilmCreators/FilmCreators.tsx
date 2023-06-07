'use client'

import {useEffect, useState} from 'react'

import styles from './filmCreators.module.scss'

import FilmCreatorsItem from './FilmCreatorsItem/FilmCreatorsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {setOpenModal} from '@/redux/FilmsSlice'

import {useRouter} from 'next/navigation'
import {useTranslations} from 'next-intl'

import {Creators} from '@/types/components/Film'

const FilmCreators = ({actors, id}: Creators) => {


    const t = useTranslations('FilmCreators')

    const router = useRouter()

    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()

    const getNumActorsToDisplay = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 880 ? 10 : 4
        }
        return 4
    }

    const [numActorsToDisplay, setNumActorsToDisplay] = useState(getNumActorsToDisplay())

    useEffect(() => {
        const handleResize = () => {
            setNumActorsToDisplay(getNumActorsToDisplay())
        }
            if (typeof window !== 'undefined') {
                window.addEventListener('resize', handleResize)

                return () => {
                    window.removeEventListener('resize', handleResize)
                }
            }
    }, [])

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
                {t('title')}
            </div>
            <div className={styles.creatorsItems}>
                {actors.slice(0, numActorsToDisplay).map((actor) => (
                    <FilmCreatorsItem actor={actor} key={actor.id}/>
                ))}
                <button onClick={() => modalOpenHandler()}
                        className={styles.moreCreators}>
                    {t('title1')}
                </button>
            </div>
        </div>
    )
}

export default FilmCreators