import React from 'react'

import styles from './Comments.module.scss'
import Image from 'next/image'

type CommentsItemProps = {
    inModal?: any
}

const CommentsItem: React.FC<CommentsItemProps> = ({ inModal }) => {
    let comment = {
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
                                <Image alt='Like'
                                    width={16}
                                    height={16}
                                    src='/img/like.png' />

                                <span>128</span>

                                <Image alt='Like'
                                    width={16}
                                    height={16}
                                    src='/img/like.png' />
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

                    <div className={styles.commentsItemDescription}>
                        {comment.description}
                        {comment.description}
                    </div>

                    <div className={styles.commentsItemBottom}>
                        <div className={styles.commentsItemDate}>
                            {comment.date}
                        </div>

                        <div className={styles.commentsItemLikes}>
                            <Image alt='Like'
                                width={16}
                                height={16}
                                src='/img/like.png' />

                            <span>36</span>

                            <Image alt='Like'
                                width={16}
                                height={16}
                                src='/img/like.png' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CommentsItem