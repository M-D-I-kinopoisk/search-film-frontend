import { useState } from 'react'
import style from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import DropDown from './DropDown/DropDown'

const Header = () => {
  const [headerModul, setHeaderModul] = useState(false)

  const handleMouseEnter = () => {
    setHeaderModul(!headerModul)
  }

  const handleMouseLeave = () => {
    setHeaderModul(!headerModul)
  }

  console.log(headerModul)

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.header__logo}>
          <Link href='#!' title='Онлайн-кинотеатр Иви'>
            <Image
              src='/img/header-logo.svg'
              width={66}
              height={48}
              alt='ivi'
            />
          </Link>
        </div>
      
          <nav className={style.navbar}>
            <ul className={style.navbar__ul}>
              <li className={style.navbar__li}>
                <Link
                  href='https://www.ivi.ru/'
                  title='Мой Иви'
                  className={style.navbar__a}
                >
                  Мой Иви
                </Link>
          
             
              </li>
              <li className={style.navbar__li}>
                <Link
                  href='https://www.ivi.ru/new'
                  title='Что нового'
                  className={style.navbar__a}
                >Что нового</Link>
              </li>
              <li className={style.navbar__li}  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                <Link
                  href='https://www.ivi.ru/movies'
                  title='Фильмы онлайн'
                  className={style.navbar__a}
                >Фильмы</Link>
              </li>
              <li className={style.navbar__li}  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                <Link
                  href='https://www.ivi.ru/series'
                  title='Сериалы онлайн'
                  className={style.navbar__a}
                >Сериалы</Link>
              </li>
              <li className={style.navbar__li}  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                <Link
                  href='https://www.ivi.ru/animation'
                  title='Мультфильмы онлайн'
                  className={style.navbar__a}
                >Мультфильмы</Link>
              </li>
              <li className={style.navbar__li}  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                <Link
                  href='https://www.ivi.ru/tvplus'
                  title='TV+'
                  className={style.navbar__a}
                >TV+</Link>
              </li>
            </ul>
            
          </nav>
          {headerModul && <div>12334254535</div>}
        <div className={style.header__right}>
          <button className={style.DIV_1}>Оплатить подписку</button>
          <button className={style.DIV_1}>Оплатить подписку</button>
        </div>
        <DropDown/>
      </div>

    </div>
  )
}

export default Header
