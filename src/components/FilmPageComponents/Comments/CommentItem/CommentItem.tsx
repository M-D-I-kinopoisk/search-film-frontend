import React from 'react'

import style from './CommentItem.module.scss'

const CommentItem: React.FC = () => {
    return (
        <div className={style.commentsItem}>
            <div className={style.commentsItemName}>
                Анастасия
            </div>
            <div className={style.commentsItemDescription}>
                Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!
                Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!
            </div>
            <div className={style.commentsItemBottom}>
                <div className={style.commentsItemDate}>
                    1 февраля 2019
                </div>
                <div className={style.commentsItemLikes}>
                    <img src='/img/like.png' />
                    <span>36</span>
                    <img src='/img/dislike.png' />
                </div>
            </div>
        </div>
    )
}

export default CommentItem