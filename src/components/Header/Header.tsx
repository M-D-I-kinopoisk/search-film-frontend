import {useState} from 'react'

import { useRouter } from 'next/router'

import { en } from '../../../public/locales/en'
import { ru } from '../../../public/locales/ru'

import Image from 'next/image'
import Link from 'next/link'

import DropDown from './DropDown/DropDown'

import {BiSearch} from 'react-icons/bi'
import {MdOutlineNotifications} from 'react-icons/md'
import {FiUser} from 'react-icons/fi'

import styles from './header.module.scss'


const Header = () => {
    const [headerModule, setHeaderModule] = useState(false)

    const [categoryDropDown, setCategoryDropDown] = useState('')

    const [scrollList, setScrollList] = useState(0)


    const { locale, locales, asPath } = useRouter()

    const t = locale === 'en' ? en : ru

    console.log(locales)
    console.log(locale)
    console.log(asPath)


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
                <nav className={styles.navbar}>
                    <ul className={styles.navbar__ul}>
                        <li className={styles.navbar__li}>
                            <Link href='/' className={styles.navbar__a} title='Мой Иви'>
                                {t.header.title1}
                            </Link>
                        </li>
                        <li className={styles.navbar__li}>
                            <Link
                                href='https://www.ivi.ru/new'
                                title='Что нового'
                                className={styles.navbar__a}
                                onMouseEnter={handleMouseLeave}
                            >
                                {t.header.title2}
                            </Link>
                        </li>
                        <li
                            className={styles.navbar__li}
                            id='header-movies'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                id='header-movies'
                                href='/movies'
                                title='Фильмы онлайн'
                                className={styles.navbar__a}
                            >
                                {t.header.title3}
                            </Link>
                        </li>
                        <li
                            className={styles.navbar__li}
                            id='header-series'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                id='header-series'
                                href='https://www.ivi.ru/series'
                                className={styles.navbar__a}
                                title='Сериалы онлайн'
                            >
                                {t.header.title4}
                            </Link>
                        </li>
                        <li
                            className={styles.navbar__li}
                            id='header-animation'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                id='header-animation'
                                href='https://www.ivi.ru/animation'
                                title='Мультфильмы онлайн'
                                className={styles.navbar__a}
                            >
                                {t.header.title5}
                            </Link>
                        </li>
                        <li className={styles.navbar__li}>
                            <Link
                                id='header-tv'
                                href='https://www.ivi.ru/tvplus'
                                title='TV+'
                                className={styles.navbar__a}
                            >
                                {t.header.title6}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.header__right}>
                    <div className={styles.locales}>
                        <Link
                            href={asPath}
                            locale='en'
                            className={locale === 'en' ? `${styles.locales__btnLeft} ${styles.locales__btn_active}` : `${styles.locales__btnLeft}`}
                        >EN
                        </Link>
                        <Link
                            href={asPath}
                            locale='ru'
                            className={locale === 'ru' ? `${styles.locales__btnRight} ${styles.locales__btn_active}` : `${styles.locales__btnRight}`}
                        >RU
                        </Link>
                    </div>
                    <div className={styles.header__rightContainer}>
                        <Link
                            className={styles.header__btnPay}
                            href={
                                'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&from=top_menu&redirect_url=%2F&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6'
                            }
                        >
                            {t.header.title7}
                        </Link>
                    </div>
                    <div className={styles.header__rightSearch}>
                        <Link
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/?ivi_search'}
                        >
                            <BiSearch size={20}/>
                            {t.header.title8}
                        </Link>
                    </div>
                    <div
                        id='header-notifications'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__notifications}
                    >
                        <Link
                            id='header-notifications'
                            className={styles.header__btnSearch}
                            href={'https://www.ivi.ru/profile/pull_notifications'}
                        >
                            <MdOutlineNotifications size={20}/>
                        </Link>
                    </div>
                    <div
                        id='header-user'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={styles.header__rightUser}
                    >
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