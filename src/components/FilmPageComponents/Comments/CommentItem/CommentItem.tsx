import React from 'react'

import style from './CommentItem.module.scss'

type CommentItemProps = {
    inModal?: any
}

const CommentItem: React.FC<CommentItemProps> = ({ inModal }) => {
    let comment = {
        name: 'Анастасия',
        description: 'Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!',
        date: '1 февраля 2019'
    }

    return (
        <>
            {inModal ?
                <div>
                    <div className={style.modalComment}>
                        <div className={style.modalAvatar}>
                            А
                        </div>

                        <div className={style.modalInfo}>
                            <div className={style.modalInfoHeader}>
                                <div className={style.modalName}>{comment.name}</div>
                                <div className={style.modalDate}>{comment.date}</div>
                            </div>
                            <div className={style.modalDescription}>
                                <p>
                                    {comment.description}
                                </p>
                            </div>
                        </div>

                        <div className={style.modalLikes}>
                            <img src='/img/like.png' />
                            <span>128</span>
                            <img src='/img/like.png' />
                        </div>
                    </div>
                    <div className={style.modalAnswerButton}>
                        Ответить
                    </div>
                </div>

                :

                <div className={style.commentsItem}>
                    <div className={style.commentsItemName}>
                        {comment.name}
                    </div>
                    <div className={style.commentsItemDescription}>
                        {comment.description}
                        {comment.description}

                    </div>
                    <div className={style.commentsItemBottom}>
                        <div className={style.commentsItemDate}>
                            {comment.date}
                        </div>
                        <div className={style.commentsItemLikes}>
                            <img src='/img/like.png' />
                            <span>36</span>
                            <img src='/img/dislike.png' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CommentItem