import styles from './Comments.module.scss'

import {AiOutlineLike} from 'react-icons/ai'
import {constants} from 'fs'
import {Comment} from '@/components/Film/InfoContent/InfoContent'

interface CommentsItemProps {
    inModal?: any,
    openModal?: any,
    comment: Comment
}

const CommentsItem = ({inModal, openModal, comment}: CommentsItemProps) => {

    return (
        <>
            {inModal ?
                <div>
                    <div className={styles.modalComment}>
                        <div className={styles.modalInfoHeader}>
                            <div className={styles.modalAvatar}>А</div>
                            <div className={styles.modalName}>{comment.profile.profileName}</div>
                            <div className={styles.modalDate}>{}</div>
                            <div className={styles.modalLikes}>
                                <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                                <span>128</span>
                                <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                            </div>
                        </div>
                        <div className={styles.modalDescription}>
                            <p>{comment.text}</p>
                        </div>
                    </div>

                    <div className={styles.modalAnswerButton}>
                        Ответить
                    </div>
                </div>
                :
                <div className={styles.commentsItem}>
                    <div className={styles.commentsItemName}>
                        {comment.profile.profileName}
                    </div>

                    <div onClick={openModal}
                         className={styles.commentsItemDescription}>
                        {comment.text}
                    </div>

                    <div className={styles.commentsItemBottom}>
                        <div className={styles.commentsItemDate}>
                            {}
                        </div>

                        <div className={styles.commentsItemLikes}>
                            <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                            <span>129</span>
                            <AiOutlineLike size={16} fill={'rgba(126,121,143,.72)'}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CommentsItem