'use client'

import React, {useState} from 'react'

import styles from './Comments.module.scss'
import CommentsItem from './CommentsItem'
import MyModal from '../MyModal/MyModal'
import {useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'

const CommentList = () => {
    const {comments} = useSelector(selectFilms)
    const [isModalOpen, setIsModalOpen] = useState(false)

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [isModalOpen])

    const modalOpenHandler = () => {
        dispatch(setOpenModal({
            modalState: true,
            value: 'comments'
        }))
    }

    return (
        <div className={styles.comments}>
            <div className={styles.commentsTop}>
                <div onClick={() => modalOpenHandler()}
                     className={styles.commentsTitle}>
                    Комментарии
                </div>

                <div onClick={() => modalOpenHandler()}
                     className={styles.addCommentButton}>
                    Оставить комментарий
                </div>
            </div>

            <div className={styles.commentsItems}>
                {comments.map((comment) => (
                    <CommentsItem key={comment.id} comment={comment} openModal={setIsModalOpen}/>
                ))}
            </div>

            <MyModal isModalOpen={isModalOpen}
                     setIsModalOpen={setIsModalOpen}
                     componentName={'comments'}/>
        </div>
    )
}

export default CommentList