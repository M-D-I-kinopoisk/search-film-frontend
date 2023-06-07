'use client'

import {FC} from 'react'

import Link from 'next/link'

import styles from './navBar.module.scss'
import {useTranslations} from 'next-intl'

export interface NavBarProps {
    handleMouseEnter: (e) => void
    handleMouseLeave: (e) => void
}

const NavBar: FC<NavBarProps> = ({handleMouseEnter, handleMouseLeave}) => {

    const t = useTranslations('header')


    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__ul}>
                <li className={styles.navbar__li}>
                    <Link href='/' className={styles.navbar__a}
                          prefetch={false}
                          title='Мой Иви'>
                        {t('title1')}
                    </Link>
                </li>
                <li className={styles.navbar__li}>
                    <Link
                        href='https://www.ivi.ru/new'
                        prefetch={false}
                        title='Что нового'
                        className={styles.navbar__a}
                        onMouseEnter={handleMouseLeave}
                    >
                        {t('title2')}
                    </Link>
                </li>
                <li
                    className={styles.navbar__li}
                    id='header-movies'
                    onMouseEnter={(e) => handleMouseEnter(e)}
                >
                    <Link
                        id='header-movies'
                        href={'/movies'}
                        title='Фильмы онлайн'
                        className={styles.navbar__a}
                    >
                        {t('title3')}
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
                        prefetch={false}
                        className={styles.navbar__a}
                        title='Сериалы онлайн'
                    >
                        {t('title4')}
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
                        prefetch={false}
                        title='Мультфильмы онлайн'
                        className={styles.navbar__a}
                    >
                        {t('title5')}
                    </Link>
                </li>
                <li className={styles.navbar__li}>
                    <Link
                        id='header-tv'
                        href='https://www.ivi.ru/tvplus'
                        prefetch={false}
                        title='TV+'
                        className={styles.navbar__a}
                    >
                        {t('title6')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar
