import Link from 'next/link'

import {useRouter} from 'next/router'

import {RiHome6Line} from 'react-icons/ri'
import {RiFolderTransferLine} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {CgMoreAlt} from 'react-icons/cg'
import {RxDesktop} from 'react-icons/rx'

import {en} from '../../../../public/locales/en'
import {ru} from '../../../../public/locales/ru'

import style from './TabBar.module.scss'


const TabBar = () => {

    // const router = useRouter()

    const {locale, route} = useRouter()

    const t = locale === 'en' ? en : ru


    return (
        <div className={style.tabBar}>
            <Link href={'/'}
                  className={route === '/' ? `${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div
                    className={route === '/' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` : `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiHome6Line size={20}/>
                    <span className={style.tabBar__itemCaption}>{t.tabBar.title1}</span>
                </div>
            </Link>
            <Link href={'/'}
                  className={route === '/movies' ? `${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div
                    className={route === '/movies' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` : `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiFolderTransferLine size={20}/>
                    <span className={style.tabBar__itemCaption}>{t.tabBar.title2}</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/movies?ivi_search'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <BiSearch size={20}/>
                    <span className={style.tabBar__itemCaption}>{t.tabBar.title3}</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/tvplus'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <RxDesktop size={20}/>
                    <span className={style.tabBar__itemCaption}>{t.tabBar.title4}</span>
                </div>
            </Link>
            <Link href={'/'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <CgMoreAlt size={20}/>
                    <span className={style.tabBar__itemCaption}>{t.tabBar.title5}</span>
                </div>
            </Link>
        </div>
    )
}


export default TabBar