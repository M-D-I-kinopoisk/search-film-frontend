import {MdNotificationsActive} from 'react-icons/md'
import {useTranslations} from 'next-intl'
import styles from './dropDownNotifications.module.scss'


const DropDownNotification = () => {

    const t = useTranslations('DropDownNotification')


    return (
        <div className={styles.dropDownNotifications}>
            <MdNotificationsActive size={56}/>
            <p>{t('title')}</p>
        </div>
    )
}

export default DropDownNotification