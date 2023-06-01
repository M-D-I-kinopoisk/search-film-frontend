'use client'

import styles from './admin.module.scss'
import Input from '@/components/UI/Input/Input'
import {useCallback, useEffect, useState} from 'react'
import Skeleton from '@/components/UI/Skeleton/Skeleton'


export default function Admin() {

    const [inputValue, setInputValue] = useState<string>('')

    const [filmsList, setFilmsList] = useState<[]>([])

    const [part, setPart] = useState<number>(1)

    const [loading, setLoading] = useState<boolean>(true)



    const getResult = useCallback(() => {

        return 2 * 2
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            console.log('работает')
            console.log(part)
            setLoading(false)
            try {
                fetch('http://localhost:12120/api/films/filter', {
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
                    .then(response => response.json())
                    .then(data => {
                        setFilmsList(data)
                        console.log(filmsList)
                    })
            } catch (error) {
                console.log(error.message)
            }
            setLoading(true)

        }



            fetchData()


        console.log(filmsList)

    }, [getResult])



    const searchFilm = (inputValue, filmsList) => {
        setPart( 1)
    }
console.log(filmsList)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Input onChange={(e) => setInputValue(e.target.value)} label={'Введите название фильма'} type={'text'}/>
                <button style={{color: 'white'}} onClick={() => searchFilm(inputValue, filmsList)}
                        className={styles.btn__search}>Поиск
                </button>
            </div>
            {!loading && <Skeleton/>}
            {loading && filmsList.map((item: any, inx) => <p style={{color: 'white'}} key={inx}>{item.nameRU}</p>)}
            {/*{filmsList.length > 0 &&*/}
            {/*    filmsList.length % 28 === 0 &&*/}
            {/*    <button className={styles.movies__btn} onClick={() => nextListFilms(filterObj.part)}>*/}
            {/*        Показать еще*/}
            {/*    </button>*/}
            {/*}*/}
        </div>
    )
}