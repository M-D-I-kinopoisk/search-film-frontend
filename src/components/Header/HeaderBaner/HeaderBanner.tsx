import Link from 'next/link'
import Image from 'next/image'

import {useState} from 'react'

import {MdDesktopMac} from 'react-icons/md'

import styles from './headerBanner.module.scss'

const HeaderBanner = () => {

    const [toggleBlock, setToggleBlock] = useState(false)

    return (
        <div className={styles.headerBanner}>
            <div
                className={styles.headerBanner__topBlock}
                onMouseEnter={() => setToggleBlock(true)}
                onMouseLeave={() => setToggleBlock(false)}>
                <div className={styles.headerBanner__sliders}>
                    <div className={styles.headerBanner__sliderTop}>
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                    <div className={styles.headerBanner__sliderCenter}>
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                    <div className={styles.headerBanner__sliderDown}>
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film2.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film3.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                        <Image
                            className={styles.headerBanner__sliderImg}
                            src={'/img/mini-film1.jpg'}
                            width={128}
                            height={72}
                            alt={'film'}
                        />
                    </div>
                </div>
                <div className={styles.headerBanner__toggleBlock}>
                    <div
                        className={
                            toggleBlock
                                ? `${styles.headerBanner__detailsBlock} ${styles.headerBanner__detailsBlock_active}`
                                : `${styles.headerBanner__detailsBlock}`}>
                        <div className={styles.headerBanner__logo}>
                            <Image
                                src={'/img/header-slider-logo.svg'}
                                width={48}
                                height={48}
                                alt={'ivi'}
                            />
                        </div>
                        <div>
                            <div className={styles.headerBanner__detailsTitle}>
                                Подписка Иви
                            </div>
                            <div className={styles.headerSlaider__detailsExtra}>
                                От 199&nbsp;₽ за месяц
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            toggleBlock
                                ? `${styles.headerBanner__detailsBlock2} ${styles.headerBanner__detailsBlock2_active}`
                                : `${styles.headerBanner__detailsBlock2}`}
                        style={{position: 'absolute', top: '-65px'}}>
                        <Link
                            className={styles.headerBanner__detailsBtn}
                            href={'https://www.ivi.ru/profile/subscription'}>
                            Подключить
                        </Link>
                        <div className={styles.headerBanner__detailsNote}>
                            Отключить можно в любой момент
                        </div>
                    </div>
                </div>
            </div>
            <Link
                className={styles.headerBanner__btnSmartTV}
                href={'https://www.ivi.ru/pages/tvsmart/'}>
                <MdDesktopMac size={20}/>
                Смотреть на SmartTV
            </Link>
        </div>
    )
}

export default HeaderBanner
