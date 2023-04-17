import Link from 'next/link'
import Image from 'next/image'
import {GoMail} from 'react-icons/Go'
import {IoCallOutline} from 'react-icons/io5'
import {MdVolumeOff} from 'react-icons/Md'
import {MdDesktopMac} from 'react-icons/Md'
import style from './footer.module.scss'

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.footer}>
                <div className={style.footer__topBlock}>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>О нас</p>
                        <Link
                            className={style.footer__link}
                            href={
                                'https://corp.ivi.ru/?_gl=1%2Alvn2xf%2A_ga%2AMTMxNTY0MzcwMS4xNjgxMjE0Mzc5%2A_ga_GETQ4387MJ%2AMTY4MTQ4MjkyMy42LjEuMTY4MTUwNzAzNy42MC4wLjA.'
                            }
                        >
                            О компании
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://corp.ivi.ru/career/#career-vacancy-block'}
                        >
                            Вакансии
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/pages/beta/'}
                        >
                            Программа бета-тестирования
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/partners'}
                        >
                            Информация для партнёров
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://corp.ivi.ru/advertisers/'}
                        >
                            Размещение рекламы
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/agreement'}
                        >
                            Пользовательское соглашение
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/confidential'}
                        >
                            Политика конфиденциальности
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}
                        >
                            Комплаенс
                        </Link>
                    </div>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>Разделы</p>
                        <Link className={style.footer__link} href={'/'}>
                            Мой Иви
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/new'}
                        >
                            Что нового
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/movies'}
                        >
                            Фильмы
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/series'}
                        >
                            Сериалы
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/animation'}
                        >
                            Мультфильмы
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/tvplus'}
                        >
                            TV+
                        </Link>
                        <Link
                            className={style.footer__link}
                            href={'https://www.ivi.ru/goodmovies'}
                        >
                            Что посмотреть
                        </Link>
                        <Link
                            className={`${style.footer__link} ${style.gradient} `}
                            href={'https://www.ivi.ru/cert'}
                        >
                            Активация сертификата
                        </Link>
                    </div>
                    <div className={style.footer__column}>
                        <p className={style.footer__title}>Служба поддержки</p>
                        <span>
              Мы всегда готовы вам помочь.
              <br/>
              Наши операторы онлайн 24/7
            </span>
                        <button className={style.footer__btnChat}>Написать в чате</button>
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
                            <span>Ответы на вопросы</span>
                        </div>
                    </div>
                    <div className={style.footer__column}>
                        <Link className={style.footer__columnRight} href={'https://www.ivi.ru/subscribe?redirect_url=%2Fwatch%2F504525'}>
                            <div className={style.footer__widget}>
                                <MdVolumeOff size={60} color={'#fff'}/>
                            </div>
                            <span>Смотрите фильмы, сериалы и мультфильмы без рекламы</span>
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
                                    <p className={style.footer__smartBtn_title}>Загрузить в</p>
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
                                    <p className={style.footer__smartBtn_title}>Доступно в</p>
                                    <p className={style.footer__smartBtn_text}>Goggle Play</p>
                                </div>
                            </Link>
                            <Link
                                className={style.footer__smartBtn}
                                href={'https://www.ivi.ru/pages/tvsmart/'}
                            >
                                <MdDesktopMac size={20}/>
                                <div>
                                    <p className={style.footer__smartBtn_title}>Смотрите на</p>
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

                                    <p className={style.footer__smartBtn_text}>Все устройства</p>
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
