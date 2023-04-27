import Link from 'next/link'

import {BiMoviePlay} from 'react-icons/bi'
import {BsBookmark, BsShare} from 'react-icons/bs'
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {SlDiamond} from 'react-icons/sl'
import {FiAward} from 'react-icons/fi'
import {IoIosTv} from 'react-icons/io'
import {AiOutlineCreditCard} from 'react-icons/ai'

import style from '@/components/Header/DropDown/DropDown.module.scss'


const Profile = () => {
    return (
        <div className={style.dropDown__user}>
            <div className={style.dropDown__userLeftBlock}>
                <Link className={style.dropDown__userItem}
                      href={'https://www.ivi.ru/profile/purchases'}>
                    <BiMoviePlay size={20}/>
                    <p className={style.dropDown__userText}>Покупки</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/favorites'>
                    <BsBookmark size={20}/>
                    <p className={style.dropDown__userText}>Смотреть позже</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/watched'>
                    <RxCounterClockwiseClock size={20}/>
                    <p className={style.dropDown__userText}>История просмотров</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/subscriptions'>
                    <SlDiamond size={20}/>
                    <div className={style.dropDown__userBulb}></div>
                    <p className={style.dropDown__userText}>Подписки</p>
                    <span>Подключить</span>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/'>
                    <FiAward size={20}/>
                    <p className={style.dropDown__userText}>Активация сертификата</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/'>
                    <IoIosTv size={20}/>
                    <p className={style.dropDown__userText}>Вход по коду</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/cards'>
                    <AiOutlineCreditCard size={20}/>
                    <p className={style.dropDown__userText}>Способы оплаты</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/referral'>
                    <div>
                        <BsShare size={20}/>
                    </div>
                    <p className={style.dropDown__userText}>Пригласить друзей</p>
                </Link>
            </div>
            <div className={style.dropDown__userRightBlock}>
                <button className={style.dropDown__userRightBlock_btn}>Войти или зарегистрироваться
                </button>
                <div className={style.dropDown__userRightBlock_group}>
                    <Link className={style.dropDown__userLink}
                          href={'https://www.ivi.ru/profile/settings'}>Настройки</Link>
                    <Link className={style.dropDown__userLink}
                          href={'https://ask.ivi.ru/'}>Помощь</Link>
                </div>
            </div>
        </div>
    )
}

export default Profile