'use client'

import styles from './userButton.module.scss'

import {UserButtonProps} from '@/types/components/UI/UserButton'

const UserButton = ({text, icon, nameClass}: UserButtonProps) => {
    return (
        <button className={styles[nameClass]}
            data-testid='user-button'        >
            {text ?
                <>{icon}
                    <h3>{text}</h3>
                </> :
                <>{icon}</>
            }
        </button>
    )
}

export default UserButton