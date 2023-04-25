import {useRouter} from 'next/router'

import Link from 'next/link'
import Image from 'next/image'

import {GoMail} from 'react-icons/go'
import {IoCallOutline} from 'react-icons/io5'
import {MdVolumeOff} from 'react-icons/md'
import {MdDesktopMac} from 'react-icons/md'

import {en} from '../../../public/locales/en'
import {ru} from '../../../public/locales/ru'

import style from './footer.module.scss'


const Footer = () => {

    const {locale, locales, asPath} = useRouter()

    const t = locale === 'en' ? en : ru

    return (
        <div className={style.wrapper}>
            <div className={style.footer}>
                <div className={style.footer__topBlock}>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>{t.footer.item1.title}</p>
                        <Link
                            className={style.footer__link}
                            href={
                                'https://corp.ivi.ru/?_gl=1%2Alvn2xf%2A_ga%2AMTMxNTY0MzcwMS4xNjgxMjE0Mzc5%2A_ga_GETQ4387MJ%2AMTY4MTQ4MjkyMy42LjEuMTY4MTUwNzAzNy42MC4wLjA.'
                            }
                        >
                            {t.footer.item1.text1}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://corp.ivi.ru/career/#career-vacancy-block'}
                        >
                            {t.footer.item1.text2}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/pages/beta/'}
                        >
                            {t.footer.item1.text3}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/partners'}
                        >
                            {t.footer.item1.text4}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://corp.ivi.ru/advertisers/'}
                        >
                            {t.footer.item1.text5}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/agreement'}
                        >
                            {t.footer.item1.text6}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/confidential'}
                        >
                            {t.footer.item1.text7}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}
                        >
                            {t.footer.item1.text8}
                        </Link>
                    </div>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>{t.footer.item2.title}</p>
                        <Link className={style.footer__link} href={'/'}>
                            {t.footer.item2.text1}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/new'}
                        >
                            {t.footer.item2.text2}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/movies'}
                        >
                            {t.footer.item2.text3}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/series'}
                        >
                            {t.footer.item2.text4}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/animation'}
                        >
                            {t.footer.item2.text5}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/tvplus'}
                        >
                            {t.footer.item2.text6}
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/goodmovies'}
                        >
                            {t.footer.item2.text7}
                        </Link>
                        <Link
                            className={`${style.footer__link} ${style.gradient} `}
                            href={'https://www.ivi.ru/cert'}
                        >
                            {t.footer.item2.text8}
                        </Link>
                    </div>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>{t.footer.item3.title}</p>
                        <span>{t.footer.item3.text1}</span>
                        <span>{t.footer.item3.text2}</span>
                        <button className={style.footer__btnChat}>{t.footer.item3.text3}</button>
                        <div className={style.footer__btnGroup}>
                            <button className={style.footer__btn}>
                                <GoMail size={16}/>
                            </button>
                            <button className={style.footer__btn}>
                                <IoCallOutline size={16}/>
                            </button>
                        </div>
                        <div className={style.footer__groupQuestions}>
                            <Link
                                className={style.footer__linkAsk}
                                href={
                                    'https://ask.ivi.ru/?_gl=1*fa2mrd*_ga*MTMxNTY0MzcwMS4xNjgxMjE0Mzc5*_ga_GETQ4387MJ*MTY4MTU2Njc5MS44LjEuMTY4MTU2NzI1My4zLjAuMA..'
                                }
                            >
                                ask.ivi.ru
                            </Link>
                            <span>{t.footer.item3.text4}</span>
                        </div>
                    </div>
                    <div className={style.footer__column}>
                        <Link className={style.footer__columnRight}
                              href={'https://www.ivi.ru/subscribe?redirect_url=%2Fwatch%2F504525'}>
                            <div className={style.footer__widget}>
                                <MdVolumeOff size={60} color={'#fff'}/>
                            </div>
                            <span>{t.footer.item4.title}</span>
                        </Link>
                    </div>
                </div>
                <div className={style.footer__downBlock}>
                    <div className={style.footer__downBlock_left}>
                        <div className={style.footer__downBlock_group}>
                            <Link
                                className={style.footer__smartBtn}
                                href={'https://apps.apple.com/RU/app/id455705533?mt=8'}
                            >
                                <Image src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg'}
                                       alt={'apple'} width={20} height={20}/>
                                <div>
                                    <p className={style.footer__smartBtn_title}>{t.footer.item5.text1}</p>
                                    <p className={style.footer__smartBtn_text}>App Store</p>
                                </div>
                            </Link>
                            <Link
                                className={style.footer__smartBtn}
                                href={'https://apps.apple.com/RU/app/id455705533?mt=8'}
                            >
                                <Image src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg'}
                                       alt={'apple'} width={20} height={20}/>
                                <div>
                                    <p className={style.footer__smartBtn_title}>{t.footer.item5.text2}</p>
                                    <p className={style.footer__smartBtn_text}>Goggle Play</p>
                                </div>
                            </Link>
                            <Link
                                className={style.footer__smartBtn}
                                href={'https://www.ivi.ru/pages/tvsmart/'}
                            >
                                <MdDesktopMac size={20}/>
                                <div>
                                    <p className={style.footer__smartBtn_title}>{t.footer.item5.text3}</p>
                                    <p className={style.footer__smartBtn_text}>Smart TV</p>
                                </div>
                            </Link>
                            <Link
                                className={style.footer__smartBtn}
                                href={'https://apps.apple.com/RU/app/id455705533?mt=8'}
                            >
                                <Image src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg'}
                                       alt={'apple'} width={20} height={20}/>
                                <div>

                                    <p className={style.footer__smartBtn_text}>{t.footer.item5.text4}</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <p>© 2023 ООО «Иви.ру»</p>
                            <p>
                                HBO ® and related service marks are the property of Home Box
                                Office, Inc
                            </p>
                        </div>
                    </div>
                    <div className={style.footer_downBlock_right}>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg'}
                                alt={'vk'}
                            />
                        </button>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg'}
                                alt={'od'}
                            />
                        </button>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg'}
                                alt={'twitter'}
                            />
                        </button>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg'}
                                alt={'viber'}
                            />
                        </button>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg'}
                                alt={'linkendin'}
                            />
                        </button>
                        <button className={`${style.footer__btn} ${style.border}`}>
                            <Image
                                width={16}
                                height={16}
                                src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg'}
                                alt={'telegram'}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
