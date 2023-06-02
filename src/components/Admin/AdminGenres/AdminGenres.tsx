'use client'

import {useEffect, useState} from 'react'

import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs'

import Input from '@/components/UI/Input/Input'

import styles from './adminGenres.module.scss'


interface listGenres {
    id: number;
    'nameRU': string,
    'nameEN': string
}

export default function AdminGenres() {

    const [toggle, setToggle] = useState<boolean>(false)

    const [changeToggle, setChangeToggle] = useState<number>(-1)

    const [inputChange, setInputChange] = useState(
        {nameRU: '', nameEN: ''})

    const [putObj, setPutObj] = useState({})

    const [listGenres, setListGenres] = useState<listGenres[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch('http://localhost:12120/api/genres', {
                    method: 'PUT',
                    body: JSON.stringify(putObj),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
            } catch (error) {
                console.log(error.message)
            }
        }
        if (Object.keys(putObj).length !== 0) {
            fetchData()
        }

    }, [putObj])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:12120/api/genres')
            const data = await response.json()
            setListGenres(data)
        }

        fetchData()
    }, [])




    const openChange = (inx) => {
        if (inx === changeToggle) {
            setChangeToggle(-1)
        } else {
            setChangeToggle(inx)
        }
    }

    const putGenres = (id, nameRU, nameEN) => {
        setPutObj({
            'id': id,
            'nameRU': nameRU,
            'nameEN': nameEN
        })
    }

    return (
        <div>
            <button onClick={() => setToggle(!toggle)} className={styles.genres__title}>
                <h1>Жанры</h1>
                {toggle ? (<div style={{pointerEvents: 'none'}}><BsChevronCompactUp size={20}/></div>) :
                    (<div style={{pointerEvents: 'none'}}><BsChevronCompactDown size={20}/></div>)}
            </button>

            {toggle &&
                <ul className={styles.genresList}>
                    {listGenres.length > 0 && listGenres.map((item, inx) => {
                        return (
                            <li key={inx}>
                                <div className={styles.genresItem}>
                                    <div>
                                        <p className={changeToggle === inx ? styles.nameActive : ''}>{item.nameRU}</p>
                                        <p className={changeToggle === inx ? styles.nameActive : ''}>{item.nameEN}</p>
                                    </div>

                                    <button onClick={() => openChange(inx)} className={styles.btn__change}>
                                        Изменить название
                                    </button>
                                </div>
                                {changeToggle === inx &&
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
                                        <button
                                            onClick={() => putGenres(item.id, inputChange.nameRU, inputChange.nameRU)}
                                            className={styles.btn__post}>
                                            Подтвердить
                                        </button>
                                    </div>}
                            </li>)
                    })}
                </ul>}
        </div>
    )
}