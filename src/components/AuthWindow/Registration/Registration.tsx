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

    const [inputName, setInputName] = useState('')

    const [inputEmail, setInputEmail] = useState('')

    const [inputPasswords, setInputPasswords] = useState({pass1 : '', pass2: ''})

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

    const registration = async (nameProfile, email, passwords) => {
        setAnimate(false)
        console.log(email, passwords, nameProfile)
        const reqProfile = await fetch('http://localhost:12120/api/profiles/reg/user', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
                'password': passwords,
                'profileName': nameProfile
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const profile = await reqProfile.json()
        console.log(profile)

    }


    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>{toggleBlock ? inputEmail : 'Регистрация'}</p>
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
                                                   onChange={(e) => setInputName(e.target.value)}
                                                   type={'text'}
                                                   value={inputName}
                                                   login={true}
                                            />
                                        </div>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <Input label={'Введите email'}
                                                   onChange={(e) => setInputEmail(e.target.value)}
                                                   type={'text'}
                                                   value={inputEmail}
                                                   login={true}
                                            />
                                        </div>
                                        <div
                                            className={animate ? `${styles.form__btnContainer} ${styles.btn__animate}` : `${styles.form__btnContainer}`}>
                                            <button
                                                type={'button'}
                                                onClick={buttonClickNext}
                                                className={inputEmail.length > 0 && inputName.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
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
                                                <p className={styles.form__title}>{inputEmail}</p>
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
                                                       onChange={(e) => setInputPasswords({...inputPasswords, pass1 : e.target.value})}
                                                       type={'password'}
                                                       password={true}
                                                       value={inputPasswords.pass1}
                                                />
                                            </div>
                                            <div className={styles.form__LoginContainer}>
                                                <Input label={'Подтвердите пароль'}
                                                       onChange={(e) => setInputPasswords({...inputPasswords, pass2 : e.target.value})}
                                                       type={'password'}
                                                       password={true}
                                                       value={inputPasswords.pass2}
                                                />
                                            </div>
                                            <div className={styles.form__btnContainer}>
                                                <button
                                                    onClick={() => registration(inputName, inputEmail, inputPasswords.pass1)}
                                                    className={inputPasswords.pass1 === inputPasswords.pass2 &&  inputPasswords.pass1.length > 3 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                    Зарегистрироваться
                                                </button>
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