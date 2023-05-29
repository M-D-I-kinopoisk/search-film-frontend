'use client'

import React, {useState} from 'react'

import styles from './Creators.module.scss'
import MyModal from '../MyModal/MyModal'
import CreatorsItem from './CreatorsItem'
import {useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {Actor} from '@/components/Film/InfoContent/InfoContent'

interface Creators {
    actors: Actor[]
}

const CreatorsList = ({actors}: Creators) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [isModalOpen])

    return (
        <div className={styles.creators}>
            <div className={styles.creatorsTitle}>
                Актёры и создатели
            </div>
            <div className={styles.creatorsItems}>
                {actors.slice(0, 10).map((actor) => (
                    <CreatorsItem actor={actor} key={actor.id}/>
                ))}
                <div onClick={() => setIsModalOpen(true)}
                     className={styles.moreCreatorsBtn}>
                    Еще
                </div>
            </div>

            <MyModal isModalOpen={isModalOpen}
                     setIsModalOpen={setIsModalOpen}
                     componentName={'creators'}/>
        </div>
    )
}

export default CreatorsList