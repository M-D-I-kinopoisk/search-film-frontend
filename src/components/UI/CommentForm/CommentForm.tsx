'use client'

import styles from './commentForm.module.scss'

import {RiUserLine} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import {getInputValue} from '@/redux/FilmsSlice'
import {useRef, useState} from 'react'

const CommentForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const onChangeInputHandler = (event) => {
        setValue(event.target.value)
    }

    const commentFormSubmit = () => {
        setValue('')
        dispatch(getInputValue(value))
    }

    return (
        <form className={styles.formComment} onSubmit={() => commentFormSubmit()}>
            <RiUserLine size={24}/>

            <div className={styles.inputContainer}>
                <input ref={inputRef} value={value} onChange={(event) => onChangeInputHandler(event)}
                       className={styles.inputComment} type='text'/>
                <div className={styles.placeholder}>Написать комментарий</div>
            </div>

            <button type='submit'>Отправить</button>
        </form>
    )
}

export default CommentForm