import {useState} from 'react'

import {BiSearch} from 'react-icons/bi'
import {GiFilmProjector} from 'react-icons/gi'

import styles from './filterDir.module.scss'
import Input from '@/components/UI/Input/Input'


const FilterDir = () => {

    const [inputDir, setInputDir] = useState('')
    
    return (
        <div>
            <Input label={'Режиссеры'}
                   type={'text'}
                   value={inputDir}
                   search={true}
                   onChange={(e) => setInputDir(e.target.value)}
            />
            <div className={styles.filterDir}>
                <GiFilmProjector color={'rgb(234, 0, 61)'} size={20}/>
                <span>Брэд Питт</span>
            </div>
        </div>
    )
}

export default FilterDir