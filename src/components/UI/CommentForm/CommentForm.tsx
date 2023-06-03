import React from 'react'
import styles from './commentForm.module.scss'
import {RiUserLine} from 'react-icons/ri'

const CommentForm = () => {
    return (
        <form className={styles.formComment}>
            <RiUserLine size={24}/>

            <div className={styles.inputContainer}>
                <input className={styles.inputComment} type='text'/>
                <div className={styles.placeholder}>Написать комментарий</div>
            </div>

            <button type='submit' disabled>Отправить</button>
        </form>
    )
}

export default CommentForm