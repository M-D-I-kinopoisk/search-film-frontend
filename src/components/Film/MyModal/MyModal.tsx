'use client'

import React, {useState} from 'react'

import styles from './MyModal.module.scss'

import Image from 'next/image'

import CommentsItem from '../Comments/CommentsItem'
import AwardsItem from '../Awards/AwardsItem'
import CreatorsItem from '../Creators/CreatorsItem'
import TrailersItem from '../TrailersAndMaterials/TrailersItem'

import {BsChevronRight} from 'react-icons/bs'
import {RiUserLine} from 'react-icons/ri'
import {RxLapTimer} from 'react-icons/rx'
import {AiOutlineLike} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'
import {funcDeclination} from '@/utils/funcDeclination'
import {Actor, FilmInfo} from '@/components/Film/InfoContent/InfoContent'
import {useRouter} from 'next/navigation'

type MyModalProps = {
    actors: Actor[],
    filmInfo: FilmInfo
    id : string
}

const MyModal = ({ actors, filmInfo, id}: MyModalProps) => {
    const {film, comments, modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()
    const router = useRouter()

    const uniqueProfessions = [...new Set(actors?.map(item => item.profession.nameRU))]

    const links = [
        {title: 'Создатели', value: 'creators'},
        {title: 'Комментарии', value: 'comments'},
        {title: 'Трейлеры', value: 'trailers'},
        {title: 'Награды', value: 'awards'}
    ]

    const testItems = [1, 2, 3, 4, 5]
    
    const closeModal = () => {
        dispatch(setOpenModal({modalState: false}))
        router.push(`/film/${id}`)
    }

    return (
        <>
            {modalOpen.modalState &&
                <div className={styles.modal}>
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContainer}>
                            <div onClick={() => closeModal()}
                                 className={styles.backLink}>
                                <BsChevronRight size={22}/>
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
                                                <li key={link.value} className={modalOpen.value === link.value
                                                    ? styles.active : ''}
                                                    onClick={() => dispatch(setOpenModal({
                                                        modalState: true,
                                                        value: link.value
                                                    }))}>
                                                    {link.title}
                                                </li>
                                            )}
                                        </ul>

                                        <div className={styles.line}></div>
                                    </div>
                                    {modalOpen.value === 'creators' &&
                                        <div className={styles.creators}>
                                            {uniqueProfessions.map((item: any) => (

                                                <div key={item}>
                                                    <div className={styles.positions}>
                                                        {item}
                                                    </div>

                                                    <div className={styles.directorsItems}>
                                                        {actors.map((actor: any) =>
                                                            (actor.profession.nameRU === item ?
                                                                <CreatorsItem key={actor.id} actor={actor}/>
                                                                : ''))}
                                                    </div>
                                                </div>

                                            ))}
                                        </div>}

                                    {modalOpen.value === 'comments' &&
                                        <div>
                                            <div className={styles.addCommentBlock}>
                                                <RiUserLine size={24}/>

                                                <input type='text'
                                                       placeholder='Написать комментарий'/>

                                                <div className={styles.buttons}>
                                                    <button
                                                        className={styles.cancelButton}>
                                                        Отменить
                                                    </button>
                                                    <button disabled>Отправить</button>
                                                </div>
                                            </div>

                                            <div>
                                                {comments.map((comment) =>
                                                    <CommentsItem key={comment.id} inModal={true} comment={comment}/>
                                                )}
                                                <AiOutlineLike size={20} fill='#fff'/>

                                            </div>

                                            <div className={styles.showMoreButton}>
                                                Показать еще
                                            </div>
                                        </div>
                                    }

                                    {modalOpen.value === 'trailers' &&
                                        <div className={styles.trailers}>
                                            <TrailersItem filmInfo={filmInfo} inModal={true}/>
                                        </div>
                                    }

                                    {modalOpen.value === 'awards' &&
                                        <div className={styles.awards}>
                                            {testItems.map((el) =>
                                                <AwardsItem key={el}
                                                            inModal={true}/>
                                            )}
                                        </div>
                                    }
                                </div>

                                <div className={styles.filmInfo}>
                                    {film.imageName === null ?
                                        <Image
                                            src={'/img/static-filmImage.jpg'}
                                            width={128}
                                            height={195}
                                            alt='Film'/>
                                        :
                                        <Image
                                            alt='Фильм'
                                            width={128}
                                            height={195}
                                            src={`http://localhost:12120/api/films/images/${film.imageName}`}/>}

                                    <div className={styles.ball}>
                                        <span>{film.rating.toFixed(1)}</span>
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
                                        <span>{film.year}, {film.country.nameRU}, {film.genres.slice(0, 1).map((genre) => (
                                            <div className={styles.text}
                                                 key={genre.id}>{genre.nameRU}</div>
                                        ))}</span>
                                    </div>

                                    <div className={styles.duration}>
                                        <RxLapTimer size={16}/>
                                        <span>{funcDeclination(film.duration, ['минута', 'минуты', 'минут'])}</span>
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