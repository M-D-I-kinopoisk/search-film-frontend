import {useEffect, useState} from 'react'

import {GiFilmProjector} from 'react-icons/gi'

import Input from '@/components/UI/Input/Input'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterDir.module.scss'


const FilterDir = () => {

    const [inputDir, setInputDir] = useState('')

    const [listDir, setListDir] = useState<[] | any>([])

    const [newListDir, setNewListDir] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

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

    const filterDir = (id, nameDir) => {


        if ('arrMembersFilterDto' in filterObj) {

            if (filterObj.arrMembersFilterDto.filter(item => item.idMember === id).length === 0) {

                if ('arrDirMembers' in filterTextObj) {
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrDirMembers': [...filterTextObj.arrDirMembers, nameDir],
                        }
                    ))
                } else {
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrDirMembers': [nameDir],
                        }
                    ))
                }
                dispatch(getFilterObj(
                    {
                        ...filterObj,
                        'arrMembersFilterDto': [
                            ...filterObj.arrMembersFilterDto,
                            {
                                'idMember': id,
                                'idProfession': 1
                            },
                        ],
                    }
                ))
            }
            return
        } else {
            dispatch(getFilterTextObj(
                {
                    ...filterTextObj,
                    'arrDirMembers': [nameDir],
                }
            ))
            dispatch(getFilterObj(
                {
                    ...filterObj,
                    'arrMembersFilterDto': [
                        {
                            'idMember': id,
                            'idProfession': 1
                        },
                    ],
                }
            ))
        }
    }

    console.log(filterObj)

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
                                <button onClick={() => filterDir(item.id, item.nameRU)}>
                                    <GiFilmProjector color={'rgb(234, 0, 61)'} size={20}/>
                                    <span>{item.nameRU}</span>
                                </button>
                            </div>)
                    }
                )
                }
            </div>
        </div>
    )
}

export default FilterDir