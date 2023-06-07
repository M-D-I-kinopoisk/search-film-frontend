'use client'

import styles from './filmCommentsItem.module.scss'

import {AiOutlineLike} from 'react-icons/ai'

import {CommentsItemProps} from '@/types/components/Film'

const FilmCommentsItem = ({comment}: CommentsItemProps) => {
    const date = new Date(comment.createdAt).toLocaleDateString()

    return (
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
    )
}

export default FilmCommentsItem