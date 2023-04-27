import {FC} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {en} from '../../../../public/locales/en'
import {ru} from '../../../../public/locales/ru'

import styles from './navBar.module.scss'

export interface NavBarProps {
    handleMouseEnter: (e) => void
    handleMouseLeave: (e) => void
}

const NavBar: FC<NavBarProps> = ({handleMouseEnter, handleMouseLeave}) => {

    const {locale, locales, asPath} = useRouter()

    const t = locale === 'en' ? en : ru

    return (
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
    )
}


export default NavBar
