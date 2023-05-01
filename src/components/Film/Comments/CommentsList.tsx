import React, { useState } from 'react'

import styles from './Comments.module.scss'
import CommentsItem from './CommentsItem'
import MyModal from '../MyModal/MyModal'

const CommentList: React.FC = () => {
    const [visible, setVisible] = useState(false)

    let items = [1, 2, 3, 4, 5, 6]

    const setModalScroll = () => {
        setVisible(true)
        document.body.classList.add('modalScroll')
    }

    return (
        <div className={styles.comments}>
            <div className={styles.commentsTop}>
                <div className={styles.commentsTitle}>
                    Комментарии
                </div>

                <div className={styles.addCommentButton}>
                    Оставить комментарий
                </div>
            </div>

            <div className={styles.commentsItems}
                onClick={() => setModalScroll()}>
                {items.map((elem) =>
                    <CommentsItem key={elem}/>
                )}
            </div>

            <MyModal visible={visible}
                setVisible={setVisible}
                componentName={'comments'} />
        </div>
    )
}

export default CommentList