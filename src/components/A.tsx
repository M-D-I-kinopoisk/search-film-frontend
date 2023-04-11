import React from 'react'
import Link from 'next/link'

import styles from '../scss/A.module.scss'

type AProps = {
    text: string,
    href: string
}

const A: React.FC<AProps> = ({text, href}) => {
    return (
        <>
            <Link href={href}>
                {text}
            </Link>
            <div className={styles.div}>
                <h1>ХАХАХАХААХХАХАХАХАХХАХАХАХАХАХАХАХА</h1>
                <span>Веточка</span>
            </div>
        </>
    )
}

export default A