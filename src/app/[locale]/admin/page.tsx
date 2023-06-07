import AdminFilms from '@/components/Admin/AdminFilms/AdminFilms'
import AdminGenres from '@/components/Admin/AdminGenres/AdminGenres'
import styles from './admin.module.scss'
import {useSession} from 'next-auth/react'

export const metadata = {
    title: 'Admin Ivi',
}

export default async function Admin() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <AdminFilms/>
                <AdminGenres/>
            </div>
        </div>
    )
}