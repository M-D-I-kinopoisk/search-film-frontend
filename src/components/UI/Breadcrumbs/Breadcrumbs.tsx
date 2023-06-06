'use client'

import Link from 'next/link'

import styles from './breadcrumbs.module.scss'

interface Breadcrumbs {
    title: string
}

const Breadcrumbs = ({title}: Breadcrumbs) => {
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