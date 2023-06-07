'use client'

import styles from '@/app/[locale]/person/[id]/person.module.scss'

import {useRouter} from 'next/navigation'
import {AiOutlineLeft} from 'react-icons/ai'
import {useTranslations} from 'next-intl'

export default function BackButton() {

    const t = useTranslations('BackButton')
    
    const router = useRouter()
    

    return (
        <div className={styles.backLink} onClick={() => router.back()}>
            <AiOutlineLeft fill='white' size={20}/>
            <span>{t('title')}</span>
        </div>
    )
}