import Link from 'next/link'
import style from './DropDown.module.scss'
import { FC, useState } from 'react'
import HeaderSlaider from '../HeaderSlaider/HeaderSlaider'
import Image from 'next/image'

export interface DropDownProps {
  categoryDropDown: string
  // setCategoryDropDown : (e) => void,
  handleMouseEnter: (e: any) => void
  handleMouseLeave: (e: any) => void
  srollList: number
  setScrollList: (indx: any) => void
}

const DropDown: FC<DropDownProps> = ({
  categoryDropDown,
  handleMouseEnter,
  handleMouseLeave,
  srollList,
  setScrollList,
}) => {
  let list = { genres: [], country: [], years: [], new: [] }

  if (categoryDropDown == 'header-movies') {
    list = {
      genres: [
        { name: 'Артхаус', href: '/movies/arthouse' },
        { name: 'Боевики', href: '/movies/boeviki' },
        { name: 'Вестерн', href: '/movies/western' },
        { name: 'Военные', href: '/movies/voennye' },
        { name: 'Детективы', href: '/movies/detective' },
        { name: 'Для всей семьи', href: '/movies/dlya_vsej_semi' },
        { name: 'Для детей', href: '/movies/dlya_vsej_semi' },
        { name: 'Документальные', href: '/movies/dlya_vsej_semi' },
        { name: 'Драмы', href: '/movies/dlya_vsej_semi' },
        { name: 'Исторические', href: '/movies/dlya_vsej_semi' },
        { name: 'Катастрофы', href: '/movies/dlya_vsej_semi' },
        { name: 'Комедии', href: '/movies/dlya_vsej_semi' },
        { name: 'Криминальные', href: '/movies/dlya_vsej_semi' },
        { name: 'Мелодрамы', href: '/movies/dlya_vsej_semi' },
        { name: 'Мистические', href: '/movies/dlya_vsej_semi' },
        { name: 'По комиксам', href: '/movies/dlya_vsej_semi' },
        { name: 'Приключения', href: '/movies/dlya_vsej_semi' },
        { name: 'Спорт', href: '/movies/dlya_vsej_semi' },
        { name: 'Триллеры', href: '/movies/dlya_vsej_semi' },
        { name: 'Ужасы', href: '/movies/dlya_vsej_semi' },
        { name: 'Фантастика', href: '/movies/dlya_vsej_semi' },
        { name: 'Фэнтези', href: '/movies/dlya_vsej_semi' },
      ],
      country: [
        { name: 'Русские', href: '/movies/ru' },
        { name: 'Зарубежные', href: '/movies/foreign' },
        { name: 'Советское кино', href: '/movies/su' },
      ],
      years: [
        { name: 'Фильмы 2023 года', href: '/movies/2023' } /*Готово */,
        { name: 'Фильмы 2022 года', href: '/movies/2023' },
        { name: 'Фильмы 2021 года', href: '/movies/2023' },
        { name: 'Фильмы 2020 года', href: '/movies/2023' },
      ],
      new: [
        {
          name: 'Новинки',
          href: 'https://www.ivi.ru/new/movie-new',
        } /*Готово */,
        { name: 'Подборки', href: 'https://www.ivi.ru/collections' },
        {
          name: 'Иви рейтинг',
          href: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
        },
        { name: 'Скоро на иви', href: 'https://www.ivi.ru/new/soon-ivi' },
        { name: 'Трейлеры', href: 'https://www.ivi.ru/trailers' },
        { name: 'Что посмореть', href: 'https://www.ivi.ru/goodmovies' },
        {
          name: 'Фильмы в HD',
          href: 'https://www.ivi.ru/collections/movies-hd',
        },
        {
          name: 'Выбор иви',
          href: 'https://www.ivi.ru/collections/vyibor-ivi',
        },
        {
          name: 'Новинки подписки',
          href: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
        },
        {
          name: 'Выбор иви',
          href: 'https://www.ivi.ru/collections/filmyi-amediateka',
        },
        {
          name: 'Фильмы Amediateka',
          href: 'https://www.ivi.ru/collections/filmyi-amediateka',
        },
        {
          name: 'Популярные фильмы',
          href: 'https://www.ivi.ru/collections/best-movies',
        },
        {
          name: 'Фильмы иви',
          href: 'https://www.ivi.ru/collections/ivi-originals',
        },
      ],
    }
  }

  if (categoryDropDown == 'header-series') {
    list = {
      genres: [
        { name: 'Биография', href: '/series/arthouse' },
        { name: 'Боевики', href: '/series/boeviki' },
        { name: 'Военные', href: '/series/western' },
        { name: 'Детективы', href: '/series/voennye' },
        { name: 'Для всей семьи', href: '/series/detective' },
        { name: 'Документальные', href: '/series/dlya_vsej_semi' },
        { name: 'Дорамы', href: '/series/dlya_vsej_semi' },
        { name: 'Драмы', href: '/series/dlya_vsej_semi' },
        { name: 'Исторические', href: '/series/dlya_vsej_semi' },
        { name: 'Криминальные', href: '/series/dlya_vsej_semi' },
        { name: 'Медицинские', href: '/series/dlya_vsej_semi' },
        { name: 'Мелодрамы', href: '/series/dlya_vsej_semi' },
        { name: 'Мистические', href: '/series/dlya_vsej_semi' },
        { name: 'Приключения', href: '/series/dlya_vsej_semi' },
        { name: 'Романтические', href: '/series/dlya_vsej_semi' },
        { name: 'Телешоу', href: '/series/dlya_vsej_semi' },
        { name: 'Триллеры', href: '/series/dlya_vsej_semi' },
        { name: 'Турецкие', href: '/series/dlya_vsej_semi' },
        { name: 'Ужасы', href: '/series/dlya_vsej_semi' },
        { name: 'Фантастика', href: '/series/dlya_vsej_semi' },
        { name: 'Фэнтези', href: '/series/dlya_vsej_semi' },
      ],
      country: [
        { name: 'Русские', href: '/series/ru' },
        { name: 'Зарубежные', href: '/series/ru' },
        { name: 'Советское кино', href: '/series/su' },
      ],
      years: [
        { name: 'Фильмы 2023 года', href: '/series/2023' },
        { name: 'Фильмы 2022 года', href: '/series/2023' },
        { name: 'Фильмы 2021 года', href: '/series/2023' },
        { name: 'Фильмы 2020 года', href: '/series/2023' },
      ],
      new: [
        {
          name: 'Новинки',
          href: 'https://www.ivi.ru/new/series-new',
        } /*Готово */,
        {
          name: 'Иви.Рейтинг',
          href: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
        },
        {
          name: 'Сериалы в HD',
          href: 'https://www.ivi.ru/collections/series-hd',
        },
        {
          name: 'Бесплатные сериалы',
          href: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
        },
        {
          name: 'Сериалы Amediateka',
          href: 'https://www.ivi.ru/collections/serialyi-amediateka',
        },
        {
          name: 'Сериалы Paramount Play',
          href: 'https://www.ivi.ru/collections/series-paramount-play',
        },
      ],
    }
  }

  if (categoryDropDown == 'header-animation') {
    list = {
      genres: [
        { name: 'Аниме', href: '/series/arthouse' },
        { name: 'Боевик', href: '/series/boeviki' },
        { name: 'Детектив', href: '/series/western' },
        { name: 'Для взрослых', href: '/series/voennye' },
        { name: 'Для всей семьи', href: '/series/detective' },
        { name: 'Для детей', href: '/series/dlya_vsej_semi' },
        { name: 'Драма', href: '/series/dlya_vsej_semi' },
        { name: 'История', href: '/series/dlya_vsej_semi' },
        { name: 'Комедия', href: '/series/dlya_vsej_semi' },
        { name: 'Криминальные', href: '/series/dlya_vsej_semi' },
        { name: 'Мюзикл', href: '/series/dlya_vsej_semi' },
        { name: 'Полнометражные', href: '/series/dlya_vsej_semi' },
        { name: 'Мистические', href: '/series/dlya_vsej_semi' },
        { name: 'Приключения', href: '/series/dlya_vsej_semi' },
        { name: 'Развивающие', href: '/series/dlya_vsej_semi' },
        { name: 'Сериалы', href: '/series/dlya_vsej_semi' },
        { name: 'Спорт', href: '/series/dlya_vsej_semi' },
        { name: 'Триллер', href: '/series/dlya_vsej_semi' },
        { name: 'Ужасы', href: '/series/dlya_vsej_semi' },
        { name: 'Фантастика', href: '/series/dlya_vsej_semi' },
        { name: 'Фэнтези', href: '/series/dlya_vsej_semi' },
      ],
      country: [
        { name: 'Советские', href: 'https://www.ivi.ru/animation/us' },
        { name: 'Русские', href: 'https://www.ivi.ru/animation/ru' },
        { name: 'Американские', href: 'https://www.ivi.ru/animation/us' },
        { name: 'Зарубежные', href: 'https://www.ivi.ru/animation/foreign' },
      ],
      years: [
        { name: 'Фильмы 2023 года', href: 'https://www.ivi.ru/animation/2023' },
        { name: 'Фильмы 2022 года', href: 'https://www.ivi.ru/animation/2023' },
        { name: 'Фильмы 2021 года', href: 'https://www.ivi.ru/animation/2023' },
        { name: 'Фильмы 2020 года', href: 'https://www.ivi.ru/animation/2023' },
      ],
      new: [
        { name: 'Новинки', href: 'https://www.ivi.ru/new/animation-new' },
        {
          name: 'Мультики в HD',
          href: 'https://www.ivi.ru/collections/cartoons-hd',
        },
        {
          name: 'Мультфильмы Paramount Play / Nickelodeon',
          href: 'https://www.ivi.ru/collections/animation-paramount-play',
        },
        {
          name: 'Мультфильмы Dreamworks',
          href: 'https://www.ivi.ru/collections/dreamworks-cartoons',
        },
        {
          name: 'Мультфильмы СТС Kids',
          href: 'https://www.ivi.ru/collections/ctc-kids',
        },
      ],
    }
  }

  console.log(categoryDropDown)

  return (
    <>
      <div className={style.dropDown}>
        <div
          className={style.dropDown__container}
          // onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {(categoryDropDown == 'header-movies' ||
            categoryDropDown == 'header-series' ||
            categoryDropDown == 'header-animation') && (
            <div className={style.dropDown__block}>
              {/* Cписок *Жанры* */}
              <div>
                <p style={{ color: 'white', marginBottom: '15px' }}>Жанры</p>
                <ul className={style.dropDown__genres}>
                  {list.genres.map((element, indx) => {
                    return (
                      <div key={indx}>
                        <li>
                          <Link
                            className={style.dropDown__a}
                            href={element.href}
                          >
                            {element.name}
                          </Link>
                        </li>
                      </div>
                    )
                  })}
                </ul>
              </div>
              {/* Cписок *Страны и годы* */}
              <div className={style.dropDown__countyYarsBlock}>
                <p style={{ color: 'white', marginBottom: '15px' }}>Страны</p>
                <ul className={style.dropDown__country}>
                  {list.country.map((element, indx) => {
                    return (
                      <li key={indx}>
                        <Link className={style.dropDown__a} href={element.href}>
                          {element.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <p
                  style={{
                    color: 'white',
                    marginTop: '15px',
                    marginBottom: '10px',
                  }}
                >
                  Годы
                </p>
                <ul className={style.dropDown__country}>
                  {list.years.map((element, indx) => {
                    return (
                      <li key={indx}>
                        <Link className={style.dropDown__a} href={element.href}>
                          {element.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              {/* Cписок *новинки и слайдер справа* */}
              <div className={style.dropDown__rightBlock}>
                <ul className={style.dropDown__new}>
                  {list.new.map((element, indx) => {
                    return (
                      <li key={indx} onMouseEnter={() => setScrollList(indx)}>
                        <Link
                          className={
                            indx == srollList
                              ? `${style.dropDown__newlink} ${style.dropDown__newlinkActiv}`
                              : style.dropDown__newlink
                          }
                          href={element.href}
                        >
                          {element.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <HeaderSlaider />
              </div>
            </div>
          )}
          {/* Блок Уведомления  */}
          {categoryDropDown === 'header-notifications' && (
            <div className={style.dropDown__notifications}>
              <Image
                width={56}
                height={56}
                src={'/img/notification-icon.svg'}
                alt={'notification'}
              />
              <p>Здесь появляются только важные сообщения</p>
            </div>
          )}
          {categoryDropDown === 'header-user' && (
            <div className={style.dropDown__user}>
              <div className={style.dropDown__userLeftBlock}>
                <Link className={style.dropDown__userleftBlock_link} href={'https://www.ivi.ru/profile/purchases'}>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'multimedia'}/>
                  <p>Покупки</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/profile/favorites'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'favorites'}/>
                  <p>Смотреть позже</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link}href='https://www.ivi.ru/profile/watched'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'watched'}/>
                  <p>История просмотров</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/profile/subscriptions'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'subscriptions'}/>
                  <p>Подписки</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'ivi'}/>
                  <p>Активация сертификата</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'ivi'}/>
                  <p>Вход по коду</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/profile/cards'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'cards'}/>
                  <p>Способы оплаты</p>
                </Link>
                <Link className={style.dropDown__userleftBlock_link} href='https://www.ivi.ru/profile/referral'>
                  <Image width={20} height={20} src={'/img/multimedia-icon.svg'} alt={'referral'}/>
                  <p>Пригласить друзей</p>
                </Link>
              </div>
              <div className={style.dropDown__userRightBlock}>
                <button className={style.dropDown__userRightBlock_btn}>Войти или зарегистрироваться</button>
                <div className={style.dropDown__userRightBlock_group}>
                <Link style={{color : 'rgba(255, 255, 255, 0.72)'}} href={'https://www.ivi.ru/profile/settings'}>Настройки</Link>
                <Link style={{color : 'rgba(255, 255, 255, 0.72)'}} href={'https://ask.ivi.ru/'}>Помощь</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DropDown
