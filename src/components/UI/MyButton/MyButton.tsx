import React from 'react'

import Image from 'next/image'
import styles from './MyButton.module.scss'

type MyButtonProps = {
    text?: any
    imageSrc?: any
    nameClass?: any
}

const MyButton: React.FC<MyButtonProps> = ({ text, imageSrc, nameClass }) => {
    return (
        <button className={styles[nameClass]}>
            {text ?
                <>
                    <Image alt={text}
                        width={16}
                        height={16}
                        src={imageSrc} />
                    <h3>{text}</h3>
                </> :
                <Image alt={text}
                    width={16}
                    height={16}
                    src={imageSrc} />
            }
        </button>
    )
}

export default MyButton