'use client'

import styles from '@/app/person/[id]/actor.module.scss'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function BackButton () {
    
    const router = useRouter()
    
    
    return (
        <div className={styles.backLink} onClick={() => router.back()}>
            <Image alt='Назад'
                   width={20}
                   height={24}
                   src='/img/left-arrow.png'/>
            <span>Назад</span>
        </div>
    )
}