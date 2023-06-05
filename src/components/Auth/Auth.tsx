'use client'

import {useSelector} from 'react-redux'
import {selectToggle} from '@/redux/AuthToggleSlice'
import Authorization from '@/components/Auth/Authorization/Authorization'
import Registration from '@/components/Auth/Registration/Registration'

export default function Auth() {

    const {auth} = useSelector(selectToggle)

    return (
        <>
            {auth.authorization ? <Authorization/> : ''}
            {auth.registration ? <Registration/> : ''}
        </>
    )
}