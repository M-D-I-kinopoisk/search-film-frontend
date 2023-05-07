import {useState, useRef, useEffect} from 'react'

import {VscChromeClose} from 'react-icons/vsc'
import {TbPencil} from 'react-icons/tb'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

import styles from './auth.module.scss'

const Auth = () => {

    useEffect(() => {
        document.body.classList.add('modalScroll')

        return () => {
            document.body.classList.remove('modalScroll')
        }
    })


    const [inputLogin, setInputLogin] = useState('')

    const [inputPass, setInputPass] = useState('')

    const [toggleBlock, setToggleBlock] = useState(false)

    const [passToggle, setPassToggle] = useState(false)

    const [animate, setAnimate] = useState(false)


    const inputElement = useRef(null)
    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus()
        }
    }, [toggleBlock, passToggle])


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


    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>{toggleBlock ? inputLogin : 'Вход или регистрация'}</p>
                            <button className={styles.auth__btnClose}>
                                <VscChromeClose size={20}/>
                            </button>
                        </div>
                        <div className={styles.auth__headerProgress}>
                            <div className={styles.auth__headerProgress_line}
                                 style={animate ? {width: '33%'} : null}></div>
                        </div>
                        <div className={styles.container}>
                            <form className={styles.form}>
                                <div className={styles.form__blockText}>
                                    <p className={styles.form__title}>Войдите или зарегистрируйтесь</p>
                                    {!toggleBlock &&
                                        <span className={styles.form__text}>чтобы пользоваться сервисом на любом
                                            устройстве
                                        </span>}
                                </div>

                                {!toggleBlock && (
                                    <>
                                        <div
                                            className={animate ? `${styles.form__LoginContainer} ${styles.btn__animate}` : `${styles.form__LoginContainer}`}>
                                            <div className={styles.inputText__body}>
                                                <input ref={inputElement} value={inputLogin}
                                                       onChange={(e) => setInputLogin(e.target.value)}
                                                       type={'text'}
                                                       className={styles.inputText__input}/>
                                                <label className={styles.inputText__placeholder}>
                                                    Через email или телефон
                                                </label>
                                            </div>
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
                                    (<div className={!animate ? `${styles.formTwo__animate}` : null}>
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
                                                <span className={styles.form__text}>установите пароль для входа через email, минимум 6 символов
                                        </span>
                                            </div>
                                            <div className={styles.form__LoginContainer}>
                                                <div className={styles.inputText__body}>
                                                    <input ref={inputElement}
                                                           type={!passToggle ? 'password' : 'text'}
                                                           onChange={(e) => setInputPass(e.target.value)}
                                                           className={styles.inputText__input}/>
                                                    <label className={styles.inputText__placeholder}>
                                                        Введите пароль
                                                    </label>
                                                    <div className={styles.password__toggle}
                                                         onClick={() => setPassToggle(!passToggle)}>
                                                        {passToggle
                                                            ? <AiOutlineEye size={20}/>
                                                            : <AiOutlineEyeInvisible size={20}/>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.form__btnContainer}>
                                                <button
                                                    className={inputPass.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                                    Продолжить
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth