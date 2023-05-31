'use client'

import styles from './admin.module.scss'
import Input from '@/components/UI/Input/Input'


export default function Admin () {

    



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
              <Input label={'Введите название фильма'} type={'text'}/>
            </div>
        </div>
    )
}