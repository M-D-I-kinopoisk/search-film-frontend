import {useEffect, useState} from 'react'

import styles from './filterCountries.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import {BsCheckLg} from 'react-icons/bs'


const FilterCountries = () => {

    const [listCountries, setListCountries] = useState<[] | any>([])

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:12120/api/countries')
            const genres = await res.json()
            setListCountries(genres)
        }
        fetchData()
    }, [])

    function filterCountries(id, nameCountries) {
        if ('arrIdCountries' in filterObj) {

            if (filterObj.arrIdCountries && filterObj.arrIdCountries.includes(id)) {

                if (filterObj.arrIdCountries.length === 1) {
                    const {arrCountries, ...restName} = filterTextObj
                    dispatch(getFilterTextObj(
                        {...restName}
                    ))
                    const {arrIdCountries, ...restId} = filterObj
                    dispatch(getFilterObj(
                        {...restId, 'part': 1,}
                    ))

                } else {
                    const filterListNameCountries = filterTextObj.arrCountries.filter((str) => str !== nameCountries)
                    dispatch(getFilterTextObj(
                        {
                            ...filterTextObj,
                            'arrCountries': filterListNameCountries,
                        }
                    ))
                    const filterListIdCountries = filterObj.arrIdCountries.filter((number) => number !== id)
                    dispatch(getFilterObj(
                        {
                            ...filterObj,
                            'arrIdCountries': filterListIdCountries,
                            'part': 1,
                        }
                    ))
                }

            } else {

                dispatch(getFilterTextObj(
                    {
                        ...filterTextObj,
                        'arrCountries': [...filterTextObj.arrCountries, nameCountries],
                    }
                ))
                dispatch(getFilterObj(
                    {
                        ...filterObj,
                        'arrIdCountries': [...filterObj.arrIdCountries, id],
                        'part': 1,
                    }
                ))
            }
        } else {

            dispatch(getFilterTextObj(
                {
                    ...filterTextObj,
                    'arrCountries': [nameCountries],
                }
            ))
            dispatch(getFilterObj(
                {
                    ...filterObj,
                    'arrIdCountries': [id],
                    'part': 1,
                }
            ))
        }
    }



    return (
        <ul className={styles.country__list}>
            {listCountries.map((element, inx) => {
                return <li key={inx} className={styles.country__item}>
                    <button onClick={() => filterCountries(element.id, element.nameRU)}>
                        {element.nameRU}
                    </button>
                    <div
                        className={filterObj.arrIdCountries?.includes(element.id) ? styles.genres__checkbox_active : styles.genres__checkbox}>
                        <BsCheckLg size={20}/>
                    </div>
                </li>
                // <li key={inx} className={styles.genres__item}>
                //     <button onClick={() => filterGenres(element.id, element.nameRU)}>
                //         {firstLetterToUpperCase(element.nameRU)}
                //     </button>
                //     <div className={filterObj.arrIdGenres?.includes(element.id) ? styles.genres__checkbox_active  : styles.genres__checkbox }>
                //         <BsCheckLg size={20}/>
                //     </div>
                // </li>
            })}
        </ul>
    )
}

export default FilterCountries