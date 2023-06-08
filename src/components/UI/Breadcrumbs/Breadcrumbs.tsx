'use client'

import Link from 'next/link'

import styles from './breadcrumbs.module.scss'

import {BreadcrumbsProps} from '@/types/components/UI/Breadcrumbs'

const Breadcrumbs = ({title}: BreadcrumbsProps) => {
    return (
        <ul className={styles.breadcrumbs}>
            <li className={styles.breadcrumbItem}>
                <Link href={'/'}>
                    Мой иви
                </Link>
            </li>
            <li className={styles.breadcrumbItem}>
                {title}
            </li>
        </ul>
    )
}

export default Breadcrumbs