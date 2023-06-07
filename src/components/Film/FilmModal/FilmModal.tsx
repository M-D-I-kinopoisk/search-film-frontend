'use client'

import styles from './filmModal.module.scss'
import modalClasses from '@/components/UI/CommentForm/commentForm.module.scss'

import Image from 'next/image'

import FilmModalCreator from '@/components/Film/FilmModal/FilmModalCreators/FilmModalCreators'
import FilmModalComments from '@/components/Film/FilmModal/FilmModalComments/FilmModalComments'
import FilmModalTrailer from '@/components/Film/FilmModal/FilmModalTrailer/FilmModalTrailer'

import {BsChevronRight} from 'react-icons/bs'
import {RxLapTimer} from 'react-icons/rx'
import {AiOutlineLike} from 'react-icons/ai'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'

import {funcDeclination} from '@/utils/funcDeclination'

import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'

import {RiUserLine} from 'react-icons/ri'
import {useState} from 'react'
import {FilmModalProps} from '@/types/components/Film'

const FilmModal = ({actors, filmInfo, filmComments, film, id}: FilmModalProps) => {
    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()
    const router = useRouter()

    const {data: session} = useSession()

    const uniqueProfessions = [...new Set(actors?.map(item => item.profession.nameRU))]

    const [value, setValue] = useState('')

    const links = [
        {title: 'Создатели', value: 'creators'},
        {title: 'Комментарии', value: 'comments'},
        {title: 'Трейлеры', value: 'trailers'}
    ]
    const closeModalHandler = () => {
        dispatch(setOpenModal({modalState: false}))
        router.push(`/film/${id}`)
    }

    const activeLinkHandler = (link) => {
        dispatch(setOpenModal({
            modalState: true,
            value: link.value
        }))

        router.push(`/film/${id}/${link.value}`)
    }

    const newCommentSubmit = (event) => {
        event.preventDefault()

        setValue('')

        postNewComment()
    }

    async function postNewComment() {
        try {
            const response = await fetch('http://localhost:12120/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    'idFilm': +id,
                    'idUser': session?.user.idUser,
                    'text': value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user.token}`
                },
                next: {revalidate: 1}
            })
            return response.json()

        } catch (e) {
            console.log('Произошла ошибка: ', e)

            throw e
        }
    }

    return (
        <>
            {modalOpen.modalState &&
                <div className={styles.modal}>
                    <div className={styles.modalOverlay}>
                        <div onClick={() => closeModalHandler()}
                             className={styles.backLink}>
                            <BsChevronRight size={22}/>
                            <span>К фильму </span>
                        </div>
                        <div className={styles.modalContainer}>
                            <div className={styles.modalWrapper}>
                                <div className={styles.modalInfo}>
                                    <div className={styles.title}>
                                        <span> {film.nameRU} (Фильм {film.year})</span>
                                    </div>

                                    <div>
                                        <ul className={styles.navbar}>
                                            {links.map((link) =>
                                                <li key={link.value} className={modalOpen.value === link.value
                                                    ? styles.active : ''}
                                                    onClick={() => activeLinkHandler(link)}>
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
                                                                <FilmModalCreator inModal={true} key={actor.id}
                                                                                  actor={actor}/> : ''))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>}

                                    {modalOpen.value === 'comments' &&
                                        <div>
                                            <form className={modalClasses.formComment}
                                                  onSubmit={(event) => newCommentSubmit(event)}>
                                                <RiUserLine size={24}/>

                                                <div className={modalClasses.inputContainer}>
                                                    <input value={value}
                                                           onChange={(event) => setValue(event.target.value)}
                                                           className={modalClasses.inputComment} type='text'/>
                                                    <div className={modalClasses.placeholder}>Написать комментарий</div>
                                                </div>

                                                <button type='submit'>Отправить</button>
                                            </form>
                                            <div>
                                                {filmComments.map((comment) =>
                                                    <FilmModalComments key={comment.id} inModal={true}
                                                                       comment={comment}/>
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
                                            <FilmModalTrailer filmInfo={filmInfo} inModal={true}/>
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

export default FilmModal