import {useDispatch, useSelector} from 'react-redux'

import {BsCheckLg} from 'react-icons/bs'

import styles from './filterGenres.module.scss'
import {getFilterObj, selectFilms} from '@/redux/FilterSlice'
import {getFilterTextObj, selectFilterText} from '@/redux/FilterTextSlice'
import {useRouter, useSearchParams, useParams, usePathname} from 'next/navigation'




export default function FilterGenres({genres}) {

    const router = useRouter()
    const params = useParams()
    const pathname = usePathname()

    const searchParams = useSearchParams()

    const {filterObj} = useSelector(selectFilms)
    const {filterTextObj} = useSelector(selectFilterText)
    const dispatch = useDispatch()


    function filterGenres(e, id, nameGenres, nameGenresEN) {

        nameGenres = firstLetterToUpperCase(nameGenres)
        if ('arrIdGenres' in filterObj) {

            if (filterObj.arrIdGenres && filterObj.arrIdGenres.includes(id)) {

                if (filterObj.arrIdGenres.length === 1) {

                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`movies/${strCountries}?${searchParams.toString()}`,)

                } else {

                    const filterListNameGenresEN = filterTextObj.arrGenresEN.filter((str) => str !== nameGenresEN)
                    const str = (filterListNameGenresEN.join('+'))
                    const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                        filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                        ''
                    router.push(`/movies/${str}/${strCountries}?${searchParams.toString()}`,)

                }

            } else {

                const str = ([...filterTextObj.arrGenresEN, nameGenresEN].join('+'))
                const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                    filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                    ''
                router.push(`/movies/${str}/${strCountries}?${searchParams.toString()}`,)
            }
        } else {

            const strCountries = filterTextObj.hasOwnProperty('arrCountriesEN') ?
                filterTextObj.arrCountriesEN.join('+').toLowerCase() :
                ''
            router.push(`/movies/${nameGenresEN}/${strCountries}?${searchParams.toString()}`,)
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
                        {firstLetterToUpperCase(element.nameRU)}
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




