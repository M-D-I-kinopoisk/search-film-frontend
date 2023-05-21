import {useEffect, useState} from 'react'

import Input from '@/components/UI/Input/Input'

import {IoPersonCircleOutline} from 'react-icons/io5'

import styles from './filterActor.module.scss'


const FilterActor = () => {

    const [inputActor, setInputActor] = useState('')

    const [listActor,  setListActor] = useState<[] | any>([])

    useEffect(() => {
        const fetchDataMan = async () => {
            const resMan = await fetch('http://localhost:12120/api/film-members/profession/1')
            const actorMan = await resMan.json()
            setListActor((prev) => [...prev, ...actorMan])
        }
        fetchDataMan()

        const fetchDataWoman = async () => {
            const resWoman = await fetch('http://localhost:12120/api/film-members/profession/2')
            const actorWoman = await resWoman.json()
            setListActor((prev) => [...prev, ...actorWoman])
        }
        fetchDataWoman()
    }, [])


    console.log(listActor)

    function searchActor () {

    }
    

    return (
        <div>
            <Input label={'Актеры'}
                   type={'text'}
                   value={inputActor}
                   search={true}
                   onChange={(e) => setInputActor(e.target.value)}
            />
            <div className={styles.filterActor}>
                <IoPersonCircleOutline color={'rgb(234, 0, 61)'} size={20}/>
                <span>Брэд Питт</span>
            </div>
        </div>
    )
}

export default FilterActor