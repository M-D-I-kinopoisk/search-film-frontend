import {useState} from 'react'
import style from './header.module.scss'
import Image from 'next/image'
import DropDown from './DropDown/DropDown'
import HeaderLink from '@/components/HeaderLinks/HeaderLink'
import Link from 'next/link'

const Header = () => {
  const [headerModul, setHeaderModul] = useState(false)

  const [categoryDropDown, setCategoryDropDown] = useState('')

 let  category = 'dsfs'

  const handleMouseEnter = (e) => {
    if (e.target.id) {
        console.log(e.target.id)
        setCategoryDropDown(e.target.id)

    } else {
        console.log(1)
        setCategoryDropDown((prev) => prev)
    }
     category = e.target.id
    console.log(e.target.id)

    setHeaderModul(true)
  }

  const handleMouseLeave = () => {
    setHeaderModul(false)
  }

//   console.log(headerModul)
  return (
    <div className={style.wrapper}>

      <div className={style.header}>
      {headerModul && <DropDown categoryDropDown={categoryDropDown}  handleMouseEnter={(e) => handleMouseEnter(e)} handleMouseLeave={handleMouseLeave}/>}
        <div className={style.header__logo}>
          <HeaderLink
            text={
              <Image
                src='/img/header-logo.svg'
                width={66}
                height={48}
                alt='ivi'
              />
            }
            href='#!'
            title='Онлайн-кинотеатр Иви'
            className={''}
          />
        </div>
        {/* <div className={style.DIV_1}> */}
        <nav className={style.navbar}>
          <ul className={style.navbar__ul}>
            <li className={style.navbar__li}>
              <HeaderLink
                href='/'
                text='Мой Иви'
                className={style.navbar__a}
                title='Мой Иви'
              />
            </li>
            <li className={style.navbar__li}>
              <HeaderLink
                href='https://www.ivi.ru/new'
                text='Что нового'
                title='Что нового'
                className={style.navbar__a}
              />
            </li>
            <li className={style.navbar__li} id='movies' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleMouseLeave}>
              <HeaderLink
                href='https://www.ivi.ru/movies'
                title='Фильмы онлайн'
                text='Фильмы'
                className={style.navbar__a}
              />
            </li>
            <li className={style.navbar__li} id='series' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleMouseLeave}>
              <HeaderLink
                href='https://www.ivi.ru/series'
                text='Сериалы'
                className={style.navbar__a}
                title='Сериалы онлайн'
              />
            </li>
            <li className={style.navbar__li} id='animation' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleMouseLeave}>
              <HeaderLink
                href='https://www.ivi.ru/animation'
                text='Мультфильмы'
                title='Мультфильмы онлайн'
                className={style.navbar__a}
              />
            </li>
            <li className={style.navbar__li}>
              <HeaderLink
                href='https://www.ivi.ru/tvplus'
                title='TV+'
                className={style.navbar__a}
                text='TV+'
              />
            </li>
          </ul>
        </nav>
        {/* {headerModul && <div>12334254535</div>} */}
        <div className={style.header__right}>
          <button className={style.DIV_1}>Оплатить подписку</button>
          <button className={style.DIV_1}>Оплатить подписку</button>
        </div>


      </div>

    </div>
    // </div>
  )
}

export default Header