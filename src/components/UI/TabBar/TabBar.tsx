import Link from 'next/link'
import {RiHome6Line} from 'react-icons/Ri'
import {RiFolderTransferLine} from 'react-icons/Ri'
import {BiSearch} from 'react-icons/Bi'
import {CgMoreAlt} from 'react-icons/Cg'
import {RxDesktop} from 'react-icons/Rx'
import style from './TabBar.module.scss'


const TabBar = () => {


    return (
        <div className={style.tabBar}>
            <Link href={'/'} className={`${style.tabBar__group} ${style.tabBar__group_active}`}>
                <div className={`${style.tabBar__itemGlowImage} ${style.tabBar__itemGlowImage_active}`}></div>
                <div className={style.tabBar__items}>
                    <RiHome6Line size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
            <Link href={'/movies'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <RiFolderTransferLine size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/movies?ivi_search'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <BiSearch size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
            <Link href={'https://www.ivi.ru/tvplus'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                  <RxDesktop size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
            <Link href={'/'} className={style.tabBar__group}>
                <div className={style.tabBar__itemGlowImage}></div>
                <div className={style.tabBar__items}>
                    <CgMoreAlt size={20}/>
                    <span className={style.tabBar__itemCaption}>Мой Иви</span>
                </div>
            </Link>
        </div>
    )
}


export default TabBar