'use client'

import styles from './filmModalComments.module.scss'

import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

import {funcDeclination} from '@/utils/funcDeclination'

import {useState} from 'react'

import {Comment} from '@/components/Film/FilmComments/FilmComments'

import FilmModalCommentItem from './FilmModalCommentItem/FilmModalCommentItem'

interface FilmModalCommentProps {
    inModal: boolean,
    comment: Comment
}

const FilmModalComments = ({inModal, comment}: FilmModalCommentProps) => {

    const [showCommentAnswers, setShowCommentAnswers] = useState(false)
    const [showChildrenAnswers, setShowChildrenAnswers] = useState(false)
    const [childrenComments, setChildrenComments] = useState({})

    const [changeToggle, setChangeToggle] = useState(-1)

    const onClickButton = () => {
        setShowCommentAnswers(!showCommentAnswers)

        showCommentAnswerHandler()
    }

    const onClickButtonChildren = (index) => {

        if (index === changeToggle) {
            setShowChildrenAnswers(!showChildrenAnswers)
        } else {
            setChangeToggle(index)
            setShowChildrenAnswers(true)
        }

        showCommentAnswerHandler()
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
            {inModal && <li className={styles.modalComment}>
                <div>
                    <FilmModalCommentItem comment={comment}/>
                    {(comment.childrenCount > 0) &&
                        <>
                            <button className={styles.answer} onClick={() => onClickButton()}>
                                {!showCommentAnswers ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                                {funcDeclination(comment.childrenCount, ['ответ', 'ответа', 'ответов'])}
                            </button>

                            {showCommentAnswers && childrenComments['children']?.map((comment, index) => (
                                <div key={comment.id} className={styles.childrenComment}>
                                    <FilmModalCommentItem comment={comment}/>
                                    {(comment.children.length > 0) &&
                                        <>
                                            <button className={styles.answer}
                                                    onClick={() => onClickButtonChildren(index)}>
                                                {showChildrenAnswers && index === changeToggle ?
                                                    <AiFillCaretUp/> : <AiFillCaretDown/>}
                                                {funcDeclination(comment.children.length, ['ответ', 'ответа', 'ответов'])}
                                            </button>
                                            {showChildrenAnswers && index === changeToggle && comment.children.map((comment) => (
                                                <div key={comment.id} className={styles.childrenComment}>
                                                    <FilmModalCommentItem comment={comment}/>
                                                </div>
                                            ))}
                                        </>
                                    }
                                </div>
                            ))}
                        </>
                    }
                </div>
            </li>
            }
        </>
    )
}

export default FilmModalComments