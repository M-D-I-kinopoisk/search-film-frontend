'use client'

import styles from './commentForm.module.scss'

import {RiUserLine} from 'react-icons/ri'

import {useDispatch, useSelector} from 'react-redux'
import {getInputValue, selectFilms} from '@/redux/FilmsSlice'

import {useRef, useState} from 'react'

import {Comment} from '@/components/Film/FilmComments/FilmComments'
import {useSession} from 'next-auth/react'

interface CommentForm {
    comment: Comment
}

const CommentForm = ({comment}: CommentForm) => {
    const [value, setValue] = useState('')
    const {data: session} = useSession()

    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeInputHandler = (event, id) => {
        console.log(id, '100% айдишка комента тоесть ну по идее там где выбрал')
        setValue(event.target.value)


        console.log(comment, 'собственно сам коментарий где происходит эта лабуда')
    }

    const commentFormSubmit = (event) => {
        event.preventDefault()

        setValue('')
        dispatch(getInputValue(value))

        postNewComment()
    }

    async function postNewComment() {
        try {
            const response = await fetch('http://localhost:12120/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    'idFilm': comment.idFilm,
                    'idUser': session.user.idUser,
                    'text': value,
                    'prevId': comment.prevId
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
                <input ref={inputRef} value={value} onChange={(event) => onChangeInputHandler(event, comment.prevId)}
                       className={styles.inputComment} type='text'/>
                <div className={styles.placeholder}>Написать комментарий</div>
            </div>

            <button type='submit'>Отправить</button>
        </form>
    )
}

export default CommentForm