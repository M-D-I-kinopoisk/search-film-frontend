import {signIn, signOut, useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {toggle} from '@/redux/AuthToggleSlice'
import {useEffect, useState} from 'react'
import styles from '@/components/AuthWindow/Auth/auth.module.scss'
import {VscChromeClose} from 'react-icons/vsc'
import Input from '@/components/UI/Input/Input'
import {TbPencil} from 'react-icons/tb'
import {ImGoogle} from 'react-icons/im'
import {SlSocialVkontakte} from 'react-icons/sl'

export default function Authorization() {
    const {data: session} = useSession()

    console.log(session)

    const dispatch = useDispatch()


    const [inputLogin, setInputLogin] = useState('')

    const [inputPass, setInputPass] = useState('')

    const [toggleBlock, setToggleBlock] = useState(false)

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
        setProgressLine('100')
        console.log(result)
        console.log(session?.user.idUser)
        console.log(session?.user.token)

    }



    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>{toggleBlock ? inputLogin : 'Вход'}</p>
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
                                    <p className={styles.form__title}>Войдите или нажмите сюда для регистрации</p>
                                    {!toggleBlock &&
                                        <span className={styles.form__text}>чтобы пользоваться сервисом на любом
                                            устройстве
                                        </span>}
                                </div>

                                {!toggleBlock && (
                                    <>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <Input label={'Через email'}
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
                                                {validation ? 'Продолжить' :
                                                    'Введите корректный email и нажмите'}
                                            </button>
                                        </div>
                                        <button className={styles.auth__headerText} onClick={() => signIn('google')}><ImGoogle size={20}/></button>
                                        <button className={styles.auth__headerText} onClick={() => signIn('vk')}><SlSocialVkontakte size={20}/></button>
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
                                                <p className={styles.form__title}>Введите пароль для входа</p>
                                            </div>
                                            <div className={styles.form__LoginContainer}>
                                                <Input label={'Введите пароль'}
                                                       onChange={(e) => setInputPass(e.target.value)}
                                                       type={'password'}
                                                       password={true}
                                                       value={inputPass}
                                                />
                                            </div>
                                            <div className={styles.form__btnContainer}>
                                                <button
                                                    // type={'submit'}
                                                    onClick={authorization}
                                                    className={inputPass.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                    Продолжить
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                {toggleBlock &&
                                    session?.user?.token &&
                                    <div className={styles.form__enterText} >
                                        <p className={styles.form__title}>Вы успешно вошли</p>
                                    </div>}
                                {toggleBlock &&
                                    !session?.user?.token &&
                                    <div className={styles.form__errorText} >
                                        <p className={styles.form__title}>{session?.user?.message || 'Неправильные данные'}</p>
                                        <p className={styles.form__title} onClick={buttonClickPop}>Нажмите чтобы вернуться назад</p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}