import React from 'react'

import style from './CommentList.module.scss'
import CommentItem from '../CommentItem/CommentItem'

const CommentList: React.FC = () => {
    return (
        <div className={style.comments}>
            <div className={style.commentsTop}>
                <div className={style.commentsTitle}>
                    Комментарии
                </div>
                <div className={style.addCommentButton}>
                    Оставить комментарий
                </div>

            </div>

            <div className={style.commentsItems}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    )
}

export default CommentList