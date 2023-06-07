'use client'

import {useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import { selectFilter} from '@/redux/FilterSlice'
import { selectFilterText} from '@/redux/FilterTextSlice'
import {useRouter, useSearchParams} from 'next/navigation'
import {useLocale} from 'next-intl'




export default function FilterGenres({genres}) {

    const locale = useLocale()

    const router = useRouter()


    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilter)
    const {filterTextObj} = useSelector(selectFilterText)


    function filterGenres(e, id, nameGenres, nameGenresEN) {

        if ('arrIdGenres' in filterObj) {

            if (filterObj.arrIdGenres && filterObj.arrIdGenres.includes(id)) {

                if (filterObj.arrIdGenres.length === 1) {

                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`movies/${strCountries}?${searchParams?.toString()}`,)

                } else {

                    const filterListNameGenresEN = filterTextObj.arrGenresEN.filter((str) => str !== nameGenresEN)
                    const str = (filterListNameGenresEN.join('+'))
                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`/movies/${str}/${strCountries}?${searchParams?.toString()}`,)

                }

            } else {

                const str = ([...filterTextObj.arrGenresEN, nameGenresEN].join('+'))
                const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                    filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                    ''
                router.push(`/movies/${str}/${strCountries}?${searchParams?.toString()}`,)
            }
        } else {

            const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                ''
            router.push(`/movies/${nameGenresEN}/${strCountries}?${searchParams?.toString()}`,)
        }
    }


    function firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    return (
        <ul className={styles.genres__list}>
            {genres.map((element, inx) => {
                return <li key={inx} className={styles.genres__item}>
                    <button onClick={(e) => filterGenres(e, element.id, element.nameRU, element.nameEN)}>
                        {firstLetterToUpperCase(locale === 'ru' ? element.nameRU : element.nameEN)}
                    </button>
                    {filterObj.arrIdGenres?.includes(element.id) ?
                        <div className={styles.genres__checkbox_active}>
                            <BsCheckLg size={20}/>
                        </div> :
                        <div className={styles.genres__checkbox}>
                            <BsCheckLg size={20}/>
                        </div>}
                </li>
            })}
        </ul>
    )
}




