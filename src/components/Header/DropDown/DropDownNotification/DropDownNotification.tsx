import {MdNotificationsActive} from 'react-icons/md'
import styles from './dropDownNotifications.module.scss'

const DropDownNotification = () => {
    return (
        <div className={styles.dropDownNotifications}>
            <MdNotificationsActive size={56}/>
            <p>Здесь появляются только важные сообщения</p>
        </div>
    )
}

export default DropDownNotification