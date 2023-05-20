import {useState} from 'react'

import Input from '@/components/UI/Input/Input'

import {IoPersonCircleOutline} from 'react-icons/io5'

import styles from './filterActor.module.scss'


const FilterActor = () => {

    const [inputActor, setInputActor] = useState('')
    

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