'use client'

import styles from './Creators.module.scss'
import Image from 'next/image'
import {Actor} from '@/components/Film/InfoContent/InfoContent'

type CreatorsItemProps = {
    inModal?: any,
    actor: Actor
}

const CreatorsItem = ({inModal, actor}: CreatorsItemProps) => {

    return (
        <>
            {inModal ?
                <div className={styles.modalCreatorsItem}>
                    <div className={styles.modalCreatorsItemImg}>
                        {actor.member.imageName === null ?
                            <Image alt='Создатель'
                                   width={88}
                                   height={88}
                                   src='https://static.thenounproject.com/png/5034901-200.png'/> :
                            <Image alt='Создатель'
                                   width={88}
                                   height={88}
                                   src={actor.member.imageName}/>}
                    </div>

                    <div className={styles.modalCreatorsItemName}>
                        {actor.member.nameRU}
                    </div>

                    <div className={styles.modalFilmsCount}>
                        9 фильмов
                    </div>
                </div>
                :
                <div className={styles.creatorsItem}>
                    {actor.member.imageName === null ?
                        <Image alt='Создатель'
                               width={88}
                               height={88}
                               src='https://static.thenounproject.com/png/5034901-200.png'/> :
                        <Image alt='Создатель'
                               width={88}
                               height={88}
                               src={actor.member.imageName}/>}
                    <div className={styles.creatorsItemName}>
                        {actor.member.nameRU.split(' ')[0]}
                        <br/>
                        {actor.member.nameRU.split(' ')[1]}
                    </div>

                    <div className={styles.creatorsItemJob}>
                        {actor.profession.nameRU}
                    </div>
                </div>
            }
        </>
    )
}

export default CreatorsItem