import Link from 'next/link'

import {BiMoviePlay} from 'react-icons/bi'
import {BsBookmark, BsShare} from 'react-icons/bs'
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {SlDiamond} from 'react-icons/sl'
import {FiAward} from 'react-icons/fi'
import {IoIosTv} from 'react-icons/io'
import {AiOutlineCreditCard} from 'react-icons/ai'

import {useDispatch} from 'react-redux'
import {toggle} from '@/redux/AuthToggleSlice'

import style from './dropDownProfile.module.scss'
import {signOut, useSession} from 'next-auth/react'
import {useTranslations} from 'next-intl'

const DropDownProfile = () => {

    const t = useTranslations('DropDownProfile')

    const {data: session} = useSession()

    const dispatch = useDispatch()
    const openAuth = () => {
        dispatch(toggle({
            authorization: true,
            registration: false
        }))
    }

    return (
        <div className={style.dropDown__user}>
            <div className={style.dropDown__userLeftBlock}>
                <Link className={style.dropDown__userItem}
                      href={'https://www.ivi.ru/profile/purchases'}>
                    <BiMoviePlay size={20}/>
                    <p className={style.dropDown__userText}>{t('title1')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/favorites'>
                    <BsBookmark size={20}/>
                    <p className={style.dropDown__userText}>{t('title2')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/watched'>
                    <RxCounterClockwiseClock size={20}/>
                    <p className={style.dropDown__userText}>{t('title3')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/subscriptions'>
                    <SlDiamond size={20}/>
                    <div className={style.dropDown__userBulb}></div>
                    <p className={style.dropDown__userText}>{t('title4')}</p>
                    <span>{t('description')}</span>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/'>
                    <FiAward size={20}/>
                    <p className={style.dropDown__userText}>{t('title5')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/'>
                    <IoIosTv size={20}/>
                    <p className={style.dropDown__userText}>{t('title6')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/cards'>
                    <AiOutlineCreditCard size={20}/>
                    <p className={style.dropDown__userText}>{t('title7')}</p>
                </Link>
                <Link className={style.dropDown__userItem}
                      href='https://www.ivi.ru/profile/referral'>
                    <div>
                        <BsShare size={20}/>
                    </div>
                    <p className={style.dropDown__userText}>{t('title8')}</p>
                </Link>
            </div>
            <div className={style.dropDown__userRightBlock}>
                {session?.user?.token || session?.user?.name ?
                    <button onClick={() => signOut({
                        redirect: false
                    })} className={style.dropDown__userRightBlock_btn}>
                        {t('exit')}
                    </button> :
                    <button onClick={() => openAuth()} className={style.dropDown__userRightBlock_btn}>
                        {t('enter')}
                    </button>
                }
                <div className={style.dropDown__userRightBlock_group}>
                    <Link className={style.dropDown__userLink}
                          href={'https://www.ivi.ru/profile/settings'}>{t('text1')}</Link>
                    <Link className={style.dropDown__userLink}
                          href={'https://ask.ivi.ru/'}>  {t('text2')}</Link>
                </div>
            </div>
        </div>
    )
}

export default DropDownProfile