'use client'

import styles from './filmCommentsItem.module.scss'

import {AiOutlineLike, AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

import {Comment} from '@/components/Film/FilmComments/FilmComments'
import {useEffect, useRef, useState} from 'react'
import {funcDeclination} from '@/utils/funcDeclination'
import FilmModalComment from '@/components/Film/FilmComments/FilmModalComment/FilmModalComment'

interface CommentsItemProps {
    inModal?: any,
    comment: Comment
}

const FilmCommentsItem = ({inModal, comment}: CommentsItemProps) => {
    const date = new Date(comment.createdAt).toLocaleDateString()

    const [showCommentAnswers, setShowCommentAnswers] = useState(false)
    const [showChildrenAnswers, setShowChildrenAnswers] = useState(true)
    const [childrenComments, setChildrenComments] = useState({})

    const [activeComment, setActiveComment] = useState(null)

    const [changeToggle, setChangeToggle] = useState<number>(-1)

    const onClickButton = () => {
        setShowCommentAnswers(!showCommentAnswers)

        showCommentAnswerHandler()
    }



    const onClickButtonChildren = (inx) => {
        if (inx === changeToggle) {
            setChangeToggle(-1)

        } else {
            setChangeToggle(inx)
            // setShowChildrenAnswers(!showChildrenAnswers)
            showCommentAnswerHandler()
        }
    }

    async function showCommentAnswerHandler() {
        try {
            const response = await fetch(`http://localhost:12120/api/comments/comment/${comment.id}`, {
                next: {revalidate: 1}
            })
            const data = await response.json()

            setChildrenComments(data)

        } catch (e) {
            console.log('Произошла ошибка: ', e)
        }
    }

    return (
        <>
            {inModal ?
                <li className={styles.modalComment}>
                    <div>
                        <FilmModalComment comment={comment}/>
                        {(comment.childrenCount > 0) &&
                            <>
                                <button className={styles.answer} onClick={() => onClickButton()}>
                                    {!showCommentAnswers ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                                    {funcDeclination(comment.childrenCount, ['ответ', 'ответа', 'ответов'])}
                                </button>
                                {showCommentAnswers  && childrenComments['children']?.map((comment, inx) => (
                                    <div key={comment.id} className={styles.childrenComment}>
                                        <>
                                            <FilmModalComment comment={comment}/>
                                            {(comment.children.length > 0) &&
                                                <>
                                                    {<button className={styles.answer}
                                                             onClick={() => onClickButtonChildren(inx)}>
                                                        {!showChildrenAnswers ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                                                        {funcDeclination(comment.children.length, ['ответ', 'ответа', 'ответов'])}
                                                    </button>}
                                                    {showChildrenAnswers && inx === changeToggle && comment.children.map((comment) => (
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