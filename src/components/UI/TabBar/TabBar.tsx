import Link from 'next/link'
import {RiHome6Line} from 'react-icons/ri'
import {RiFolderTransferLine} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {CgMoreAlt} from 'react-icons/cg'
import {RxDesktop} from 'react-icons/rx'
import style from './TabBar.module.scss'
import {useRouter} from 'next/router'


const TabBar = () => {

    const router = useRouter()

    
    return (
        <div className={style.tabBar}>
            <Link href={'/'} className={router.route === '/' ?`${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div className={router.route === '/' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` :  `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiHome6Line size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
            <Link href={'/'} className={router.route === '/movies' ?`${style.tabBar__group} ${style.tabBar__group_active}` : `${style.tabBar__group}`}>
                <div className={router.route === '/movies' ? `${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}` :  `${style.tabBar__itemGlowImage}`}></div>
                <div className={style.tabBar__items}>
                    <RiFolderTransferLine size={20}/>
                    <span className={style.tabBar__itemCaption}>Каталог</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/movies?ivi_search'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <BiSearch size={20}/>
                    <span className={style.tabBar__itemCaption}>Поиск</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/tvplus'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <RxDesktop size={20}/>
                    <span className={style.tabBar__itemCaption}>TV+</span>
                </div>
            </Link>
            <Link href={'/'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <CgMoreAlt size={20}/>
                    <span className={style.tabBar__itemCaption}>Еще</span>
                </div>
            </Link>
        </div>
    )
}


export default TabBar