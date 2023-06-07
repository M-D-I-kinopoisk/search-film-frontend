'use client'

import styles from './skeleton.module.scss'

export default function Skeleton () {
    return (
        <div className={styles.skeleton}>
            <div className={styles.imgBlock}></div>
            <div className={styles.textBlock}></div>
            <div className={styles.nextTextBlock}></div>
        </div>
    )
}