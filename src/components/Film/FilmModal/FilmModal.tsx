'use client'

import styles from './filmModal.module.scss'

import Image from 'next/image'

import FilmCommentsItem from '../FilmComments/FilmCommentsItem/FilmCommentsItem'

import FilmCreatorsItem from '../FilmCreators/FilmCreatorsItem/FilmCreatorsItem'
import FilmTrailersItem from '../FilmTrailers/FilmTrailersItem/FilmTrailersItem'

import {BsChevronRight} from 'react-icons/bs'
import {RiUserLine} from 'react-icons/ri'
import {RxLapTimer} from 'react-icons/rx'
import {AiOutlineLike} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'
import {funcDeclination} from '@/utils/funcDeclination'
import {Actor, Film, FilmInfo} from '@/components/Film/FilmInfo/FilmInfo'
import {useRouter} from 'next/navigation'
import {Comment} from '@/components/Film/FilmComments/FilmComments'

type MyModalProps = {
    actors: Actor[],
    filmInfo: FilmInfo,
    filmComments: Comment[],
    film: Film,
    id: string
}

const FilmModal = ({actors, filmInfo, filmComments, film, id}: MyModalProps) => {
    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()
    const router = useRouter()

    const uniqueProfessions = [...new Set(actors?.map(item => item.profession.nameRU))]

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

    return (
        <>
            {modalOpen.modalState &&
                <div className={styles.modal}>
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContainer}>
                            <div onClick={() => closeModalHandler()}
                                 className={styles.backLink}>
                                <BsChevronRight size={22}/>
                                <span>К фильму </span>
                            </div>

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
                                                                <FilmCreatorsItem key={actor.id} actor={actor}/> : ''))}
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
                                                {filmComments.map((comment) =>
                                                    <FilmCommentsItem key={comment.id} inModal={true} comment={comment}/>
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
                                            <FilmTrailersItem filmInfo={filmInfo} inModal={true}/>
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