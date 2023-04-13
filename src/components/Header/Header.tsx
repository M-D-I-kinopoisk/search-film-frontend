import {useState} from 'react'
import style from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [headerModul, setHeaderModul] = useState(false)

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.header__logo}>
                    <a href='#!' title='Онлайн-кинотеатр Иви'>
                        <Image
                            src='/img/header-logo.svg'
                            width={66}
                            height={48}
                            alt='ivi'
                        />
                    </a>
                </div>
                <div className={style.DIV_1}>
                    <nav className={style.NAV_2}>
                        <ul className={style.UL_3}>
                            <li className={style.LI_4}>
                                {/* это ссылочка на определенную страницу, к примеру "мой иви" ведет на главную.
                                 Все ссылки делаем Через вот этот компонент ниже */}
                                <Link href='/'>Мой Иви</Link>
                                <div className={style.DIV_6} onClick={() => setHeaderModul(!headerModul)}>123</div>
                                {headerModul && <div>12334254535</div>}
                            </li>
                            <li className={style.LI_4}>
                                <a
                                    href='https://www.ivi.ru/new'
                                    title='Что нового'
                                    className={style.A_5}
                                ></a>
                                <div className={style.DIV_6}>Что нового</div>
                            </li>
                            <li className={style.LI_4}>
                                <a
                                    href='https://www.ivi.ru/movies'
                                    title='Фильмы онлайн'
                                    className={style.A_5}
                                ></a>
                                <div className={style.DIV_6}>Фильмы</div>
                            </li>
                            <li className={style.LI_4}>
                                <a
                                    href='https://www.ivi.ru/series'
                                    title='Сериалы онлайн'
                                    className={style.A_5}
                                ></a>
                                <div className={style.DIV_6}>Сериалы</div>
                            </li>
                            <li className={style.LI_4}>
                                <a
                                    href='https://www.ivi.ru/animation'
                                    title='Мультфильмы онлайн'
                                    className={style.A_5}
                                ></a>
                                <div className={style.DIV_6}>Мультфильмы</div>
                            </li>
                            <li className={style.LI_4}>
                                <a href='https://www.ivi.ru/tvplus' title='TV+' className={style.A_5}></a>
                                <div className={style.DIV_6}>TV+</div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header