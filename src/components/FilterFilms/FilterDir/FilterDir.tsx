import {useEffect, useState} from 'react'

import {GiFilmProjector} from 'react-icons/gi'

import Input from '@/components/UI/Input/Input'

import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterDir.module.scss'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const FilterDir = ({listDir}) => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const [inputDir, setInputDir] = useState('')



    const [newListDir, setNewListDir] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()



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

    const filterDir = (id, nameDir, nameDirEN) => {

        let url = '/movies'
        if (searchParams.toString()) {
            if (searchParams.has('dir')) {
                const valueStr = ('dir=' + searchParams.get('dir')).replaceAll(' ', '+')
                const newStr = searchParams.toString().replace(valueStr, `dir=${nameDirEN}`)
                router.push(`${pathname}?${newStr}`)
            } else {
                url = pathname + '?' + searchParams.toString()
                router.push(`${url}&dir=${nameDirEN}`)
            }
        } else {
            console.log(3)
            router.push(`${pathname}?dir=${nameDirEN}`)
        }


        // if ('arrMembersFilterDto' in filterObj) {
        //
        //     if (filterObj.arrMembersFilterDto.filter(item => item.idMember === id).length === 0) {
        //
        //         if ('arrDirMembers' in filterTextObj) {
        //             // dispatch(getFilterTextObj(
        //             //     {
        //             //         ...filterTextObj,
        //             //         'arrDirMembers': [...filterTextObj.arrDirMembers, nameDir],
        //             //     }
        //             // ))
        //         } else {
        //             // dispatch(getFilterTextObj(
        //             //     {
        //             //         ...filterTextObj,
        //             //         'arrDirMembers': [nameDir],
        //             //     }
        //             // ))
        //         }
        //         // dispatch(getFilterObj(
        //         //     {
        //         //         ...filterObj,
        //         //         'arrMembersFilterDto': [
        //         //             ...filterObj.arrMembersFilterDto,
        //         //             {
        //         //                 'idMember': id,
        //         //                 'idProfession': 1
        //         //             },
        //         //         ],
        //         //     }
        //         // ))
        //     }
        //     return
        // } else {
        //     dispatch(getFilterTextObj(
        //         {
        //             ...filterTextObj,
        //             'arrDirMembers': [nameDir],
        //         }
        //     ))
        //     dispatch(getFilterObj(
        //         {
        //             ...filterObj,
        //             'arrMembersFilterDto': [
        //                 {
        //                     'idMember': id,
        //                     'idProfession': 1
        //                 },
        //             ],
        //         }
        //     ))
        // }
    }

    // console.log(filterObj)

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
                                <button onClick={() => filterDir(item.id, item.nameRU, item.nameEN)}>
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