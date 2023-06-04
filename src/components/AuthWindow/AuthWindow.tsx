'use client'

import Auth from '@/components/AuthWindow/Auth/Auth'
import {useSelector} from 'react-redux'
import {selectToggle} from '@/redux/AuthToggleSlice'
import styles from '@/components/AuthWindow/Auth/auth.module.scss'
import Authorization from '@/components/AuthWindow/Authorization/Authorization'
import Registration from '@/components/AuthWindow/Registration/Registration'

export default function AuthWindow() {

    const {auth} = useSelector(selectToggle)

    return (
        <>
            {auth.authorization ? <Authorization/> : ''}
            {auth.registration ? <Registration/> : ''}
            {/*{authWindow.auth ? <Auth/> : ''}*/}
        </>
    )
}