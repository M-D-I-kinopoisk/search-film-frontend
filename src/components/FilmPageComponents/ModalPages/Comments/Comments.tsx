import React, { useState } from 'react'

import style from './Comments.module.scss'
import CommentItem from '../../Comments/CommentItem/CommentItem'

type CommentsProps = {
}

const Comments: React.FC<CommentsProps> = () => {
    const [url, setUrl] = useState('comments')

    return (
        <div>
            <div className={style.addCommentBlock}>
                <img src='/img/avatar.png' />
                <input type='text' placeholder='Написать комментарий' />
                <button disabled>Отправить</button>
            </div>
            <div className={style.items}>
                <CommentItem inModal={true} />
                <CommentItem inModal={true} />
                <CommentItem inModal={true} />
                <CommentItem inModal={true} />
                <CommentItem inModal={true} />
                <CommentItem inModal={true} />
            </div>
            <div className={style.showMoreButton}>
                Показать еще
            </div>
        </div>
    )
}

export default Comments