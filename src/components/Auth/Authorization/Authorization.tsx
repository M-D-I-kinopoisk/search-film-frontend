import {signIn, useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {toggle} from '@/redux/AuthToggleSlice'
import {useEffect, useState} from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import Input from '@/components/UI/Input/Input'
import {TbPencil} from 'react-icons/tb'
import {SlSocialVkontakte, SlSocialGoogle} from 'react-icons/sl'
import {useTranslations} from 'next-intl'

import styles from '@/components/Auth/auth.module.scss'


export default function Authorization() {

    const t = useTranslations('Authorization')


    const {data: session, status} = useSession()


    const dispatch = useDispatch()


    const [inputLogin, setInputLogin] = useState('')

    const [inputPass, setInputPass] = useState('')

    const [toggleBlock, setToggleBlock] = useState(false)

    const [nextToggle, setNextToggle] = useState(false)

    const [animate, setAnimate] = useState(false)

    const [progressLine, setProgressLine] = useState('5')

    const [validation, setValidation] = useState(true)


    const closeAuth = () => {
        dispatch(toggle({
            authorization: false,
            registration: false
        }))
    }


    useEffect(() => {
        if (session?.user?.token) {
            setTimeout(function () {
                dispatch(toggle({
                    authorization: false,
                    registration: false
                }))
            }, 3000)
        }


        document.body.classList.add('modalScroll')

        return () => {
            document.body.classList.remove('modalScroll')
        }
    })


    const buttonClickNext = () => {
        if (inputLogin.includes('@')) {
            setProgressLine('33')
            setAnimate(true)
            setTimeout(function () {
                setToggleBlock(true)
                setValidation(true)
            }, 500)
        } else {
            setValidation(false)
        }
    }

    const buttonClickPop = () => {
        setNextToggle(false)
        setProgressLine('5')
        setAnimate(false)
        setTimeout(function () {
            setToggleBlock(false)
        }, 1300)
    }


    const authorization = async () => {
        setAnimate(false)
        const result = await signIn('credentials', {
            email: inputLogin,
            password: inputPass,
            redirect: false
        })
        setNextToggle(true)
        setProgressLine('100')

    }


    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>{toggleBlock ? inputLogin : t('title1')}</p>
                            <button onClick={() => closeAuth()} className={styles.auth__btnClose}>
                                <VscChromeClose size={20}/>
                            </button>
                        </div>
                        <div className={styles.auth__headerProgress}>
                            <div className={styles.auth__headerProgress_line}
                                 style={{width: `${progressLine}%`}}></div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.form}>
                                <div className={styles.form__blockText} onClick={() => dispatch(toggle({
                                    authorization: false,
                                    registration: true
                                }))}>
                                    <p className={styles.form__title}>{t('title2')}</p>
                                    {!toggleBlock &&
                                        <span className={styles.form__text}>
                                            {t('title3')}
                                        </span>}
                                </div>

                                {!toggleBlock && (
                                    <>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <Input label={t('input')}
                                                   onChange={(e) => setInputLogin(e.target.value)}
                                                   type={'text'}
                                                   value={inputLogin}
                                                   login={true}
                                            />
                                        </div>
                                        <div
                                            className={animate ? `${styles.form__btnContainer} ${styles.btn__animate}` : `${styles.form__btnContainer}`}>
                                            <button
                                                type={'button'}
                                                onClick={buttonClickNext}
                                                className={inputLogin.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                {validation ? t('btn1') :
                                                    t('btn2')}
                                            </button>
                                            <div className={styles.socialBlock}>
                                                <p className={styles.form__title}>{t('title4')}</p>
                                                <div className={styles.socialLink}>
                                                <button onClick={() => signIn('google')}>
                                                    <SlSocialGoogle size={25} />
                                                </button>
                                                <button onClick={() => signIn('vk')}>
                                                    <SlSocialVkontakte size={25} />
                                                </button>
                                                </div>
                                            </div>
                                        </div>

                                    </>)}

                                {toggleBlock &&
                                    (<div className={!animate ? `${styles.formTwo__animate}` : undefined}>
                                        <div
                                            className={!animate ? `${styles.form__blockLogin} ${styles.blockLogin__animate}` : `${styles.form__blockLogin}`}>
                                            <button
                                                type={'button'}
                                                onClick={buttonClickPop}
                                                className={!animate ? `${styles.form__blockLogin_btn} ${styles.btnChange__animate}` : `${styles.form__blockLogin_btn}`}>
                                                <TbPencil size={20}/>
                                            </button>
                                            <div className={styles.form__blockLogin_group}>
                                                <p className={styles.form__title}>{inputLogin}</p>
                                            </div>
                                        </div>
                                        <div className={styles.form__blockTwo}>
                                            <div className={styles.form__blockText}>
                                                <p className={styles.form__title}>{t('title5')}</p>
                                            </div>
                                            <div className={styles.form__LoginContainer}>
                                                <Input label={t('input2')}
                                                       onChange={(e) => setInputPass(e.target.value)}
                                                       type={'password'}
                                                       password={true}
                                                       value={inputPass}
                                                />
                                            </div>
                                            <div className={styles.form__btnContainer}>
                                                <button
                                                    onClick={authorization}
                                                    className={inputPass.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                    {t('btn1')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                {nextToggle &&
                                    status === 'authenticated' &&
                                    <div className={styles.form__enterText}>
                                        <p className={styles.form__title}>{session?.user?.role?.name === 'ADMIN' ?
                                            t('enter1') : t('enter2')}</p>
                                    </div>}
                                {nextToggle &&
                                    status === 'unauthenticated' &&
                                    <div className={styles.form__errorText} onClick={buttonClickPop}>
                                        <p className={styles.form__title}>{t('error')}</p>
                                        <p className={styles.form__title}>
                                            {t('btn3')}
                                        </p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}