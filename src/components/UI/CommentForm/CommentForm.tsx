'use client'

import styles from './commentForm.module.scss'

import {RiUserLine} from 'react-icons/ri'

import {ChangeEvent, useRef, useState} from 'react'

import {useSession} from 'next-auth/react'

import {CommentFormProps} from '@/types/components/UI/CommentForm'

const CommentForm = ({comment}: CommentFormProps) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const {data: session} = useSession()

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const commentFormSubmit = (event) => {
        event.preventDefault()

        setValue('')

        postNewComment()
    }

    async function postNewComment() {
        try {
            const response = await fetch('http://localhost:12120/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    'idFilm': comment.idFilm,
                    'idUser': session?.user.idUser,
                    'text': value,
                    'prevId': comment.id
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user.token}`
                },
            })

            return response.json()
        } catch (e) {
            console.log('Произошла ошибка: ', e)

            throw e
        }
    }

    return (
        <form className={styles.formComment} onSubmit={(event) => commentFormSubmit(event)}>
            <RiUserLine size={24}/>

            <div className={styles.inputContainer}>
                <input ref={inputRef} value={value} onChange={(event) => onChangeInput(event)}
                       className={styles.inputComment} type='text'/>
                <div className={styles.placeholder}>Написать комментарий</div>
            </div>

            <button type='submit'>Отправить</button>
        </form>
    )
}

export default CommentForm