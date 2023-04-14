import { useState } from 'react'
import style from './header.module.scss'
import Image from 'next/image'
import DropDown from './DropDown/DropDown'
import HeaderLink from '@/components/HeaderLinks/HeaderLink'
import Link from 'next/link'

const Header = () => {
  const [headerModul, setHeaderModul] = useState(false)

  const [categoryDropDown, setCategoryDropDown] = useState('')

  const [srollList, setScrollList] = useState(0)

  const handleMouseEnter = (e) => {
    if (e.target.id) {
      console.log(e.target.id)
      setCategoryDropDown(e.target.id)
      setScrollList(0)
    } else {
      console.log(1)
      setCategoryDropDown((prev) => prev)
    }

    setHeaderModul(true)
  }

  const handleMouseLeave = () => {
    setHeaderModul(false)
    setScrollList(0)
  }

  //   console.log(headerModul)
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {headerModul && (
          <DropDown
          srollList={srollList} 
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
        {/* <div className={style.DIV_1}> */}
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
              id='movies'
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
              id='series'
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
              id='animation'
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
              className={style.header__btтPay}
              href={
                'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&from=top_menu&redirect_url=%2F&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6'
              }
            >
              Оплатить подписку
            </Link>
          </div>
          <div className={style.header__rightContainer}>
            <Link
              className={style.header__btтSearch}
              href={'https://www.ivi.ru/?ivi_search'}
            >
              <svg
                className={style.header__btтSearchsvg}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                fill='rgba(255,255,255,.48)'
                width='20px'
                height='20px'
              >
                <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
              </svg>{' '}
              Поиск
            </Link>
          </div>
          <div
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            className={style.header__rightContainer}
          >
            <Link
              className={style.header__btтSearch}
              href={'https://www.ivi.ru/profile/pull_notifications'}
            >
              <svg
                className={style.header__btтSearchsvg}
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
                fill='rgba(255,255,255,.48)'
                width='20px'
                height='20px'
              >
                <title />
                <g>
                  <path d='M29.78,24.37l-3.65-4.48L26,12a1,1,0,0,0,0-.16C24.85,5.58,21.21,2,16,2,10.5,2,6.08,6,5,11.82A1,1,0,0,0,5,12l-.13,8L2.14,24.48a1,1,0,0,0,0,1A1,1,0,0,0,3,26h9a4,4,0,0,0,8,0h9a1,1,0,0,0,.9-.57A1,1,0,0,0,29.78,24.37ZM16,28a2,2,0,0,1-2-2h4A2,2,0,0,1,16,28ZM4.77,24l2-3.24a1,1,0,0,0,.14-.5L7,12.1C7.91,7.25,11.52,4,16,4c5.63,0,7.43,5,8,8.1l.14,8.16a1,1,0,0,0,.22.62L26.9,24Z' />
                </g>
              </svg>
            </Link>
          </div>
          <div
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            className={style.header__rightContainer}
          >
            <Link className={style.header__btтUser} href={''}>
              <svg
                className={style.header__btтSearchsvg}
                fill='rgba(255,255,255,.48)'
                width='22px'
                height='22px'
                viewBox='0 0 1024 1024'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M853.333333 938.666667h-85.333333v-85.333334a128 128 0 0 0-128-128H384a128 128 0 0 0-128 128v85.333334H170.666667v-85.333334a213.333333 213.333333 0 0 1 213.333333-213.333333h256a213.333333 213.333333 0 0 1 213.333333 213.333333v85.333334z m-341.333333-384a256 256 0 1 1 0-512 256 256 0 0 1 0 512z m0-85.333334a170.666667 170.666667 0 1 0 0-341.333333 170.666667 170.666667 0 0 0 0 341.333333z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Header
