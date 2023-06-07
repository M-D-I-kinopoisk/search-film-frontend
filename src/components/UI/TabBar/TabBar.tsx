'use client'

import Link from 'next/link'

import {RiHome6Line} from 'react-icons/ri'
import {RiFolderTransferLine} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {CgMoreAlt} from 'react-icons/cg'
import {RxDesktop} from 'react-icons/rx'


import style from './TabBar.module.scss'
import {useLocale, useTranslations} from 'next-intl'
import {signOut, useSession} from 'next-auth/react'


const TabBar = () => {

    const {data: session} = useSession()

    let route = '/'

    const locale = useLocale()

    const t = useTranslations('TabBar')


    // const t = locale === 'en' ? en : ru


    return (
        <div className={style.tabBar}>
            <Link href={'/'}
                  className={route === '/' ? `${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div
                    className={route === '/' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` : `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiHome6Line size={20}/>
                    <span className={style.tabBar__itemCaption}>{t('title1')}</span>
                </div>
            </Link>
            <Link href={'/movies'}
                  className={route === '/movies' ? `${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div
                    className={route === '/movies' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` : `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiFolderTransferLine size={20}/>
                    <span className={style.tabBar__itemCaption}>{t('title2')}</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/movies?ivi_search'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <BiSearch size={20}/>
                    <span className={style.tabBar__itemCaption}>{t('title3')}</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/tvplus'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <RxDesktop size={20}/>
                    <span className={style.tabBar__itemCaption}>{t('title4')}</span>
                </div>
            </Link>
            {session?.user?.token || session?.user?.name ?
                <div className={style.tabBar__group} onClick={() => signOut({
                    redirect: false
                })}>
                    <div className={style.tabBar__itemGlowImage}></div>
                    <div className={style.tabBar__items}>
                        <CgMoreAlt size={20}/>
                            <span className={`${style.tabBar__itemCaption} ${style.exit}`}>{t('title6')}</span>
                    </div>
                </div> :
                <div className={style.tabBar__group}>
                    <div className={style.tabBar__itemGlowImage}></div>
                    <div className={style.tabBar__items}>
                        <CgMoreAlt size={20}/>
                        <span className={style.tabBar__itemCaption}>{t('title5')}</span>
                    </div>
                </div>

            }

        </div>
    )
}


export default TabBar