import {useState} from 'react'

import Input from '@/components/UI/Input/Input'

import {IoPersonCircleOutline} from 'react-icons/io5'

import styles from './filterActor.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const FilterActor = ({listActor}) => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()


    const [inputActor, setInputActor] = useState('')


    const [newListActor, setNewListActor] = useState<[] | any>([])




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


    function filterActor(id, nameActor, nameActorEN) {

        let url = '/movies'
        if (searchParams.toString()) {

            if (searchParams.has('actor')) {

                const valueStr = ('actor=' + searchParams.get('actor')).replaceAll(' ', '+')
                const newStr = searchParams.toString().replace(valueStr, `actor=${nameActorEN}`)

                router.push(`${pathname}?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&actor=${nameActorEN}`)
            }
        } else {
            router.push(`${pathname}?actor=${nameActorEN}`)
        }

    }



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
                                <button onClick={() => filterActor(item.id, item.nameRU, item.nameEN)}>
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