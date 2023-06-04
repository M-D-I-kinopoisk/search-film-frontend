'use client'

import styles from './filmModalComment.module.scss'

import {AiOutlineLike} from 'react-icons/ai'

import {Comment} from '@/components/Film/FilmComments/FilmComments'
import {useState} from 'react'
import CommentForm from '@/components/UI/CommentForm/CommentForm'

interface FilmModalComment {
    comment: Comment
}

const FilmModalComment = ({comment}: FilmModalComment) => {
    const [showForm, setShowForm] = useState(false)
    const [showFullText, setShowFullText] = useState(false)

    const date = new Date(comment.createdAt).toLocaleDateString()

    return (
        <>
            <div className={styles.modalInfoHeader}>
                <div className={styles.modalAvatar}>А</div>
                <div className={styles.modalName}>{comment.profile.profileName}</div>
                <div className={styles.modalDate}>{date}</div>
                <div className={styles.modalLikes}>
                    <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                    <span>128</span>
                    <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                </div>
            </div>
            <div className={styles.modalDescription}>
                <p className={showFullText ? styles.fullText : styles.partialText}>{comment.text}</p>
            </div>
            <div className={styles.modalButtonsContainer}>
                {comment.text.length > 100 && (
                    <button className={styles.showMore} onClick={() => setShowFullText(!showFullText)}>
                        {showFullText ? 'Свернуть' : 'Развернуть'}
                    </button>
                )}
                <button onClick={() => setShowForm(!showForm)} className={styles.modalAnswer}>
                    Ответить
                </button>
            </div>
            {showForm && <CommentForm/>}
        </>
    )
}

export default FilmModalComment