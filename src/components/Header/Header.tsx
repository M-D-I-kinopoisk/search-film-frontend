'use client'

import {useEffect, useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import DropDown from './DropDown/DropDown'
import NavBar from '@/components/Header/NavBar/NavBar'
import Locales from '@/components/UI/Locales/Locales'

import {BiSearch} from 'react-icons/bi'
import {MdOutlineNotifications} from 'react-icons/md'
import {FiUser} from 'react-icons/fi'

import styles from './header.module.scss'
import { useSession} from 'next-auth/react'
import {useTranslations} from 'next-intl'
import {toggle} from '@/redux/AuthToggleSlice'
import {useDispatch} from 'react-redux'

const Header = () => {

    const {data: session} = useSession()

    console.log(session)

    const t = useTranslations('header')

    const [headerModule, setHeaderModule] = useState(false)

    const [categoryDropDown, setCategoryDropDown] = useState('')

    const [scrollList, setScrollList] = useState(0)

    const [listGenres, setListGenres] = useState<[] | any>([])

    const dispatch = useDispatch()


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/genres')
            const genres = await res.json()
            setListGenres(genres)
        }
        fetchData()
    }, [])

    const openAuth = () => {
        dispatch(toggle({
            authorization: true,
            registration: false
        }))
    }



    const handleMouseEnter = (e) => {
        setCategoryDropDown(() => e.target.id)
        setHeaderModule(true)
    }

    const handleMouseLeave = () => {
        setCategoryDropDown('')
        setHeaderModule(false)
        setScrollList(0)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>

                <DropDown
                    headerModule={headerModule}
                    scrollList={scrollList}
                    setScrollList={setScrollList}
                    categoryDropDown={categoryDropDown}
                    handleMouseEnter={(e) => handleMouseEnter(e)}
                    handleMouseLeave={handleMouseLeave}
                    listGenres={listGenres}
                />

                <div className={styles.header__logo}>
                    <Link href='/' title='Онлайн-кинотеатр Иви' className={''}>
                        <Image
                            src='/img/header-logo.svg'
                            width={66}
                            height={48}
                            alt='ivi'
                            priority={true}
                        />
                    </Link>
                </div>

                <NavBar handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>

                <div className={styles.header__right}>
                    {session?.user?.role?.name === 'ADMIN' ?
                        <Link
                            className={styles.header__linkAdmin}
                            href={'/admin'}>
                            ADMIN
                        </Link> :
                        ''
                    }


                    <Locales/>

                    <div className={styles.header__rightContainer}>
                        <Link
                            prefetch={false}
                            className={styles.header__btnPay}
                            href={
                                'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&from=top_menu&redirect_url=%2F&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6'
                            }>
                            {t('title7')}
                        </Link>
                    </div>
                    <div className={styles.header__rightSearch}>
                        <Link
                            prefetch={false}
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/?ivi_search'}>
                            <BiSearch size={20}/>
                            {t('title8')}
                        </Link>
                    </div>
                    <div
                        id='header-notifications'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__notifications}>
                        <Link
                            prefetch={false}
                            id='header-notifications'
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/profile/pull_notifications'}>
                            <MdOutlineNotifications size={20}/>
                        </Link>
                    </div>
                    <div
                        id='header-user'
                        onClick={ session?.user?.token || session?.user?.name ? undefined : openAuth}
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__rightUser}>
                        {session?.user?.token || session?.user?.name ?
                            <div id='header-user' className={styles.userActive} title='Войти в профиль'>
                                {session?.user?.role?.name === 'ADMIN' ? 'A' : 'П'}
                            </div> :
                            <div id='header-user' className={styles.header__btnUser} >
                                <FiUser size={20}/>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Header