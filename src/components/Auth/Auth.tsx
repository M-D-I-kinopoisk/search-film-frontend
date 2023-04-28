import styles from './auth.module.scss'

import {VscChromeClose} from 'react-icons/vsc'
import {RiUser6Line} from 'react-icons/ri'
import {useState, useRef, useEffect} from 'react'
import React from 'react'

const Auth = () => {


    const [inputValue, setInputValue] = useState('')
    console.log(inputValue.length)


    const inputElement = useRef(null)
    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus()
        }
    }, [])


    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay}>
                <div className={styles.modalScroll}>
                    <div className={styles.auth}>
                        <div className={styles.auth__header}>
                            <p className={styles.auth__headerText}>Вход или регистрация</p>
                            <button className={styles.auth__btnClose}>
                                <VscChromeClose size={20}/>
                            </button>
                        </div>
                        <div className={styles.container}>
                            <form className={styles.form}>
                                <div className={styles.form__container}>
                                    <div className={styles.inputText__body}>
                                        {/*<RiUser6Line size={20}/>*/}
                                        <input ref={inputElement} value={inputValue}
                                               onChange={(e) => setInputValue(e.target.value)}
                                               type={'text'}
                                               className={styles.inputText__input} autoFocus/>
                                        <span>123423423442</span>
                                        <label className={styles.inputText__placeholder}>
                                            Через email или телефон
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.form__container}>
                                    <button
                                        className={inputValue.length > 0 ? `${styles.form__btn} ${styles.form__btnActive}` : `${styles.form__btn}`}>
                                        Продолжить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth