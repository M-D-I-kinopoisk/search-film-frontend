import {useState} from 'react'
import Image from 'next/image'
import DropDown from './DropDown/DropDown'
import Link from 'next/link'
import {BiSearch} from 'react-icons/Bi'
import {MdOutlineNotifications} from 'react-icons/Md'
import {FiUser} from 'react-icons/Fi'
import style from './header.module.scss'

const Header = () => {
    const [headerModule, setHeaderModule] = useState(false)

    const [categoryDropDown, setCategoryDropDown] = useState('')

    const [scrollList, setScrollList] = useState(0)

    const handleMouseEnter = (e) => {
        // if (e.target.id) {
        //   console.log(handleMouseEnter)
        //   console.log(e.target.id)
        //   setCategoryDropDown(e.target.id)
        //   setScrollList(0)
        // } else {
        //   console.log(1)
        //   setCategoryDropDown((prev) => prev)
        // }
        setCategoryDropDown(e.target.id)
        setHeaderModule(true)
    }

    const handleMouseLeave = () => {
        setCategoryDropDown('')
        setHeaderModule(false)
        setScrollList(0)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                {headerModule && (
                    <DropDown
                        scrollList={scrollList}
                        setScrollList={setScrollList}
                        categoryDropDown={categoryDropDown}
                        handleMouseEnter={(e) => handleMouseEnter(e)}
                        handleMouseLeave={handleMouseLeave}
                    />
                )}
                <div className={style.header__logo}>
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
                <nav className={style.navbar}>
                    <ul className={style.navbar__ul}>
                        <li className={style.navbar__li}>
                            <Link href='/' className={style.navbar__a} title='Мой Иви'>
                                Мой Иви
                            </Link>
                        </li>
                        <li className={style.navbar__li}>
                            <Link
                                href='https://www.ivi.ru/new'
                                title='Что нового'
                                className={style.navbar__a}
                                onMouseEnter={handleMouseLeave}
                            >
                                Что нового
                            </Link>
                        </li>
                        <li
                            className={style.navbar__li}
                            id='header-movies'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                href='https://www.ivi.ru/movies'
                                title='Фильмы онлайн'
                                className={style.navbar__a}
                            >
                                Фильмы
                            </Link>
                        </li>
                        <li
                            className={style.navbar__li}
                            id='header-series'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                href='https://www.ivi.ru/series'
                                className={style.navbar__a}
                                title='Сериалы онлайн'
                            >
                                Сериалы
                            </Link>
                        </li>
                        <li
                            className={style.navbar__li}
                            id='header-animation'
                            onMouseEnter={(e) => handleMouseEnter(e)}
                        >
                            <Link
                                href='https://www.ivi.ru/animation'
                                title='Мультфильмы онлайн'
                                className={style.navbar__a}
                            >
                                Мультфильмы
                            </Link>
                        </li>
                        <li className={style.navbar__li}>
                            <Link
                                id='header-tv'
                                href='https://www.ivi.ru/tvplus'
                                title='TV+'
                                className={style.navbar__a}
                            >
                                TV+
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={style.header__right}>
                    <div className={style.header__rightContainer}>
                        <Link
                            className={style.header__btnPay}
                            href={
                                'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&from=top_menu&redirect_url=%2F&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6'
                            }
                        >
                            Оплатить подписку
                        </Link>
                    </div>
                    <div className={style.header__rightSearch}>
                        <Link
                            className={style.header__btnSearch}
                            href={'https://www.ivi.ru/?ivi_search'}
                        >
                            <BiSearch size={20}/>
                            Поиск
                        </Link>
                    </div>
                    <div
                        id='header-notifications'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={style.header__notifications}
                    >
                        <Link
                            className={style.header__btnSearch}
                            href={'https://www.ivi.ru/profile/pull_notifications'}
                        >
                            <MdOutlineNotifications size={20}/>
                        </Link>
                    </div>
                    <div
                        id='header-user'
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        className={style.header__rightUser}
                    >
                        <Link className={style.header__btnUser} href={''} title='Войти в профиль'>
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