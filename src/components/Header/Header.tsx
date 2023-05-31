'use client'

import {useEffect, useState} from 'react'

import {useRouter} from 'next/router'

import {en} from '../../../public/locales/en'
import {ru} from '../../../public/locales/ru'

import Image from 'next/image'
import Link from 'next/link'

import DropDown from './DropDown/DropDown'
import NavBar from '@/components/Header/NavBar/NavBar'
import Locales from '@/components/UI/Locales/Locales'

import {BiSearch} from 'react-icons/bi'
import {MdOutlineNotifications} from 'react-icons/md'
import {FiUser} from 'react-icons/fi'

import styles from './header.module.scss'


const Header = () => {
    const [headerModule, setHeaderModule] = useState(false)

    const [categoryDropDown, setCategoryDropDown] = useState('')

    const [scrollList, setScrollList] = useState(0)

    const [listGenres, setListGenres] = useState<[] | any>([])


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/genres')
            const genres = await res.json()
            setListGenres(genres)
        }
        fetchData()
    }, [])


    // const {locale} = useRouter()

    const t =  ru


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

                    {/*<Locales/>*/}

                    <div className={styles.header__rightContainer}>
                        <Link
                            className={styles.header__btnPay}
                            href={
                                'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&from=top_menu&redirect_url=%2F&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6'
                            }>
                            {t.header.title7}
                        </Link>
                    </div>
                    <div className={styles.header__rightSearch}>
                        <Link
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/?ivi_search'}>
                            <BiSearch size={20}/>
                            {t.header.title8}
                        </Link>
                    </div>
                    <div
                        id='header-notifications'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__notifications}>
                        <Link
                            id='header-notifications'
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/profile/pull_notifications'}>
                            <MdOutlineNotifications size={20}/>
                        </Link>
                    </div>
                    <div
                        id='header-user'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__rightUser}>
                        <Link id='header-user' className={styles.header__btnUser} href={''} title='Войти в профиль'>
                            <FiUser size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Header