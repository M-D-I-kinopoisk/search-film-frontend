'use client'

import styles from './filmComments.module.scss'

import FilmCommentsItem from './FilmCommentsItem/FilmCommentsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'

import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

export type Comment = {
    id: number,
    idFilm: number,
    idUser: number,
    prevId: number,
    childrenCount: number,
    profile: {
        profileName: string
    },
    createdAt: string,
    text: string,
    title: string
}

interface Comments {
    id: string,
    filmComments: Comment[]
}

const FilmComments = ({id, filmComments}: Comments) => {
    const router = useRouter()

    const dispatch = useDispatch()
    const {modalOpen} = useSelector(selectFilms)

    useEffect(() => {
        if (modalOpen.modalState) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [modalOpen.modalState])

    const modalOpenHandler = () => {
        dispatch(setOpenModal({
            modalState: true,
            value: 'comments'
        }))
        router.push(`film/${id}/comments`)
    }


    return (
        <div className={styles.comments}>
            <div className={styles.commentsTop}>
                <div onClick={() => modalOpenHandler()}
                     className={styles.commentsTitle}>
                    Комментарии
                </div>

                <button onClick={() => modalOpenHandler()}
                        className={styles.addComment}>
                    Оставить комментарий
                </button>
            </div>

            <ul className={styles.commentsItems}>
                {filmComments.length <= 4 ?
                    <div className={styles.filmContainer}>
                        {filmComments.map((comment) => (
                            <FilmCommentsItem key={comment.id} comment={comment}/>
                        ))}
                    </div> :
                    <Swiper className='slider__interesting'
                            spaceBetween={25}
                            speed={700}
                            modules={[Navigation]}
                            navigation={true}
                            breakpoints={{
                                1160: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4
                                }, 880: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3
                                }, 520: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2
                                }, 200: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                }
                            }}>
                        {filmComments.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <FilmCommentsItem comment={comment}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>}
            </ul>
        </div>
    )
}

export default FilmComments