'use client'

import styles from './filmCreatorsItem.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import {CreatorsItemProps} from '@/types/components/Film'

const FilmCreatorsItem = ({actor, inModal}: CreatorsItemProps) => {

    return (
        <>
            {inModal ?
                <Link href={`/person/${actor.member.id}`} className={styles.modalCreatorsLink}>
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
                </Link>
                :
                <Link href={`/person/${actor.member.id}`} className={styles.creatorsLink}>
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
                </Link>
            }
        </>
    )
}

export default FilmCreatorsItem