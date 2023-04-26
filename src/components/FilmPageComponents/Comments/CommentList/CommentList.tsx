import React, { useState } from 'react'

import style from './CommentList.module.scss'
import CommentItem from '../CommentItem/CommentItem'
import Comments from '@/components/FilmPageComponents/ModalPages/Comments/Comments'
import MyModal from '../../MyModal/MyModal'

const CommentList: React.FC = () => {
    const [active, setActive] = useState('none')

    return (
        <div className={style.comments}>
            <div className={style.commentsTop}>
                <div
                    className={style.commentsTitle}>
                    Комментарии
                </div>

                <div className={style.addCommentButton}>
                    Оставить комментарий
                </div>

            </div>

            <div className={style.commentsItems}
                onClick={() => setActive('block')}

            >
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
            <MyModal
                active={active}
                setActive={setActive}
                url={'comments'}
            >
                {<Comments />}
            </MyModal>
        </div>
    )
}

export default CommentList