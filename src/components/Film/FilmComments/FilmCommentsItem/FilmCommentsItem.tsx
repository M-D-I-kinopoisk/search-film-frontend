'use client'

import styles from './filmCommentsItem.module.scss'

import {AiOutlineLike, AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

import {Comment} from '@/components/Film/FilmComments/FilmComments'
import {useState} from 'react'
import {funcDeclination} from '@/utils/funcDeclination'
import FilmModalComment from '@/components/Film/FilmComments/FilmModalComment/FilmModalComment'

interface CommentsItemProps {
    inModal?: any,
    comment: Comment
}

const FilmCommentsItem = ({inModal, comment}: CommentsItemProps) => {
    const date = new Date(comment.createdAt).toLocaleDateString()

    const [showCommentAnswers, setShowCommentAnswers] = useState(false)
    const [childrenComments, setChildrenComments] = useState({})

    async function showCommentAnswerHandler() {
        try {
            const response = await fetch(`http://localhost:12120/api/comments/comment/${comment.id}`)
            const data = await response.json()

            setChildrenComments(data)

        } catch (e) {
            console.log(e)
        }

        setShowCommentAnswers(!showCommentAnswers)
    }

    return (
        <>
            {inModal ?
                <li className={styles.modalComment}>
                    <div>
                        <FilmModalComment comment={comment}/>
                        {(comment.childrenCount > 0) &&
                            <>
                                <button className={styles.answer} onClick={() => showCommentAnswerHandler()}>
                                    {!showCommentAnswers ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                                    {funcDeclination(comment.childrenCount, ['ответ', 'ответа', 'ответов'])}
                                </button>
                                {showCommentAnswers && childrenComments['children'].map((comment) => (
                                    <div key={comment.id} className={styles.childrenComment}>
                                        <>
                                            <FilmModalComment comment={comment}/>
                                            {(comment.children.length > 0) &&
                                                <>
                                                    <button className={styles.answer} onClick={() => showCommentAnswerHandler()}>
                                                        {!showCommentAnswers ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                                                        {funcDeclination(comment.children.length, ['ответ', 'ответа', 'ответов'])}
                                                    </button>
                                                    {showCommentAnswers && comment.children.map((comment) => (
                                                        <div key={comment.id} className={styles.childrenComment}>
                                                            <FilmModalComment comment={comment}/>
                                                        </div>
                                                    ))}
                                                </>
                                            }
                                        </>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </li>
                :
                <li className={styles.commentsItem}>
                    <div className={styles.commentsItemName}>
                        {comment.profile.profileName}
                    </div>

                    <div className={styles.commentsItemDescription}>
                        {comment.text}
                    </div>

                    <div className={styles.commentsItemBottom}>
                        <div className={styles.commentsItemDate}>
                            {date}
                        </div>

                        <div className={styles.commentsItemLikes}>
                            <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                            <span>129</span>
                            <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                        </div>
                    </div>
                </li>
            }
        </>
    )
}

export default FilmCommentsItem