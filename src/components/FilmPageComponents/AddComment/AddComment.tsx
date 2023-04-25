import React from 'react'

import style from './AddComment.module.scss'

type AddCommentProps = {

}

const AddComment: React.FC<AddCommentProps> = () => {
    return (
        <div className={style.addCommentBlock}>
            <img src='/img/avatar.png' />
            <input type='text' placeholder='Написать комментарий' />
            <button disabled>Отправить</button>
        </div>
    )
}

export default AddComment