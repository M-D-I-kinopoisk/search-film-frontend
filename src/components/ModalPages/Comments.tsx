import React, { useState } from 'react'

import style from '../../scss/pages/comments.module.scss'
import CommentItem from '../FilmPageComponents/Comments/CommentItem/CommentItem'
import AddComment from '../FilmPageComponents/AddComment/AddComment'

type CommentsProps = {
}

const Comments: React.FC<CommentsProps> = () => {
    const [url, setUrl] = useState('comments')

    return (
        <div>
            <AddComment />
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