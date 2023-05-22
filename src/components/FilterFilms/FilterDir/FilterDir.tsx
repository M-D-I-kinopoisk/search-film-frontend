import {useEffect, useState} from 'react'

import {GiFilmProjector} from 'react-icons/gi'

import styles from './filterDir.module.scss'
import Input from '@/components/UI/Input/Input'


const FilterDir = () => {

    const [inputDir, setInputDir] = useState('')

    const [listDir, setListDir] = useState<[] | any>([])

    const [newListDir, setNewListDir] = useState<[] | any>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/film-members/profession/9')
            const dir = await res.json()
            setListDir(dir)
        }
        fetchData()

    }, [])

    function searchDir(e) {
        setInputDir(e.target.value)
        if (e.target.value.length === 0) {
            setNewListDir([])
        } else {
            const actors = listDir.filter((actor) =>
                actor.nameRU?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                actor.nameEN?.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setNewListDir(actors)
        }
    }

    return (
        <div>
            <Input label={'Режиссеры'}
                   type={'text'}
                   value={inputDir}
                   search={true}
                   onChange={(e) => searchDir(e)}
            />
            <div className={styles.filterDir__list}>
                {newListDir.map((item, inx) => {
                        if (inx <= 9)
                            return (<div key={inx} className={styles.filterDir}>
                                <GiFilmProjector color={'rgb(234, 0, 61)'} size={20}/>
                                <span>{item.nameRU}</span>
                            </div>)
                    }
                )
                }
            </div>
        </div>
    )
}

export default FilterDir