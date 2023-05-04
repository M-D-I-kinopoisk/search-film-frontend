import React, { useState } from 'react'

import style from './Comments.module.scss'
import CommentsItem from './CommentsItem'
import MyModal from '../MyModal/MyModal'

const CommentList: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

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

            <div
                className={style.commentsItems}
                onClick={() => setIsVisible(true)}
            >
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
            </div>

            <MyModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                componentName={'comments'}
            />
        </div>
    )
}

export default CommentList