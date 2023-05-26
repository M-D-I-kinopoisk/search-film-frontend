import {useEffect, useState} from 'react'

import Input from '@/components/UI/Input/Input'

import {IoPersonCircleOutline} from 'react-icons/io5'

import styles from './filterActor.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'


const FilterActor = () => {


    const [inputActor, setInputActor] = useState('')

    const [listActor, setListActor] = useState<[] | any>([])

    const [newListActor, setNewListActor] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const resMan = await fetch('http://localhost:12120/api/film-members/profession/1')
            // const resWoman = await fetch('http://localhost:12120/api/film-members/profession/2')
            const actorMan = await resMan.json()
            // const actorWoman = await resWoman.json()
            setListActor(actorMan)
        }
        fetchData()

    }, [])


    function searchActor(e) {

        setInputActor(e.target.value)
        if (e.target.value.length === 0) {
            setNewListActor([])
        } else {
            const actors = listActor.filter((actor) =>
                actor.nameRU?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                actor.nameEN?.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setNewListActor(actors)
        }
    }

    console.log(newListActor)

    function filterActor(id, nameActor) {
        console.log(id)

        if ('arrMembersFilterDto' in filterObj) {

            if (filterObj.arrMembersFilterDto.filter(item => item.idMember === id).length === 0) {

                if ('arrActorMembers' in filterTextObj) {
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrActorMembers': [...filterTextObj.arrActorMembers, nameActor],
                        }
                    ))
                } else {
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrActorMembers': [nameActor],
                        }
                    ))
                }

                dispatch(getFilterTextObj(
                    {
                        ...filterTextObj,
                        'arrActorMembers': [...filterTextObj.arrActorMembers, nameActor],
                    }
                ))
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
                    'arrActorMembers': [nameActor],
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
            <Input label={'Актеры'}
                   type={'text'}
                   value={inputActor}
                   search={true}
                   onChange={(e) => searchActor(e)}
            />
            <div className={styles.filterActor__list}>
                {newListActor.map((item, inx) => {
                        if (inx <= 9)
                            return (<div key={inx} className={styles.filterActor}>
                                <button onClick={() => filterActor(item.id, item.nameRU)}>
                                    <IoPersonCircleOutline color={'rgb(234, 0, 61)'} size={20}/>
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

export default FilterActor