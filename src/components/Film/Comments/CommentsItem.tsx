import React from 'react'

import style from './Comments.module.scss'
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
                    <div className={style.modalComment}>
                        <div className={style.modalInfoHeader}>
                            <div className={style.modalAvatar}>А</div>
                            <div className={style.modalName}>{comment.name}</div>
                            <div className={style.modalDate}>{comment.date}</div>
                            <div className={style.modalLikes}>
                                <Image
                                    alt='Like'
                                    width={16}
                                    height={16}
                                    src='/img/like.png'
                                />

                                <span>128</span>

                                <Image
                                    alt='Like'
                                    width={16}
                                    height={16}
                                    src='/img/like.png'
                                />
                            </div>
                        </div>

                        <div className={style.modalDescription}>
                            <p>{comment.description}</p>
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
                            <Image
                                alt='Like'
                                width={16}
                                height={16}
                                src='/img/like.png'
                            />

                            <span>36</span>

                            <Image
                                alt='Like'
                                width={16}
                                height={16}
                                src='/img/like.png'
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CommentsItem