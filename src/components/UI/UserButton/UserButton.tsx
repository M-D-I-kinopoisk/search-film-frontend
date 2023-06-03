import React from 'react'

import styles from './userButton.module.scss'

type MyButtonProps = {
    text?: any
    icon?: any
    nameClass?: any
}

const UserButton: React.FC<MyButtonProps> = ({ text, icon, nameClass }) => {
    return (
        <button className={styles[nameClass]}>
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