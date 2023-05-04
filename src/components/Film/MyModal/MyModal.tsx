import React, { useState } from 'react'

import style from './MyModal.module.scss'
import Image from 'next/image'
import CommentsItem from '../Comments/CommentsItem'
import AwardsItem from '../Awards/AwardsItem'
import CreatorsItem from '../Creators/CreatorsItem'
import TrailersItem from '../TrailersAndMaterials/TrailersItem'

type MyModalProps = {
    isVisible?: boolean
    setIsVisible?: any
    componentName?: any
}

const MyModal: React.FC<MyModalProps> = ({ isVisible, setIsVisible, componentName }) => {
    let links = [
        { title: 'Создатели', value: 'creators' },
        { title: 'Комментарии', value: 'comments' },
        { title: 'Трейлеры', value: 'trailers' },
        { title: 'Награды', value: 'awards' }
    ]

    const [activeComponent, setAactiveComponent] = useState(componentName)

    let setActiveLink = (value) => {
        setAactiveComponent(value)
    }

    const closeModal = () => {
        setIsVisible(false)
        setAactiveComponent(componentName)
    }

    return (
        <>
            {
                isVisible &&
                <div className={style.modal}>
                    <div className={style.modalContainer}>
                        <div
                            onClick={() => closeModal()}
                            className={style.backLink}
                        >
                            <Image
                                alt='Назад'
                                width={22}
                                height={22}
                                src='/img/left-arrow.png'
                            />
                            <span>К фильму</span>
                        </div>

                        <div className={style.modalWrapper}>
                            <div className={style.left}>
                                <div className={style.title}>
                                    <span> 1+1 (Фильм 2011)</span>
                                </div>

                                <div>
                                    <ul className={style.navbar}>
                                        {links.map((link) =>
                                            <li key={link.value}
                                                className={activeComponent === link.value ?
                                                    style.active :
                                                    ''
                                                }
                                                onClick={() => setActiveLink(link.value)}
                                            >
                                                {link.title}
                                            </li>
                                        )}
                                    </ul>

                                    <div className={style.line}></div>
                                </div>

                                {activeComponent === 'creators' &&
                                    <div className={style.creators}>
                                        <div className={style.positions}>
                                            Режжисеры
                                        </div>

                                        <div className={style.directorsItems}>
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                        </div>

                                        <div className={style.positions}>
                                            Актеры
                                        </div>

                                        <div className={style.directorsItems}>
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                        </div>

                                        <div className={style.positions}>
                                            Продьюсеры
                                        </div>

                                        <div className={style.directorsItems}>
                                            <CreatorsItem inModal={true} />
                                            <CreatorsItem inModal={true} />
                                        </div>
                                    </div>
                                }

                                {activeComponent === 'comments' &&
                                    <div>
                                        <div className={style.addCommentBlock}>
                                            <Image
                                                alt='avatar'
                                                width={20}
                                                height={20}
                                                src='/img/avatar.png'
                                            />

                                            <input
                                                type='text'
                                                placeholder='Написать комментарий'
                                            />

                                            <div className={style.buttons}>
                                                <button className={style.cancelButton}>Отменить</button>
                                                <button disabled>Отправить</button>
                                            </div>
                                        </div>

                                        <div className={style.items}>
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                            <CommentsItem inModal={true} />
                                        </div>

                                        <div className={style.showMoreButton}>
                                            Показать еще
                                        </div>
                                    </div>
                                }

                                {activeComponent === 'trailers' &&
                                    <div className={style.trailers}>
                                        <TrailersItem inModal={true} />
                                        <TrailersItem inModal={true} />
                                        <TrailersItem inModal={true} />
                                    </div>
                                }
                                
                                {activeComponent === 'awards' &&
                                    <div className={style.awards}>
                                        <AwardsItem inModal={true} />
                                        <AwardsItem inModal={true} />
                                        <AwardsItem inModal={true} />
                                        <AwardsItem inModal={true} />
                                    </div>
                                }
                            </div>

                            <div className={style.filmInfo}>
                                <Image
                                    alt='Фильм'
                                    width={128}
                                    height={195}
                                    src='https://thumbs.dfs.ivi.ru/storage2/contents/6/1/0ceca03c51c3d38f34bdf3fd0dd2c8.jpg/128x196/?q=85'
                                />

                                <div className={style.ball}>
                                    <span>8,9</span>
                                    <Image
                                        alt='Назад'
                                        width={20}
                                        height={14}
                                        src='/img/progress.png'
                                    />
                                </div>

                                <div className={style.information}>
                                    <span>2011, Франция, Драмы</span>
                                </div>

                                <div className={style.duration}>
                                    <Image
                                        alt='Назад'
                                        width={16}
                                        height={16}
                                        src='/img/time.png'
                                    />
                                    <span>112 минут</span>
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