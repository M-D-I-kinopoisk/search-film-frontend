import styles from './admin.module.scss'
import Admin from '@/components/Admin/Admin'


export const metadata = {
    title: 'Admin Ivi',
}

export default async function Page() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Admin/>
            </div>
        </div>
    )
}