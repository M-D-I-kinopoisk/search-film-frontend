'use client'

import Auth from '@/components/AuthWindow/Auth/Auth'
import { useSelector} from 'react-redux'
import {selectToggle} from '@/redux/AuthToggleSlice'

export default function AuthWindow() {

    const {authWindow} = useSelector(selectToggle)

    return (
        <>
            {authWindow.auth ? <Auth/> : ''}
        </>
    )
}