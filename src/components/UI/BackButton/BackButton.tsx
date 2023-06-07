'use client'

import styles from '@/app/[locale]/person/[id]/person.module.scss'

import {useRouter} from 'next/navigation'
import {AiOutlineLeft} from 'react-icons/ai'

export default function BackButton() {
    const router = useRouter()

    return (
        <div className={styles.backLink} onClick={() => router.back()}>
            <AiOutlineLeft fill='white' size={20}/>
            <span>Назад</span>
        </div>
    )
}