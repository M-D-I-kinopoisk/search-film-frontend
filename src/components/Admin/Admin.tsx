'use client'


import {notFound} from 'next/navigation'
import {useSession} from 'next-auth/react'
import AdminFilms from '@/components/Admin/AdminFilms/AdminFilms'
import AdminGenres from '@/components/Admin/AdminGenres/AdminGenres'

export default function Admin() {

    const {data: session, status} = useSession()

    console.log(session?.user?.role?.name)
    if (session?.user?.role?.name !== 'ADMIN') {
        return notFound()
    }

    return (
        <>
            <AdminFilms/>
            <AdminGenres/>
        </>
    )
}