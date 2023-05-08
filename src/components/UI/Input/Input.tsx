import {FC, ReactNode, useEffect, useRef, useState} from 'react'

import {BiSearch} from 'react-icons/bi'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {RiUser6Line} from 'react-icons/ri'

import styles from './input.module.scss'

export interface InputProps {
    label: string,
    onChange?: (e) => void,
    type: string,
    children?: ReactNode,
    value?: any,
    search?: boolean,
    login?: boolean,
    password?: boolean
}

export const Input: FC<InputProps> = ({
                                          label,
                                          onChange, type,
                                          children,
                                          value,
                                          login,
                                          password,
                                          search
                                      }) => {

    const [passToggle, setPassToggle] = useState(false)

    const inputElement = useRef(null)
    useEffect(() => {
        console.log(inputElement.current)
        if (inputElement.current) {
            inputElement.current.focus()
        }
    }, [inputElement])

    return (
        <div className={styles.inputBody}>
            {login &&
                <div className={styles.loginIcon}>
                    <RiUser6Line size={20}/>
                </div>}
            <input
                style={login ? {paddingLeft: '33px'} : null}
                ref={inputElement}
                value={value}
                onChange={onChange}
                type={passToggle ? 'text' : type}
                className={styles.input}/>
            <label
                style={login ? {paddingLeft: '20px'} : null}
                className={value?.length > 0 ? `${styles.label} ${styles.inputNotEmpty}` : styles.label}>
                {label}
            </label>
            {search && <div className={styles.searchIcon}>
                <BiSearch size={20}/>
            </div>}
            {password &&
                <div className={styles.passwordIcon}
                     onClick={() => setPassToggle(!passToggle)}>
                    {passToggle
                        ? <AiOutlineEye size={20}/>
                        : <AiOutlineEyeInvisible size={20}/>}
                </div>}
        </div>)
}