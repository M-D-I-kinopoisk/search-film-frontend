import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.error}>Ошибка</div>
            <div className={styles.text}>Запрашиваемой страницы не существует</div>
            </div>
        </div>
    )
}