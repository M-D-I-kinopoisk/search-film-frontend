import styles from '@/components/AuthWindow/Auth/auth.module.scss'
import {VscChromeClose} from 'react-icons/vsc'
import Input from '@/components/UI/Input/Input'
import {TbPencil} from 'react-icons/tb'
import {signIn, useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {selectToggle, toggle} from '@/redux/AuthToggleSlice'
import {useEffect, useState} from 'react'

export default function Registration() {

    const {data: session} = useSession()

    const dispatch = useDispatch()
    const {auth} = useSelector(selectToggle)

    const closeAuth = () => {
        dispatch(toggle({
            authorization: false,
            registration: false
        }))
    }

    useEffect(() => {
        document.body.classList.add('modalScroll')

        return () => {
            document.body.classList.remove('modalScroll')
        }
    })


    const [inputLogin, setInputLogin] = useState('')

    const [inputPass, setInputPass] = useState('')

    const [toggleBlock, setToggleBlock] = useState(false)

    const [animate, setAnimate] = useState(false)


    const buttonClickNext = () => {
        setAnimate(true)
        setTimeout(function () {
            setToggleBlock(true)
        }, 500)
    }

    const buttonClickPop = () => {
        setAnimate(false)
        setTimeout(function () {
            setToggleBlock(false)
        }, 1300)
    }

    const onSubmit = async () => {
        const result = await signIn('credentials', {
            email: inputLogin,
            password: inputPass,
            redirect: false
        })
        await console.log(result)
        await console.log(session?.user.idUser)
        await console.log(session?.user.token)
        // const resProfile = await fetch(`http://localhost:12120/api/profiles/user/${session?.user.idUser}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization : `Bearer ${session?.user.token}`
        //     }
        // })
        // const profile = await resProfile.json()
        // console.log(profile)

        // setListGenres(genres)
    }

    const next = async () => {

    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>{toggleBlock ? inputLogin : 'Регистрация'}</p>
                            <button onClick={() => closeAuth()} className={styles.auth__btnClose}>
                                <VscChromeClose size={20}/>
                            </button>
                        </div>
                        <div className={styles.auth__headerProgress}>
                            <div className={styles.auth__headerProgress_line}
                                 style={animate ? {width: '33%'} : undefined}></div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.form}>
                                <div className={styles.form__blockText} onClick={() => dispatch(toggle({
                                    authorization: true,
                                    registration: false
                                }))}>
                                    <p className={styles.form__title} >Зарегистрируйтесь или нажмите сюда для входа</p>
                                    {!toggleBlock &&
                                        <span className={styles.form__text}>и пользуйтесь сервисом на любом
                                            устройстве
                                        </span>}
                                </div>

                                {!toggleBlock && (
                                    <>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <Input label={'Придумайте имя'}
                                                   onChange={(e) => setInputLogin(e.target.value)}
                                                   type={'text'}
                                                   value={inputLogin}
                                                   login={true}
                                            />
                                        </div>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <Input label={'Введите email'}
                                                   // onChange={(e) => setInputLogin(e.target.value)}
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
                                                Продолжить
                                            </button>
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
                                                <p className={styles.form__title}>Придумайте пароль для входа</p>
                                                <span className={styles.form__text}>Установите пароль для входа через email, минимум 4 символов
                                        </span>
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
                                                    onClick={onSubmit}
                                                    className={inputPass.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                    Продолжить
                                                </button>
                                                <button onClick={next}>вперед</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}