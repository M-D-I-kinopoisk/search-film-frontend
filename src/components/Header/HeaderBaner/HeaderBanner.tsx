import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {MdDesktopMac} from 'react-icons/md'
import style from './headerBanner.module.scss'

const HeaderBanner = () => {
    const [toggleBlock, setToggleBlock] = useState(false)

    console.log(toggleBlock)
    return (
        <div className={style.headerBanner}>
            <div
                className={style.headerBanner__topBlock}
                onMouseEnter={() => setToggleBlock(true)}
                onMouseLeave={() => setToggleBlock(false)}
            >
                <div className={style.headerBanner__sliders}>
                    <div className={style.headerBanner__sliderTop}>
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                    <div className={style.headerBanner__sliderCenter}>
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                    <div className={style.headerBanner__sliderDown}>
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={style.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                </div>
                <div className={style.headerBanner__toggleBlock}>
                    <div
                        className={
                            toggleBlock
                                ? `${style.headerBanner__detailsBlock} ${style.headerBanner__detailsBlock_active}`
                                : `${style.headerBanner__detailsBlock}`
                        }
                    >
                        <div className={style.headerBanner__logo}>
                            <Image
                                src={'/img/header-slider-logo.svg'}
                                width={48}
                                height={48}
                                alt={'ivi'}
                            />
                        </div>
                        <div>
                            <div className={style.headerBanner__detailsTitle}>
                                Подписка Иви
                            </div>
                            <div className={style.headerSlaider__detailsExtra}>
                                От 199&nbsp;₽ за месяц
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            toggleBlock
                                ? `${style.headerBanner__detailsBlock2} ${style.headerBanner__detailsBlock2_active}`
                                : `${style.headerBanner__detailsBlock2}`
                        }
                        style={{position: 'absolute', top: '-65px'}}
                    >
                        <Link
                            className={style.headerBanner__detailsBtn}
                            href={'https://www.ivi.ru/profile/subscription'}
                        >
                            Подключить
                        </Link>
                        <div className={style.headerBanner__detailsNote}>
                            Отключить можно в любой момент
                        </div>
                    </div>
                </div>
            </div>
            <Link
                className={style.headerBanner__btnSmartTV}
                href={'https://www.ivi.ru/pages/tvsmart/'}
            >
                <MdDesktopMac size={20}/>
                Смотреть на SmartTV
            </Link>
        </div>
    )
}

export default HeaderBanner
