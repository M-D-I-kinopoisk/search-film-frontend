import React, { useState } from 'react'

import style from './Comments.module.scss'
import CommentItem from '../../Comments/CommentItem/CommentItem'
import Image from 'next/image'

type CommentsProps = {
}

const Comments: React.FC<CommentsProps> = () => {
    const [url, setUrl] = useState('comments')

    return (
        <div>
            <div className={style.addCommentBlock}>
                <Image
                    alt='avatar'
                    width={20}
                    height={20}
                    src='/img/avatar.png'
                />
                <input type='text' placeholder='Написать комментарий' />
                <div className={style.buttons}>
                    <button className={style.cancelButton}>Отменить</button>
                    <button disabled>Отправить</button>
                </div>
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