import {MdNotificationsActive} from 'react-icons/md'
import style from '@/components/Header/DropDown/DropDown.module.scss'

const Notification = () => {
    return (
        <div className={style.dropDown__notifications}>
            <MdNotificationsActive size={56}/>
            <p>Здесь появляются только важные сообщения</p>
        </div>
    )
}

export default Notification