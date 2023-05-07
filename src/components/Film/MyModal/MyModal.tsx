import React, { useState } from 'react'

import styles from './MyModal.module.scss'
import Image from 'next/image'
import CommentsItem from '../Comments/CommentsItem'
import AwardsItem from '../Awards/AwardsItem'
import CreatorsItem from '../Creators/CreatorsItem'
import TrailersItem from '../TrailersAndMaterials/TrailersItem'

import { BsChevronRight } from 'react-icons/bs'
import { RiUserLine } from 'react-icons/ri'
import { RxLapTimer } from 'react-icons/rx'
import { AiOutlineLike } from "react-icons/ai"

type MyModalProps = {
    visible?: boolean
    setVisible?: any
    componentName?: any
}

const MyModal: React.FC<MyModalProps> = ({ visible, setVisible, componentName }) => {
    const [active, setAactive] = useState(componentName)

    const links = [
        { title: 'Создатели', value: 'creators' },
        { title: 'Комментарии', value: 'comments' },
        { title: 'Трейлеры', value: 'trailers' },
        { title: 'Награды', value: 'awards' }
    ]

    const creatorsTestItems = [
        { title: 'Режжисеры', items: [1, 2, 3, 4, 5] },
        { title: 'Актеры', items: [1, 2, 3, 4, 5] },
        { title: 'Продьюсеры', items: [1, 2, 3, 4, 5] }
    ]

    const testItems = [1, 2, 3, 4, 5]

    const closeModal = () => {
        setVisible(false)
        setAactive(componentName)
        document.body.classList.remove('modalScroll')
    }

    return (
        <>
            {visible &&
                <div className={styles.modal}>
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContainer}>
                            <div onClick={() => closeModal()}
                                className={styles.backLink}>
                                <BsChevronRight size={22} />
                                <span>К фильму </span>
                            </div>

                            <div className={styles.modalWrapper}>
                                <div className={styles.modalInfo}>
                                    <div className={styles.title}>
                                        <span> 1+1 (Фильм 2011)</span>
                                    </div>

                                    <div>
                                        <ul className={styles.navbar}>
                                            {links.map((link) =>
                                                <li key={link.value}
                                                    className={active === link.value
                                                        ? styles.active : ''}
                                                    onClick={() => setAactive(link.value)}>
                                                    {link.title}
                                                </li>
                                            )}
                                        </ul>

                                        <div className={styles.line}></div>
                                    </div>

                                    {active === 'creators' &&
                                        <div className={styles.creators}>
                                            {creatorsTestItems.map((elem) =>
                                                <div key={elem.title}>
                                                    <div className={styles.positions}>
                                                        {elem.title}
                                                    </div>

                                                    <div className={styles.directorsItems}>
                                                        {elem.items.map((el) =>
                                                            <CreatorsItem key={el}
                                                                inModal={true} />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    }

                                    {active === 'comments' &&
                                        <div>
                                            <div className={styles.addCommentBlock}>
                                                <RiUserLine size={24} />

                                                <input type='text'
                                                    placeholder='Написать комментарий' />

                                                <div className={styles.buttons}>
                                                    <button
                                                        className={styles.cancelButton}>
                                                        Отменить
                                                    </button>
                                                    <button disabled>Отправить</button>
                                                </div>
                                            </div>

                                            <div>
                                                {testItems.map((el) =>
                                                    <CommentsItem key={el}
                                                        inModal={true} />
                                                )}
                                                    <AiOutlineLike size={20} fill='#fff'/>

                                            </div>

                                            <div className={styles.showMoreButton}>
                                                Показать еще
                                            </div>
                                        </div>
                                    }

                                    {active === 'trailers' &&
                                        <div className={styles.trailers}>
                                            {testItems.map((el) =>
                                                <TrailersItem key={el}
                                                    inModal={true} />
                                            )}
                                        </div>
                                    }

                                    {active === 'awards' &&
                                        <div className={styles.awards}>
                                            {testItems.map((el) =>
                                                <AwardsItem key={el}
                                                    inModal={true} />
                                            )}
                                        </div>
                                    }
                                </div>

                                <div className={styles.filmInfo}>
                                    <Image alt='Фильм'
                                        width={128}
                                        height={195}
                                        src='https://thumbs.dfs.ivi.ru/storage2/contents/6/1/0ceca03c51c3d38f34bdf3fd0dd2c8.jpg/128x196/?q=85' />

                                    <div className={styles.ball}>
                                        <span>8,9</span>
                                        <div className={styles.graphs}>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div className={styles.backBar}></div>
                                                <div className={styles.valueBar}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.information}>
                                        <span>2011, Франция, Драмы</span>
                                    </div>

                                    <div className={styles.duration}>
                                        <RxLapTimer size={16} />
                                        <span>112 минут</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MyModal