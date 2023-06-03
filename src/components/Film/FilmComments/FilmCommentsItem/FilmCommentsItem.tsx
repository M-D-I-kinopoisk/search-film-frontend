'use client'

import styles from './filmCommentsItem.module.scss'

import {AiOutlineLike} from 'react-icons/ai'

import {Comment} from '@/components/Film/FilmComments/FilmComments'
import {useState} from 'react'

interface CommentsItemProps {
    inModal?: any,
    comment: Comment
}

const FilmCommentsItem = ({inModal, comment}: CommentsItemProps) => {
    const date = new Date(comment.createdAt).toLocaleDateString()
    const [showFullText, setShowFullText] = useState(false)


    const addNewCommentHandler = () => {
        // http://localhost:12120/api
    }

    return (
        <>
            {inModal ?
                <li className={styles.modalComment}>
                    <div>
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
                         <button onClick={() => addNewCommentHandler()} className={styles.modalAnswer}>
                             Ответить
                         </button>
                     </div>
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