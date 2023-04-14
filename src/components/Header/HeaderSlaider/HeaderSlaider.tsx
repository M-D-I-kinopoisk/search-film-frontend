import Link from 'next/link'
import style from './headerSlaider.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const HeaderSlaider = () => {
  const [toggleBlock, setToggleBlock] = useState(false)




  console.log(toggleBlock)
  return (
    <div className={style.headerSlaider}>
      <div
        className={style.headerSlaider__topBlock}
        onMouseEnter={() => setToggleBlock(true)}
        onMouseLeave={() => setToggleBlock(false)}
      >
        <div className={style.headerSlaider__sliders}>
          <div className={style.headerSlaider__sliderTop} >
            <Image
            className={style.headerSlaider__sliderImg}
              src={'/img/mini-film1.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
            <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film2.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
              <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film3.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
                <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film1.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
          </div>
          <div className={style.headerSlaider__sliderCenter} >
            <Image
            className={style.headerSlaider__sliderImg}
              src={'/img/mini-film1.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
            <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film2.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
              <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film3.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
                <Image
             className={style.headerSlaider__sliderImg}
              src={'/img/mini-film1.jpg'}
              width={128}
              height={72}
              alt={'film'}
            />
          </div>
        </div>
        <div className={style.headerSlaider__toggleBlock}>
          <div
            className={
              toggleBlock
                ? `${style.headerSlaider__detalisBlock} ${style.headerSlaider__detalisBlock_activ}`
                : `${style.headerSlaider__detalisBlock}`
            }
          >
            <div className={style.headerSlaider__logo}>
              <Image
                src={'/img/header-slider-logo.svg'}
                width={48}
                height={48}
                alt={'ivi'}
              />
            </div>
            <div>
              <div className={style.headerSlaider__detalistittle}>
                Подписка Иви
              </div>
              <div className={style.headerSlaider__detalisExtra}>
                От 199&nbsp;₽ за месяц
              </div>
            </div>
          </div>
          <div
            className={
              toggleBlock
                ? `${style.headerSlaider__detalisBlock2} ${style.headerSlaider__detalisBlock2_activ}`
                : `${style.headerSlaider__detalisBlock2}`
            }
            style={{ position: 'absolute', top: '-65px' }}
          >
            <Link
              className={style.headerSlaider__detalisBtn}
              href={'https://www.ivi.ru/profile/subscription'}
            >
              Подключить
            </Link>
            <div className={style.headerSlaider__detalisNote}>
              Отключить можно в любой момент
            </div>
          </div>
        </div>
      </div>
      <Link
        className={style.headerSlider__btnSmartTV}
        href={'https://www.ivi.ru/pages/tvsmart/'}
      >
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <Image
            src={'/img/icon-smartTV.svg'}
            width={22}
            height={15}
            alt={'TV'}
          />
          Смотреть на SmartTV
        </div>
      </Link>
    </div>
  )
}

export default HeaderSlaider
