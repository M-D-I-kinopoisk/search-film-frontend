import React from 'react'

import styles from './Comments.module.scss'

import { AiOutlineLike } from "react-icons/ai"
import { constants } from 'fs'

type CommentsItemProps = {
    inModal?: any
    openModal?: any
}

const CommentsItem: React.FC<CommentsItemProps> = ({ inModal, openModal }) => {
    const comment = {
        name: 'Анастасия',
        description: `Не имею привычки пересматривать фильмы, 
        но этот смотрела раз 6. Самый любимый!`,

        date: '1 февраля 2019'
    }

    return (
        <>
            {inModal ?
                <div>
                    <div className={styles.modalComment}>
                        <div className={styles.modalInfoHeader}>
                            <div className={styles.modalAvatar}>А</div>
                            <div className={styles.modalName}>{comment.name}</div>
                            <div className={styles.modalDate}>{comment.date}</div>
                            <div className={styles.modalLikes}>
                                <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'} />
                                <span>128</span>
                                <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'} />
                            </div>
                        </div>
                        <div className={styles.modalDescription}>
                            <p>{comment.description}</p>
                        </div>
                    </div>

                    <div className={styles.modalAnswerButton}>
                        Ответить
                    </div>
                </div>
                :
                <div className={styles.commentsItem}>
                    <div className={styles.commentsItemName}>
                        {comment.name}
                    </div>

                    <div onClick={openModal}
                        className={styles.commentsItemDescription}>
                        {comment.description}
                        {comment.description}
                    </div>

                    <div className={styles.commentsItemBottom}>
                        <div className={styles.commentsItemDate}>
                            {comment.date}
                        </div>

                        <div className={styles.commentsItemLikes}>
                            <AiOutlineLike onClick={() => console.log('like')}
                                size={16} fill={'rgba(126,121,143,.72)'} />
                            <span>129</span>
                            <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CommentsItem