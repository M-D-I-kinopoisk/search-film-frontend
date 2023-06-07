'use client'

import {useSession} from 'next-auth/react'
import {useEffect, useState} from 'react'

import Input from '@/components/UI/Input/Input'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import FilmCard from '@/components/FilmCard/FilmCard'

import styles from './adminFilms.module.scss'
import {notFound} from 'next/navigation'

export default function AdminFilms() {

    const {data: session} = useSession()

    const [inputSearch, setInputSearch] = useState<string>('')

    const [inputChange, setInputChange] = useState(
        {nameRU: '', nameEN: ''})

    const [filmsList, setFilmsList] = useState<[]>([])

    const [part, setPart] = useState<number>(0)

    const [loading, setLoading] = useState<boolean>(true)

    const [empty, setEmpty] = useState(false)


    const [toggle, setToggle] = useState(
        {changeFilm: false, addFilm: false})

    useEffect(() => {
        const fetchData = async () => {
            setLoading(false)
            try {

                const response = await fetch('http://localhost:12120/api/films/filter', {
                    method: 'POST',
                    body: JSON.stringify({
                        'ratingStart': 1,
                        'countRatingStart': 1000,
                        'yearStart': 0,
                        'yearEnd': 0,
                        'part': part,
                        'typeSorting': 'year'
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()

                if (Object.keys(data).length !== 0) {
                    const filmFilter = data.filter(i => i.nameRU?.toLowerCase() === inputSearch.toLowerCase())
                    const filmFilterEN = data.filter(i => i.nameEN?.toLowerCase() === inputSearch.toLowerCase())
                    if (filmFilter.length > 0 || filmFilterEN.length > 0) {
                        setLoading(true)
                        console.log('найдено')
                        setFilmsList(filmFilter.length > 0 ? filmFilter : filmFilterEN)
                        setPart(0)

                    } else {
                        setPart(prev => prev + 1)

                    }
                } else {
                    setLoading(true)
                    setEmpty(true)
                    console.log('не найдено')
                    setPart(0)
                }

            } catch (error) {
                console.log(error.message)
            }
        }

        if (part > 0) {
            fetchData()
        }

    }, [part])

    const searchFilm = (inputValue, filmsList) => {
        if (inputValue.length > 0) {
            setEmpty(false)
            setPart(1)
        }
    }

    const removeFilm = (idFilm) => {
        setToggle({changeFilm: false, addFilm: false})
        console.log(idFilm)
    }

    const putChangeName = async (film, nameRU, nameEN) => {
        const arrIdGenres = film.genres.map(i => i.id)
        console.log(arrIdGenres)
        console.log(film)
        console.log(film.arrIdGenres)
        console.log(session?.user.token)
        try {

            const response = await fetch('http://localhost:12120/api/films', {
                method: 'PUT',
                body: JSON.stringify({
                    'id': film.id,
                    'nameRU': nameRU,
                    'nameEN': nameEN,
                    'year': film.year,
                    'ageRating': film.ageRating,
                    'duration': film.duration,
                    'idCountry': film.idCountry,
                    'arrIdGenres': arrIdGenres
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user.token}`
                }
            })
            if (response.status === 200) {

            }
            console.log(response)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    if (session?.user?.role?.name !== 'ADMIN') {
        return notFound()
    }

    return (
        <>
            <div className={styles.search__film}>
                <div className={styles.input}>
                    <Input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}
                           label={'Введите полное название фильма'}
                           type={'text'}/>
                </div>
                <button onClick={() => searchFilm(inputSearch, filmsList)}
                        className={styles.btn__search}>Поиск
                </button>
            </div>

            {!loading && <Skeleton/>}
            {empty && <h3 className={styles.not__found}>Фильм не найден, введите другое название</h3>}
            {loading &&
                !empty &&
                filmsList && filmsList.map((item: any, inx) =>
                    <div key={inx} className={styles.filmBlock}>
                        <FilmCard film={item}/>
                        <div className={styles.filmBlock__right}>
                            <div>
                                <button onClick={() => setToggle({changeFilm: !toggle.changeFilm, addFilm: false})}
                                        className={styles.btn__change}>
                                    Изменить название
                                </button>
                                {toggle.changeFilm &&
                                    <div className={styles.group}>
                                        <Input
                                            onChange={(e) => setInputChange({...inputChange, nameRU: e.target.value})}
                                            value={inputChange.nameRU}
                                            label={'Новое название EN'}
                                            type={'text'}/>
                                        <Input
                                            onChange={(e) => setInputChange({...inputChange, nameEN: e.target.value})}
                                            value={inputChange.nameEN}
                                            label={'Новое название RU'}
                                            type={'text'}/>
                                        <button className={styles.btn__post}
                                                onClick={() => putChangeName(item, inputChange.nameRU, inputChange.nameEN,)}>
                                            Подтвердить
                                        </button>
                                    </div>}
                            </div>
                            <div>
                                <button className={styles.btn__add}>Добавить</button>
                            </div>
                            <div>
                                <button onClick={() => removeFilm(item.id)} className={styles.btn__remove}>Удалить
                                </button>
                            </div>
                        </div>
                    </div>)}
        </>)
}