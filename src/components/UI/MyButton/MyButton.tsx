import React from 'react'

import Image from 'next/image'
import styles from './MyButton.module.scss'

type MyButtonProps = {
    text?: any
    icon?: any
    nameClass?: any
}

const MyButton: React.FC<MyButtonProps> = ({ text, icon, nameClass }) => {
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

export default MyButton