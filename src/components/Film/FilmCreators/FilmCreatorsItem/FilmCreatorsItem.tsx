'use client'

import styles from './filmCreatorsItem.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import {Actor} from '@/components/Film/FilmInfo/FilmInfo'
import {useLocale} from 'next-intl'

type CreatorsItemProps = {
    actor: Actor
}

const FilmCreatorsItem = ({actor}: CreatorsItemProps) => {

    const locale = useLocale()


    return (
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
                {locale === 'ru' ? actor.member.nameRU.split(' ')[0] :  actor.member.nameEN.split(' ')[0]}
                <br/>
                {locale === 'ru' ? actor.member.nameRU.split(' ')[1] :  actor.member.nameEN.split(' ')[1]}
            </div>

            <div className={styles.creatorsItemJob}>
                {locale === 'ru' ? actor.profession.nameRU :   actor.profession.nameEN }
            </div>
        </Link>
    )
}

export default FilmCreatorsItem